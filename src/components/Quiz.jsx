import { useState } from 'react'
import { useLang } from '../i18n/useLang'

function Quiz({ quiz }) {
  const { t } = useLang()
  const [answers, setAnswers] = useState({}) // questionIndex -> chosen option index

  const answeredCount = Object.keys(answers).length
  const total = quiz.length
  const allAnswered = answeredCount === total
  const correct = quiz.reduce((n, q, i) => n + (answers[i] === q.answer ? 1 : 0), 0)
  const pct = total ? Math.round((correct / total) * 100) : 0

  const choose = (qi, oi) => {
    if (answers[qi] !== undefined) return // lock once answered
    setAnswers((prev) => ({ ...prev, [qi]: oi }))
  }
  const reset = () => setAnswers({})

  const rateColor = pct >= 80 ? 'text-emerald-300' : pct >= 50 ? 'text-amber-300' : 'text-rose-300'

  return (
    <section className="mt-14 border-t border-slate-800/60 pt-10">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">{t.quiz_title}</h2>
        <span className="text-sm text-slate-500">{t.quiz_progress} {answeredCount}/{total}</span>
      </div>
      <p className="mt-2 text-sm text-slate-400">{t.quiz_subtitle}</p>

      <ol className="mt-8 space-y-8">
        {quiz.map((q, qi) => {
          const chosen = answers[qi]
          const answered = chosen !== undefined
          return (
            <li key={qi}>
              <p className="font-medium text-slate-100">
                <span className="mr-2 font-mono text-violet-400">{qi + 1}.</span>{q.q}
              </p>
              <div className="mt-3 space-y-2">
                {q.options.map((opt, oi) => {
                  const isCorrect = oi === q.answer
                  const isChosen = oi === chosen
                  let cls = 'border-slate-800 bg-slate-900/40 text-slate-300 hover:border-slate-600'
                  if (answered) {
                    if (isCorrect) cls = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-100'
                    else if (isChosen) cls = 'border-rose-500/50 bg-rose-500/10 text-rose-100'
                    else cls = 'border-slate-800 bg-slate-900/30 text-slate-500'
                  }
                  return (
                    <button
                      key={oi}
                      type="button"
                      onClick={() => choose(qi, oi)}
                      disabled={answered}
                      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${cls} ${answered ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[11px] font-semibold">
                        {answered && isCorrect ? '✓' : answered && isChosen ? '✕' : String.fromCharCode(65 + oi)}
                      </span>
                      <span>{opt}</span>
                    </button>
                  )
                })}
              </div>

              {answered && (
                <div className="mt-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${chosen === q.answer ? 'text-emerald-300' : 'text-rose-300'}`}>
                    {chosen === q.answer ? t.quiz_correct : t.quiz_incorrect} · {t.quiz_fact_label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{q.fact}</p>
                </div>
              )}
            </li>
          )
        })}
      </ol>

      {allAnswered && (
        <div className="mt-8 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-600/15 to-sky-600/10 p-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-300">{t.quiz_result_label}</p>
          <p className={`mt-2 text-4xl font-bold ${rateColor}`}>{pct}%</p>
          <p className="mt-1 text-sm text-slate-400">{t.quiz_success_rate} · {correct} {t.quiz_correct_of} {total}</p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
          >
            {t.quiz_restart}
          </button>
        </div>
      )}
    </section>
  )
}

export default Quiz
