function SectionHeader({ number, eyebrow, title }) {
  return (
    <div className="flex flex-col gap-[var(--content-gap)]">
      {/* Eyebrow with number and line */}
      <div className="flex items-center gap-[var(--item-gap)]">
        <span className="font-medium font-body text-body tracking-[var(--letter-spacing-wide)] text-accent-gold">
          {number}
        </span>
        <div className="w-[72px] h-[1px] bg-border-heavy" />
        <span className="font-medium uppercase font-body text-caption tracking-[var(--letter-spacing-wide)] text-text-tertiary">
          {eyebrow}
        </span>
      </div>

      {/* Main title */}
      <h2 className="font-bold font-heading text-section leading-[var(--line-height-tight)] text-text-primary">
        {title}
      </h2>
    </div>
  )
}

export default SectionHeader
