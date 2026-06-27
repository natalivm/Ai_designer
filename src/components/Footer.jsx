import { SITE } from '../utils/constants'
import { useLang } from '../i18n/useLang'

function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-slate-500 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/15 ring-1 ring-violet-500/30">
            <svg className="h-4 w-4 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 3l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </span>
          <span className="font-semibold text-slate-300">{SITE.name}</span>
        </div>
        <p>{t.footer_tagline}</p>
      </div>
    </footer>
  )
}

export default Footer
