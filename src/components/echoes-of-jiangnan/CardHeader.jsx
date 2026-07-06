function CardHeader({ letter, label }) {
  return (
    <div className="flex items-center gap-[var(--item-gap)]">
      <span className="font-medium font-body text-body tracking-[var(--letter-spacing-wide)] text-accent-gold">
        {letter}
      </span>
      <div className="w-[40px] h-[1px] bg-border" />
      <span className="font-medium uppercase font-body text-body tracking-[var(--letter-spacing-wide)] text-text-tertiary">
        {label}
      </span>
    </div>
  )
}

export default CardHeader
