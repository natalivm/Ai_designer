import SectionHeading from './SectionHeading'
import { SKILLS } from '../../data/course'

const HEAD_ACCENT = {
  violet: 'text-violet-300',
  sky: 'text-sky-300',
  emerald: 'text-emerald-300',
  amber: 'text-amber-300',
}
const DOT_ACCENT = {
  violet: 'bg-violet-400',
  sky: 'bg-sky-400',
  emerald: 'bg-emerald-400',
  amber: 'bg-amber-400',
}

function SkillColumn({ track }) {
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
      <h3 className={`text-lg font-bold ${HEAD_ACCENT[track.accent] || HEAD_ACCENT.violet}`}>{track.title}</h3>
      <ul className="mt-5 space-y-3.5">
        {track.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${DOT_ACCENT[track.accent] || DOT_ACCENT.violet}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Що ви вивчите"
        title="Hard, soft і software skills"
        subtitle="Конкретні навички та інструменти, з якими ви вийдете з курсу — від AI-ресерчу до vibe-кодингу."
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        <SkillColumn track={SKILLS.hard} />
        <SkillColumn track={SKILLS.soft} />
        <SkillColumn track={SKILLS.software} />
      </div>
    </section>
  )
}

export default Skills
