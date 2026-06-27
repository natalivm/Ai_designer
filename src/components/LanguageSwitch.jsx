import { useLang } from '../i18n/useLang'
import { LANGS } from '../i18n/strings'

function LanguageSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="inline-flex rounded-full border border-slate-700/70 bg-slate-900/50 p-0.5" role="group" aria-label={t.lang_label}>
      {LANGS.map((l) => {
        const active = l === lang
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition ${
              active ? 'bg-violet-500 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {l}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitch
