function Hero() {
  return (
    <section className="relative w-full bg-bg-card-darker overflow-hidden" style={{ height: 'var(--hero-height)' }}>
      {/* Hero Image - Full bleed */}
      <div className="absolute inset-0">
        <img
          src="/images/cl-interior/hero.webp"
          alt="Echoes of Jiangnan - Abandoned tea room interior"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://placehold.co/1440x617/1a1a1a/666?text=Hero+Image'
          }}
        />
      </div>

      {/* Gradient Overlay - Full bleed */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '280px',
          background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.92) 100%)'
        }}
      />

      {/* Text Container - Centered with max-width */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)] pb-[72px]">
          {/* Hero Text */}
          <div className="flex flex-col gap-[var(--text-gap)]">
            {/* Kicker */}
            <p className="font-body font-semibold uppercase text-body tracking-[var(--letter-spacing-wide)] text-accent-gold">
              — UNREAL ENGINE 5 · 2026
            </p>

            {/* Title */}
            <h1 className="font-heading font-bold text-hero leading-[var(--line-height-tight)] text-text-primary">
              Echoes of <span className="italic text-accent-gold">Jiangnan</span>
            </h1>

            {/* Subtitle - No wrapping */}
            <p className="font-body font-normal text-subtitle text-text-secondary whitespace-nowrap">
              Abandoned Jiangnan Interior · Environment Storytelling & Decay
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
