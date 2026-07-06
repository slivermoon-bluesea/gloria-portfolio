import Placeholder from '../echoes-of-jiangnan/Placeholder'

function Hero() {
  return (
    <section className="relative w-full bg-bg-card-darker overflow-hidden" style={{ height: 'var(--hero-height)' }}>
      {/* Hero Image Placeholder */}
      <div className="absolute inset-0">
        <Placeholder ratio="21/9" label="HERO IMAGE 1440×617" className="rounded-none h-full" />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '280px',
          background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.92) 100%)'
        }}
      />

      {/* Text Container */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)] pb-[72px]">
          <div className="flex flex-col gap-[var(--text-gap)]">
            {/* Kicker */}
            <p className="font-body font-semibold uppercase text-body tracking-[var(--letter-spacing-wide)] text-accent-gold">
              {/* TODO: Kicker text */}
              — UNREAL ENGINE 5 · 2026
            </p>

            {/* Title */}
            <h1 className="font-heading font-bold text-hero leading-[var(--line-height-tight)] text-text-primary">
              {/* TODO: Project title */}
              Signal <span className="italic text-accent-gold">Lost</span>
            </h1>

            {/* Subtitle */}
            <p className="font-body font-normal text-subtitle text-text-secondary whitespace-nowrap">
              {/* TODO: Subtitle */}
              Sci-Fi Environment · Narrative Design & Atmosphere
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
