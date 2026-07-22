param(
  [Parameter(Mandatory = $true)]
  [string]$DocumentPath,
  [string]$OutputPath
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.IO.Compression.FileSystem

function Get-ParagraphLines([string]$Path) {
  $archive = [System.IO.Compression.ZipFile]::OpenRead($Path)
  try {
    $entry = $archive.GetEntry("word/document.xml")
    if (-not $entry) { throw "word/document.xml was not found in $Path" }
    $reader = [System.IO.StreamReader]::new($entry.Open())
    try { [xml]$document = $reader.ReadToEnd() } finally { $reader.Dispose() }
  } finally {
    $archive.Dispose()
  }

  $namespaces = [System.Xml.XmlNamespaceManager]::new($document.NameTable)
  $namespaces.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
  foreach ($paragraph in $document.SelectNodes("//w:body/w:p", $namespaces)) {
    (($paragraph.SelectNodes(".//w:t", $namespaces) | ForEach-Object { $_.'#text' }) -join "").Trim()
  }
}

function Get-BraceDelta([string]$Line, [ref]$InString, [ref]$Escaped) {
  $delta = 0
  foreach ($character in $Line.ToCharArray()) {
    if ($Escaped.Value) { $Escaped.Value = $false; continue }
    if ($character -eq '\\' -and $InString.Value) { $Escaped.Value = $true; continue }
    if ($character -eq '"') { $InString.Value = -not $InString.Value; continue }
    if (-not $InString.Value) {
      if ($character -eq '{') { $delta++ }
      elseif ($character -eq '}') { $delta-- }
    }
  }
  return $delta
}

function Repair-KnownDocumentErrors([string]$ProductKey, $Schema) {
  if ($ProductKey -ne 'tablets/cabernova') { return $Schema }

  $json = $Schema | ConvertTo-Json -Depth 100 -Compress
  $json = $json.Replace('/products/tablets/aromanova', '/products/tablets/cabernova')
  $json = $json.Replace('AROMANOVA', 'CABERNOVA')
  $json = $json.Replace('Exemestane is identified', 'Cabergoline is identified')
  $json = $json.Replace('Exemestane', 'Cabergoline')
  $json = $json.Replace('aromatase inhibitor', 'dopamine agonist')
  return $json | ConvertFrom-Json
}

$lines = @(Get-ParagraphLines -Path $DocumentPath)
$blocks = [System.Collections.Generic.List[object]]::new()
$buffer = [System.Collections.Generic.List[string]]::new()
$capturing = $false

for ($index = 0; $index -lt $lines.Count; $index++) {
  $line = $lines[$index]
  if ($line -match '<script\s+type="application/ld\+json"') {
    $capturing = $true
    $buffer.Clear()
    continue
  }
  if (-not $capturing) { continue }
  if ($line -ne '</script>') { $buffer.Add($line); continue }

  $capturing = $false
  $raw = ($buffer -join "`n").Trim()
  # Word documents commonly contain trailing commas copied from draft JSON.
  $cleaned = [regex]::Replace($raw, '[\u201c\u201d](?=\s*[,}\]])', '"')
  $cleaned = [regex]::Replace($cleaned, ',\s*([}\]])', '$1')
  try { $schema = $cleaned | ConvertFrom-Json } catch {
    Write-Warning "Skipped invalid JSON-LD ending at paragraph ${index}: $($_.Exception.Message)"
    continue
  }
  if ($schema.'@context' -eq 'https://schema.org') {
    $matches = [regex]::Matches($cleaned, 'https://www\.novatechsciences\.com/products/(?<category>[^/"#\s]+)/(?<slug>[^/"#\s,]+)')
    $productKeys = @($matches | ForEach-Object { "$($_.Groups['category'].Value)/$($_.Groups['slug'].Value.TrimEnd('/'))" } |
      Group-Object | Sort-Object Count -Descending | Select-Object -First 1 | ForEach-Object { $_.Name })
    $blocks.Add([pscustomobject]@{ Index = $index; Raw = $cleaned; Schema = $schema; ProductKeys = $productKeys })
  }
}

$result = [ordered]@{}
$currentKey = $null
foreach ($block in $blocks) {
  if ($block.ProductKeys.Count -eq 1) { $currentKey = $block.ProductKeys[0] }
  if (-not $currentKey -or $block.ProductKeys.Count -gt 1) { continue }
  $key = $currentKey
  if (-not $result.Contains($key)) { $result[$key] = [System.Collections.Generic.List[object]]::new() }
  $result[$key].Add((Repair-KnownDocumentErrors -ProductKey $key -Schema $block.Schema))
}
$anchored = @($blocks | Where-Object { $_.ProductKeys.Count -eq 1 })

if ($OutputPath) {
  $parent = Split-Path -Parent $OutputPath
  if ($parent -and -not (Test-Path -LiteralPath $parent)) { New-Item -ItemType Directory -Path $parent | Out-Null }
  $json = $result | ConvertTo-Json -Depth 100
  [System.IO.File]::WriteAllText($OutputPath, $json, [System.Text.UTF8Encoding]::new($false))
}

[pscustomobject]@{
  Paragraphs = $lines.Count
  JsonLdBlocks = $blocks.Count
  AnchoredBlocks = $anchored.Count
  UnanchoredBlocks = @($blocks | Where-Object { $_.ProductKeys.Count -eq 0 }).Count
  AmbiguousBlocks = @($blocks | Where-Object { $_.ProductKeys.Count -gt 1 }).Count
  Products = $result.Count
  SchemasByProduct = @($result.GetEnumerator() | ForEach-Object { [pscustomobject]@{ Product = $_.Key; Schemas = $_.Value.Count } })
} | ConvertTo-Json -Depth 5
