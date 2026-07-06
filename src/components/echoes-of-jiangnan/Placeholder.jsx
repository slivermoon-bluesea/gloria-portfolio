function Placeholder({ ratio = '16/9', label, className = '' }) {
  const displayLabel = label || ratio

  return (
    <div
      className={`w-full rounded-card bg-bg-card-darker border border-dashed border-border-heavy flex items-center justify-center ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="font-body text-caption uppercase tracking-[var(--letter-spacing-wide)] text-text-tertiary">
        {displayLabel}
      </span>
    </div>
  )
}

export default Placeholder
