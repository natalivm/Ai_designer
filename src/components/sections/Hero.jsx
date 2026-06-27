import Button from '../Button'
import { HERO, STATS } from '../../data/course'
import { SITE } from '../../utils/constants'

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="float-glow absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />
        <div className="float-glow absolute top-10 right-1/4 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 text-center sm:px-8 sm:pb-24 sm:pt-28">
        <span className="rise-in inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-200">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          {HERO.badge}
        </span>

        <h1 className="rise-in mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl" style={{ animationDelay: '0.05s' }}>
          <span className="bg-gradient-to-r from-violet-300 via-white to-sky-300 bg-clip-text text-transparent">
            {HERO.title}
          </span>
        </h1>

        <p className="rise-in mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg" style={{ animationDelay: '0.1s' }}>
          {HERO.subtitle}
        </p>

        <div className="rise-in mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: '0.15s' }}>
          <Button as="a" href={SITE.enrollUrl} size="lg">{HERO.primaryCta}</Button>
          <Button as="a" href="#program" variant="ghost" size="lg">{HERO.secondaryCta}</Button>
        </div>

        <dl className="rise-in mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4" style={{ animationDelay: '0.2s' }}>
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-800/70 bg-slate-900/40 px-3 py-5">
              <dt className="text-2xl font-bold text-white sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-xs text-slate-500 sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
