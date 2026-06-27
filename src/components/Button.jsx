function Button({ as = 'button', children, variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold transition rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60'

  const variants = {
    primary: 'bg-violet-500 text-white hover:bg-violet-400 shadow-lg shadow-violet-500/25',
    ghost: 'border border-slate-700/70 bg-slate-900/40 text-slate-200 hover:border-slate-500 hover:text-white',
  }

  const sizes = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  const Tag = as
  return (
    <Tag
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Button
