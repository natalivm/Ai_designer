import { useLang } from '../i18n/useLang'
import { LANGS } from '../i18n/strings'

// Display label + flag per language code (internal code stays ISO 'uk').
const META = {
  uk: { label: 'UA', flag: '🇺🇦' },
  en: { label: 'EN', flag: '🇬🇧' },
}

function LanguageSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="inline-flex rounded-full border border-slate-700/70 bg-slate-900/50 p-0.5" role="group" aria-label={t.lang_label}>
      {LANGS.map((l) => {
        const active = l === lang
        const meta = META[l] || { label: l.toUpperCase(), flag: '' }
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition ${
              active ? 'bg-violet-500 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span aria-hidden className="text-sm leading-none">{meta.flag}</span>
            {meta.label}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitch
