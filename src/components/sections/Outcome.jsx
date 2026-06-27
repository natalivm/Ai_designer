import { OUTCOME } from '../../data/course'

function Outcome() {
  return (
    <section className="border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/25 bg-gradient-to-br from-violet-600/15 via-slate-900/40 to-sky-600/10 p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-300">Результат</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{OUTCOME.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">{OUTCOME.desc}</p>
            <ul className="mt-7 space-y-3">
              {OUTCOME.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-200">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Outcome
