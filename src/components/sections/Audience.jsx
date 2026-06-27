import SectionHeading from './SectionHeading'
import { AUDIENCE } from '../../data/course'

function Audience() {
  return (
    <section id="audience" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="Для кого" title="Кому підійде курс" />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {AUDIENCE.map((a) => (
          <div key={a.title} className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
            <h3 className="text-lg font-semibold text-white">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Audience
