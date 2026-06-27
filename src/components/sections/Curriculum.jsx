import { useEffect, useMemo, useRef } from 'react'
import SectionHeading from './SectionHeading'
import { BLOCKS } from '../../data/course'
import { useActiveSection } from '../../hooks/useActiveSection'

const HEADER_OFFSET = 112

function pad(n) {
  return String(n).padStart(2, '0')
}

/** Sticky vertical stepper — desktop. */
function BlockNav({ activeId, activeIndex }) {
  return (
    <nav aria-label="Блоки курсу" className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto scrollbar-hide lg:block">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-violet-300">Програма</p>
      <p className="mb-4 text-sm text-slate-500">
        Блок <span className="font-semibold text-slate-300">{pad(activeIndex + 1)}</span> з {pad(BLOCKS.length)}
      </p>
      <ol className="relative space-y-0.5 border-l border-slate-800">
        {BLOCKS.map((b, i) => {
          const active = b.id === activeId
          return (
            <li key={b.id} className="relative">
              <a
                href={`#${b.id}`}
                aria-current={active ? 'true' : undefined}
                className={`group flex items-start gap-3 rounded-r-lg py-2 pl-4 pr-3 text-sm transition ${
                  active ? 'bg-violet-500/10 text-white' : 'text-slate-400 hover:bg-slate-900/60 hover:text-slate-200'
                }`}
              >
                <span
                  className={`absolute -left-px top-2 h-[calc(100%-0.5rem)] w-0.5 rounded-full transition ${
                    active ? 'bg-violet-400' : 'bg-transparent'
                  }`}
                />
                <span className={`font-mono text-xs leading-5 ${active ? 'text-violet-300' : 'text-slate-600'}`}>
                  {pad(i + 1)}
                </span>
                <span className="leading-5">{b.title}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/** Horizontal numbered chip strip — mobile. */
function BlockNavMobile({ activeId }) {
  const scrollerRef = useRef(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const chip = scroller.querySelector(`[data-chip="${activeId}"]`)
    if (chip) {
      const left = chip.offsetLeft - scroller.clientWidth / 2 + chip.clientWidth / 2
      scroller.scrollTo({ left, behavior: 'smooth' })
    }
  }, [activeId])

  return (
    <div className="sticky top-[57px] z-20 -mx-4 border-b border-slate-800/60 bg-slate-950/85 px-4 py-2.5 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:hidden">
      <div ref={scrollerRef} className="flex gap-2 overflow-x-auto scrollbar-hide">
        {BLOCKS.map((b, i) => {
          const active = b.id === activeId
          return (
            <a
              key={b.id}
              data-chip={b.id}
              href={`#${b.id}`}
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs transition ${
                active
                  ? 'bg-violet-500 text-white'
                  : 'bg-slate-900/70 text-slate-500 hover:text-slate-300'
              }`}
            >
              {pad(i + 1)}
            </a>
          )
        })}
      </div>
    </div>
  )
}

function BlockPanel({ block, index }) {
  const prev = index > 0 ? BLOCKS[index - 1] : null
  const next = index < BLOCKS.length - 1 ? BLOCKS[index + 1] : null

  return (
    <article id={block.id} className="scroll-mt-28 border-t border-slate-800/60 py-10 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-3xl font-bold text-violet-400/80">{pad(index + 1)}</span>
        <h3 className="text-xl font-semibold text-white sm:text-2xl">{block.title}</h3>
      </div>

      {block.topics.length > 0 ? (
        <ul className="mt-6 space-y-3">
          {block.topics.map((t) => (
            <li key={t} className="flex items-start gap-3 text-slate-300">
              <svg className="mt-1 h-4 w-4 shrink-0 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="leading-relaxed">{t}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-2 text-sm text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Зміст блоку уточнюється — деталі додамо незабаром
        </p>
      )}

      <div className="mt-7 flex items-center justify-between gap-3 text-sm">
        {prev ? (
          <a href={`#${prev.id}`} className="group inline-flex max-w-[45%] items-center gap-2 text-slate-400 transition hover:text-slate-100">
            <span aria-hidden>←</span>
            <span className="truncate">{prev.title}</span>
          </a>
        ) : <span />}
        {next ? (
          <a href={`#${next.id}`} className="group inline-flex max-w-[45%] items-center gap-2 text-right text-slate-400 transition hover:text-slate-100">
            <span className="truncate">{next.title}</span>
            <span aria-hidden>→</span>
          </a>
        ) : <span />}
      </div>
    </article>
  )
}

function Curriculum() {
  const ids = useMemo(() => BLOCKS.map((b) => b.id), [])
  const activeId = useActiveSection(ids, HEADER_OFFSET)
  const activeIndex = Math.max(0, BLOCKS.findIndex((b) => b.id === activeId))

  return (
    <section id="program" className="scroll-mt-20 border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="14 блоків"
          title="Програма курсу"
          subtitle="Наскрізний шлях від вступу до AI до готового кейсу. Орієнтуйтесь у блоках через навігацію — вона підсвічує, де ви зараз."
        />

        <BlockNavMobile activeId={activeId} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
          <BlockNav activeId={activeId} activeIndex={activeIndex} />
          <div>
            {BLOCKS.map((b, i) => (
              <BlockPanel key={b.id} block={b} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Curriculum
