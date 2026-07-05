import SectionHeader from './SectionHeader'

function HeroPropBreakdown() {
  const detailViews = [
    { id: 'wireframe', label: 'WIREFRAME', image: '/images/cl-interior/hero-prop-wireframe.png' },
    { id: 'basecolor', label: 'BASE COLOR', image: '/images/cl-interior/hero-prop-basecolor.png' },
    { id: 'detail', label: 'DETAIL', image: '/images/cl-interior/hero-prop-detail.png' }
  ]

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Section Header */}
        <div className="mb-[var(--section-gap)]">
          <SectionHeader
            number="06"
            eyebrow="TECHNICAL BREAKDOWN"
            title="Hero Prop Breakdown"
          />
        </div>

        {/* 主图 */}
        <div className="mb-[var(--card-gap)]">
          <div className="relative aspect-[21/9] rounded-[var(--radius-card)] overflow-hidden bg-bg-card">
            <img
              src="/images/cl-interior/hero-prop-main.png"
              alt="Scholar table hero prop"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                const placeholder = document.createElement('div')
                placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                placeholder.textContent = 'Scholar Table'
                e.target.parentNode.appendChild(placeholder)
              }}
            />
          </div>
        </div>

        {/* 三张小图横排 */}
        <div className="grid grid-cols-3 gap-[var(--card-gap)]">
          {detailViews.map((view) => (
            <div key={view.id} className="relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden bg-bg-card">
              <img
                src={view.image}
                alt={view.label}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  const placeholder = document.createElement('div')
                  placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                  placeholder.textContent = view.label
                  e.target.parentNode.appendChild(placeholder)
                }}
              />
              {/* 底部标签 */}
              <div className="absolute bottom-[var(--item-gap)] left-[var(--item-gap)] flex flex-col gap-[4px]">
                <span className="font-body font-normal text-caption uppercase tracking-[var(--letter-spacing-wide)] text-text-tertiary">
                  SCHOLAR TABLE
                </span>
                <span className="font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
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

export default HeroPropBreakdown
