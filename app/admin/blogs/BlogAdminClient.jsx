"use client";

import { useEffect, useMemo, useState } from "react";

const INITIAL_FORM = {
  id: "",
  title: "",
  image: "",
  intro: "",
  metaTitle: "",
  metaDescription: "",
  contentJson: "[]",
  faqsJson: "[]",
};

export default function BlogAdminClient() {
  const [lang, setLang] = useState("en");
  const [blogs, setBlogs] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const selectedBlog = useMemo(
    () => blogs.find((b) => b.id === selectedId) || null,
    [blogs, selectedId]
  );

  async function loadBlogs(nextLang = lang) {
    const res = await fetch(`/api/admin/blogs?lang=${nextLang}`, { cache: "no-store" });
    const data = await res.json();
    setBlogs(Array.isArray(data?.blogs) ? data.blogs : []);
  }

  useEffect(() => {
    loadBlogs(lang);
  }, [lang]);

  useEffect(() => {
    if (!selectedBlog) return;
    setForm({
      id: selectedBlog.id || "",
      title: selectedBlog.title || "",
      image: selectedBlog.image || "",
      intro: selectedBlog.intro || "",
      metaTitle: selectedBlog.meta?.title || "",
      metaDescription: selectedBlog.meta?.description || "",
      contentJson: JSON.stringify(selectedBlog.content || [], null, 2),
      faqsJson: JSON.stringify(selectedBlog.faqs || [], null, 2),
    });
  }, [selectedBlog]);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function resetForm() {
    setSelectedId("");
    setForm(INITIAL_FORM);
  }

  async function handleUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setBusy(true);
    setStatus("Uploading image...");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/local-image-upload", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Upload failed");
      updateField("image", data.url || "");
      setStatus("Image uploaded.");
    } catch (error) {
      setStatus(error.message || "Image upload failed.");
    } finally {
      setBusy(false);
    }
  }

  function buildPayload() {
    const content = JSON.parse(form.contentJson || "[]");
    const faqs = JSON.parse(form.faqsJson || "[]");
    return {
      id: form.id,
      title: form.title,
      image: form.image,
      intro: form.intro,
      meta: {
        title: form.metaTitle,
        description: form.metaDescription,
      },
      content,
      faqs,
    };
  }

  async function handleCreate() {
    setBusy(true);
    setStatus("Creating blog...");
    try {
      const blog = buildPayload();
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, blog }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Create failed");
      await loadBlogs(lang);
      setSelectedId(data.blog.id);
      setStatus("Blog created.");
    } catch (error) {
      setStatus(error.message || "Create failed.");
    } finally {
      setBusy(false);
    }
  }

  async function handleUpdate() {
    if (!selectedId) {
      setStatus("Select a blog first.");
      return;
    }
    setBusy(true);
    setStatus("Updating blog...");
    try {
      const blog = buildPayload();
      const res = await fetch("/api/admin/blogs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, id: selectedId, blog }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Update failed");
      await loadBlogs(lang);
      setSelectedId(data.blog.id);
      setStatus("Blog updated.");
    } catch (error) {
      setStatus(error.message || "Update failed.");
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete() {
    if (!selectedId) {
      setStatus("Select a blog first.");
      return;
    }
    const yes = window.confirm(`Delete blog "${selectedId}"?`);
    if (!yes) return;

    setBusy(true);
    setStatus("Deleting blog...");
    try {
      const res = await fetch("/api/admin/blogs", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, id: selectedId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Delete failed");
      await loadBlogs(lang);
      resetForm();
      setStatus("Blog deleted.");
    } catch (error) {
      setStatus(error.message || "Delete failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f9fb] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-[#0f2f57]">Blog Manager</h1>
        <p className="mt-2 text-sm text-gray-600">
          Create, edit, and delete blogs. Uploaded images are saved in `public/blog`.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <aside className="rounded-xl bg-white p-4 shadow">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold">Blogs</h2>
              <select
                className="rounded border px-2 py-1 text-sm"
                value={lang}
                onChange={(e) => {
                  setLang(e.target.value);
                  resetForm();
                }}
              >
                {[
                  "en","es","fr","de","it","pt","ar","ru","zh","ro","sq","el","bg","mk","sr","hr","bs",
                ].map((l) => (
                  <option key={l} value={l}>{l.toUpperCase()}</option>
                ))}
              </select>
            </div>

            <button
              className="mb-3 w-full rounded bg-[#18487d] px-3 py-2 text-sm text-white"
              onClick={resetForm}
              disabled={busy}
            >
              + New Blog
            </button>

            <div className="max-h-[60vh] space-y-2 overflow-auto pr-1">
              {blogs.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedId(b.id)}
                  className={`w-full rounded border px-3 py-2 text-left text-sm ${
                    selectedId === b.id ? "border-[#18487d] bg-[#eaf4fb]" : "border-gray-200"
                  }`}
                >
                  <div className="font-medium">{b.title || b.id}</div>
                  <div className="text-xs text-gray-500">{b.id}</div>
                </button>
              ))}
            </div>
          </aside>

          <main className="rounded-xl bg-white p-5 shadow lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                <div className="mb-1 font-medium">Blog ID (slug)</div>
                <input className="w-full rounded border p-2" value={form.id} onChange={(e) => updateField("id", e.target.value)} />
              </label>
              <label className="text-sm">
                <div className="mb-1 font-medium">Title</div>
                <input className="w-full rounded border p-2" value={form.title} onChange={(e) => updateField("title", e.target.value)} />
              </label>
            </div>

            <label className="mt-4 block text-sm">
              <div className="mb-1 font-medium">Main Image URL</div>
              <input className="w-full rounded border p-2" value={form.image} onChange={(e) => updateField("image", e.target.value)} />
            </label>

            <label className="mt-2 block text-sm">
              <div className="mb-1 font-medium">Upload Local Image</div>
              <input type="file" accept="image/*" onChange={handleUpload} disabled={busy} />
            </label>

            <label className="mt-4 block text-sm">
              <div className="mb-1 font-medium">Intro (HTML/text)</div>
              <textarea className="h-28 w-full rounded border p-2" value={form.intro} onChange={(e) => updateField("intro", e.target.value)} />
            </label>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                <div className="mb-1 font-medium">Meta Title</div>
                <input className="w-full rounded border p-2" value={form.metaTitle} onChange={(e) => updateField("metaTitle", e.target.value)} />
              </label>
              <label className="text-sm">
                <div className="mb-1 font-medium">Meta Description</div>
                <input className="w-full rounded border p-2" value={form.metaDescription} onChange={(e) => updateField("metaDescription", e.target.value)} />
              </label>
            </div>

            <label className="mt-4 block text-sm">
              <div className="mb-1 font-medium">Content JSON (array)</div>
              <textarea className="h-44 w-full rounded border p-2 font-mono text-xs" value={form.contentJson} onChange={(e) => updateField("contentJson", e.target.value)} />
            </label>

            <label className="mt-4 block text-sm">
              <div className="mb-1 font-medium">FAQs JSON (array)</div>
              <textarea className="h-36 w-full rounded border p-2 font-mono text-xs" value={form.faqsJson} onChange={(e) => updateField("faqsJson", e.target.value)} />
            </label>

            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded bg-green-600 px-4 py-2 text-white disabled:opacity-60" onClick={handleCreate} disabled={busy}>
                Create Blog
              </button>
              <button className="rounded bg-[#18487d] px-4 py-2 text-white disabled:opacity-60" onClick={handleUpdate} disabled={busy}>
                Update Blog
              </button>
              <button className="rounded bg-red-600 px-4 py-2 text-white disabled:opacity-60" onClick={handleDelete} disabled={busy}>
                Delete Blog
              </button>
            </div>

            {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
          </main>
        </div>
      </div>
    </div>
  );
}
