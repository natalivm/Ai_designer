import { FEATURES } from '../../data/course'

const ICONS = {
  live: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  mentor: 'M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-6.16-3.422M18 12.5V16a2 2 0 01-1 1.732C15.7 18.5 13.93 19 12 19s-3.7-.5-5-1.268A2 2 0 016 16v-3.5',
  flow: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  portfolio: 'M20 7H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2',
}

function Features() {
  return (
    <section className="border-t border-slate-800/60 bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 ring-1 ring-violet-500/30">
                <svg className="h-5 w-5 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[f.icon] || ICONS.flow} />
                </svg>
              </span>
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
