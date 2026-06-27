import SectionHeading from './SectionHeading'
import Button from '../Button'
import { BLOCKS } from '../../data/course'

function pad(n) {
  return String(n).padStart(2, '0')
}

function Curriculum() {
  return (
    <section id="program" className="scroll-mt-20 border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="14 розділів"
          title="Програма курсу"
          subtitle="Наскрізний шлях від вступу до AI до готового кейсу. Відкрийте будь-який розділ, щоб почати читати — або проходьте їх по черзі."
        />

        <div className="mt-10 flex justify-center">
          <Button as="a" href={`#/chapter/${BLOCKS[0].id}`} size="lg">Почати курс →</Button>
        </div>

        <ol className="mt-12 space-y-3">
          {BLOCKS.map((b, i) => (
            <li key={b.id}>
              <a
                href={`#/chapter/${b.id}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-5 transition hover:border-violet-500/40 hover:bg-slate-900/70"
              >
                <span className="font-mono text-lg font-bold text-violet-400/80">{pad(i + 1)}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{b.title}</h3>
                  {b.topics.length > 0 && (
                    <p className="mt-1 truncate text-sm text-slate-500">{b.topics.join(' · ')}</p>
                  )}
                </div>
                <span className="shrink-0 text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-violet-300">→</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Curriculum
