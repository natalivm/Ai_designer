import Button from './Button'
import { SITE } from '../utils/constants'

const NAV = [
  { href: '#program', label: 'Програма' },
  { href: '#skills', label: 'Що вивчите' },
  { href: '#audience', label: 'Для кого' },
  { href: '#faq', label: 'FAQ' },
]

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 ring-1 ring-violet-500/30">
            <svg className="h-5 w-5 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </span>
          <span className="text-sm font-bold tracking-tight text-slate-100 sm:text-base">
            AI for Product Designers
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-slate-100">
              {item.label}
            </a>
          ))}
        </nav>

        <Button as="a" href={SITE.enrollUrl} size="md" className="hidden sm:inline-flex">
          Записатися
        </Button>
      </div>
    </header>
  )
}

export default Header
