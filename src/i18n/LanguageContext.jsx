import { useEffect, useState } from 'react'
import { UI, LANGS, DEFAULT_LANG } from './strings'
import { LanguageContext } from './useLang'

const STORAGE_KEY = 'aifpd-lang'

function detectInitial() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LANGS.includes(saved)) return saved
  } catch { /* ignore */ }
  return DEFAULT_LANG
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitial)

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem(STORAGE_KEY, lang) } catch { /* ignore */ }
  }, [lang])

  const t = UI[lang] || UI[DEFAULT_LANG]
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
