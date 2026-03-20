export default function CompoundsLoading() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 h-10 w-64 animate-pulse rounded bg-[#dceaf6]" />
        <div className="mb-10 h-12 w-full max-w-2xl animate-pulse rounded-xl bg-[#e5f1fb]" />

        <div className="mb-6 flex gap-2">
          <div className="h-9 w-20 animate-pulse rounded-full bg-[#e5f1fb]" />
          <div className="h-9 w-24 animate-pulse rounded-full bg-[#e5f1fb]" />
          <div className="h-9 w-28 animate-pulse rounded-full bg-[#e5f1fb]" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="rounded-2xl border border-[#dbe8f3] bg-white p-5">
              <div className="mb-4 h-5 w-24 animate-pulse rounded bg-[#e5f1fb]" />
              <div className="h-44 w-full animate-pulse rounded-xl bg-[#eef6fd]" />
              <div className="mt-4 h-6 w-40 animate-pulse rounded bg-[#e5f1fb]" />
              <div className="mt-2 h-4 w-full animate-pulse rounded bg-[#edf5fc]" />
              <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-[#edf5fc]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

