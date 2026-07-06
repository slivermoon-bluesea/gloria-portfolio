import SectionHeader from '../echoes-of-jiangnan/SectionHeader'
import Placeholder from '../echoes-of-jiangnan/Placeholder'

function PropDensity() {
  const detailViews = [
    { id: 'wireframe', label: 'WIREFRAME' },
    { id: 'basecolor', label: 'BASE COLOR' },
    { id: 'detail', label: 'DETAIL' }
  ]

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Section Header */}
        <div className="mb-[var(--section-gap)]">
          <SectionHeader
            number="04"
            eyebrow="TECHNICAL BREAKDOWN"
            title="Hero Prop Breakdown"
          />
        </div>

        {/* Top hero prop - 居中、纯黑底、圆角12px */}
        <div className="mb-[var(--card-gap)] flex justify-center bg-black rounded-[12px] overflow-hidden">
          <Placeholder ratio="16/9" label="HERO PROP" className="rounded-none max-w-full" />
        </div>

        {/* Three detail views - equal width cards */}
        <div className="grid grid-cols-3 gap-[var(--card-gap)]">
          {detailViews.map((view) => (
            <div key={view.id} className="rounded-[12px] overflow-hidden bg-bg-card">
              {/* Image area */}
              <div className="aspect-square">
                <Placeholder ratio="1/1" label={`PROP ${view.label}`} className="rounded-none" />
              </div>

              {/* Bottom label bar */}
              <div className="flex items-center justify-between px-5 py-4">
                {/* Left: Prop name */}
                <span className="font-body font-normal text-caption uppercase tracking-[var(--letter-spacing-wide)] text-[#7A776F]">
                  {/* TODO */}
                  HERO PROP
                </span>
                {/* Right: View state */}
                <span className="font-body font-normal text-caption uppercase tracking-[var(--letter-spacing-wide)]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {view.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PropDensity
