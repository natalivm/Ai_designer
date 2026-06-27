import SectionHeading from './SectionHeading'
import { FAQ } from '../../data/course'

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow="FAQ" title="Часті запитання" />
      <div className="mt-12 space-y-3">
        {FAQ.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-slate-800/70 bg-slate-900/40 px-5 py-4 transition open:border-slate-700"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-slate-100">
              {item.q}
              <svg className="h-5 w-5 shrink-0 text-slate-500 transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default Faq
