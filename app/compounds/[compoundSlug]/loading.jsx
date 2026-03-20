export default function CompoundDetailsLoading() {
  return (
      <div className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="mb-3 h-6 w-36 animate-pulse rounded bg-[#e5f1fb]" />
            <div className="mb-4 h-12 w-64 animate-pulse rounded bg-[#dceaf6]" />
            <div className="h-4 w-full animate-pulse rounded bg-[#edf5fc]" />
            <div className="mt-2 h-4 w-4/5 animate-pulse rounded bg-[#edf5fc]" />
            <div className="mt-6 flex gap-3">
              <div className="h-9 w-32 animate-pulse rounded bg-[#dceaf6]" />
              <div className="h-9 w-28 animate-pulse rounded bg-[#e5f1fb]" />
            </div>
          </div>

          <div className="rounded-2xl border border-[#d5e5f2] bg-white p-4">
            <div className="h-[340px] w-full animate-pulse rounded-xl bg-[#eef6fd]" />
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-20 animate-pulse rounded bg-[#eef6fd]" />
              <div className="h-20 animate-pulse rounded bg-[#eef6fd]" />
              <div className="h-20 animate-pulse rounded bg-[#eef6fd]" />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="rounded-2xl border border-[#d5e5f2] bg-white p-6">
              <div className="mb-4 h-6 w-40 animate-pulse rounded bg-[#dceaf6]" />
              <div className="h-4 w-full animate-pulse rounded bg-[#edf5fc]" />
              <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-[#edf5fc]" />
              <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-[#edf5fc]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

