function HeroPropBreakdown() {
  const detailViews = [
    {
      id: 'wireframe',
      label: 'WIREFRAME',
      image: '/images/cl-interior/hero-prop-wireframe.png'
    },
    {
      id: 'texture',
      label: 'TEXTURE',
      image: '/images/cl-interior/hero-prop-texture.png'
    },
    {
      id: 'material',
      label: 'MATERIAL',
      image: '/images/cl-interior/hero-prop-material.png'
    }
  ]

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* 主图 */}
        <div className="mb-[var(--card-gap)]">
          <div className="relative aspect-[21/9] rounded-[var(--radius-card)] overflow-hidden bg-bg-card">
            <img
              src="/images/cl-interior/hero-prop-main.png"
              alt="Hero prop main view"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                const placeholder = document.createElement('div')
                placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                placeholder.textContent = 'Hero Prop Main View'
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
              {/* 标签 */}
              <div className="absolute bottom-[var(--item-gap)] left-[var(--item-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
                {view.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroPropBreakdown
