export default function CompoundDetailsLoading() {
  return (
    <div className="min-h-screen bg-[#f3f8fc] pt-20">
      <section className="bg-gradient-to-r from-[#0c2b52] via-[#18487d] to-[#2f74ad] py-10 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-4 w-32 animate-pulse rounded bg-white/20" />
          <div className="mt-3 h-12 w-72 animate-pulse rounded bg-white/20" />
          <div className="mt-4 h-4 w-full max-w-3xl animate-pulse rounded bg-white/20" />
          <div className="mt-2 h-4 w-4/5 max-w-3xl animate-pulse rounded bg-white/15" />
          <div className="mt-5 flex gap-3">
            <div className="h-8 w-24 animate-pulse rounded-full bg-white/20" />
            <div className="h-8 w-24 animate-pulse rounded-full bg-white/15" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl border border-[#d5e5f2] bg-white p-4">
            <div className="h-[340px] w-full animate-pulse rounded-xl bg-[#eef6fd]" />
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-20 animate-pulse rounded bg-[#eef6fd]" />
              <div className="h-20 animate-pulse rounded bg-[#eef6fd]" />
              <div className="h-20 animate-pulse rounded bg-[#eef6fd]" />
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
