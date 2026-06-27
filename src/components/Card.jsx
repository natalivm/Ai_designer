import { ACCENT_STYLES } from '../utils/constants'

function Card({ title, subtitle, children, accent = 'slate', className = '' }) {
  return (
    <div
      className={`rounded-2xl border bg-slate-900/60 p-5 transition sm:p-6 ${ACCENT_STYLES[accent] || ACCENT_STYLES.slate} ${className}`}
    >
      {title && (
        <div className="mb-3">
          <h3 className="text-base font-semibold text-slate-100">{title}</h3>
          {subtitle && (
            <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </div>
  )
}

export default Card
