import { motion } from 'framer-motion'

function Hero() {
  return (
    <motion.section
      layoutId="project-card-teyata"
      className="relative w-full bg-bg-card-darker overflow-hidden mb-[var(--container-padding-y)]"
      style={{ height: 'var(--hero-height)' }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Hero Image - Full bleed */}
      <div className="absolute inset-0">
        <motion.img
          layoutId="project-image-teyata"
          src="/images/teyata/00_village_cover.webp"
          alt="Teyata - Huron-Wendat village environment"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
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
              — UNREAL ENGINE 5 · M.DM THESIS · 2024-2025
            </p>

            {/* Title */}
            <h1 className="font-heading font-bold text-hero leading-[var(--line-height-tight)] text-text-primary">
              Teyata
            </h1>

            {/* Subtitle */}
            <p className="font-body font-normal text-subtitle text-text-secondary">
              Sole Environment Artist · Terrain, Waterways &amp; Vegetation for a Narrative RPG
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
