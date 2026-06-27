import { useEffect } from 'react'
import { BLOCKS } from '../data/course'
import { CHAPTER_CONTENT } from '../data/chapterContent'
import { SITE } from '../utils/constants'

function pad(n) {
  return String(n).padStart(2, '0')
}

function ChapterSidebar({ activeId }) {
  return (
    <nav aria-label="Розділи курсу" className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto scrollbar-hide lg:block">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-violet-300">Розділи курсу</p>
      <ol className="space-y-0.5">
        {BLOCKS.map((b, i) => {
          const active = b.id === activeId
          return (
            <li key={b.id}>
              <a
                href={`#/chapter/${b.id}`}
                aria-current={active ? 'true' : undefined}
                className={`flex items-start gap-3 rounded-lg px-3 py-2 text-sm transition ${
                  active ? 'bg-violet-500/10 text-white' : 'text-slate-400 hover:bg-slate-900/60 hover:text-slate-200'
                }`}
              >
                <span className={`font-mono text-xs leading-5 ${active ? 'text-violet-300' : 'text-slate-600'}`}>{pad(i + 1)}</span>
                <span className="leading-5">{b.title}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

function Lesson({ lesson }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-white sm:text-2xl">{lesson.title}</h2>

      {lesson.paragraphs?.map((p, i) => (
        <p key={i} className="mt-4 leading-relaxed text-slate-300">{p}</p>
      ))}

      {/* Tool definitions — "what is this tool and why" */}
      {lesson.tools?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-300">Інструменти</h3>
          <dl className="mt-3 space-y-2.5">
            {lesson.tools.map((t, i) => (
              <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <dt className="font-semibold text-white">{t.name}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-400">{t.what}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Step-by-step how-to */}
      {lesson.steps?.length > 0 && (
        <ol className="mt-6 space-y-3">
          {lesson.steps.map((s, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 font-mono text-xs font-semibold text-violet-300">{i + 1}</span>
              <span className="leading-relaxed text-slate-300">{s}</span>
            </li>
          ))}
        </ol>
      )}

      {/* Worked example on a real product */}
      {lesson.example && (
        <div className="mt-6 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-5">
          <h3 className="text-sm font-semibold text-emerald-300">{lesson.example.title || 'Приклад'}</h3>
          {lesson.example.paragraphs?.map((p, i) => (
            <p key={i} className="mt-2 text-sm leading-relaxed text-slate-300">{p}</p>
          ))}
        </div>
      )}

      {lesson.bullets?.length > 0 && (
        <ul className="mt-5 space-y-2.5">
          {lesson.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {lesson.tip && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-violet-500/25 bg-violet-500/10 px-4 py-3">
          <span className="mt-0.5 text-violet-300">💡</span>
          <p className="text-sm leading-relaxed text-violet-100">{lesson.tip}</p>
        </div>
      )}
    </section>
  )
}

function ChapterReader({ id }) {
  const index = BLOCKS.findIndex((b) => b.id === id)
  const block = index >= 0 ? BLOCKS[index] : null
  const content = block ? CHAPTER_CONTENT[block.id] : null
  const prev = index > 0 ? BLOCKS[index - 1] : null
  const next = index >= 0 && index < BLOCKS.length - 1 ? BLOCKS[index + 1] : null

  // Jump back to the top whenever the chapter changes.
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  if (!block) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="text-slate-400">Розділ не знайдено.</p>
        <a href="#top" className="mt-4 inline-block text-violet-300 hover:text-violet-200">← До всіх розділів</a>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen min-h-dvh flex-col bg-slate-950 text-slate-100">
      {/* Reader top bar */}
      <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5 text-sm text-slate-400 transition hover:text-slate-100">
            <span aria-hidden>←</span> Усі розділи
          </a>
          <span className="hidden text-sm font-semibold text-slate-300 sm:block">{SITE.name}</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <ChapterSidebar activeId={block.id} />

          <article className="min-w-0 max-w-2xl">
            {/* Mobile chapter switcher */}
            <label className="mb-8 block lg:hidden">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-violet-300">Розділ</span>
              <select
                value={block.id}
                onChange={(e) => { window.location.hash = `#/chapter/${e.target.value}` }}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-200"
              >
                {BLOCKS.map((b, i) => (
                  <option key={b.id} value={b.id}>{pad(i + 1)} · {b.title}</option>
                ))}
              </select>
            </label>

            <p className="font-mono text-sm text-violet-400">Розділ {pad(index + 1)} / {pad(BLOCKS.length)}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{block.title}</h1>
            {content?.readingTime && (
              <p className="mt-3 text-sm text-slate-500">⏱ {content.readingTime} хв читання</p>
            )}
            {content?.intro && (
              <p className="mt-6 text-lg leading-relaxed text-slate-300">{content.intro}</p>
            )}

            {content?.lessons?.length ? (
              content.lessons.map((lesson, i) => <Lesson key={i} lesson={lesson} />)
            ) : (
              // Fallback: no full content yet — show the topic outline.
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-white">У цьому розділі</h2>
                <ul className="mt-4 space-y-3">
                  {block.topics.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-slate-500">Повний матеріал розділу готується.</p>
              </div>
            )}

            {content?.practice && (
              <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Практика</h2>
                <p className="mt-3 leading-relaxed text-slate-300">{content.practice}</p>
              </div>
            )}

            {/* Prev / Next chapter navigation */}
            <nav className="mt-14 grid gap-3 border-t border-slate-800/60 pt-8 sm:grid-cols-2">
              {prev ? (
                <a href={`#/chapter/${prev.id}`} className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-slate-600">
                  <span className="text-xs text-slate-500">← Попередній розділ</span>
                  <span className="mt-1 block font-medium text-slate-200 group-hover:text-white">{prev.title}</span>
                </a>
              ) : <span className="hidden sm:block" />}
              {next ? (
                <a href={`#/chapter/${next.id}`} className="group rounded-xl border border-violet-500/30 bg-violet-500/10 p-4 text-right transition hover:border-violet-400/60">
                  <span className="text-xs text-violet-300">Наступний розділ →</span>
                  <span className="mt-1 block font-medium text-white">{next.title}</span>
                </a>
              ) : (
                <a href="#top" className="group rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-right transition hover:border-slate-600">
                  <span className="text-xs text-slate-500">🎉 Курс завершено</span>
                  <span className="mt-1 block font-medium text-slate-200 group-hover:text-white">До всіх розділів</span>
                </a>
              )}
            </nav>
          </article>
        </div>
      </main>
    </div>
  )
}

export default ChapterReader
