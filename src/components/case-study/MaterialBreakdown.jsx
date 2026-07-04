function MaterialBreakdown() {
  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* 三段斜切拼接容器 */}
        <div className="relative w-full aspect-[21/9] bg-bg-card rounded-[var(--radius-card)] overflow-hidden">

          {/* FINAL 段 - 左侧 */}
          <div className="absolute inset-0 w-1/3" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
            <img
              src="/images/cl-interior/m6-final.png"
              alt="Final render"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                const placeholder = document.createElement('div')
                placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                placeholder.textContent = 'Final'
                e.target.parentNode.appendChild(placeholder)
              }}
            />
            {/* FINAL 标签 */}
            <div className="absolute top-[var(--item-gap)] left-[var(--item-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
              FINAL
            </div>
          </div>

          {/* SET DRESS 段 - 中间 */}
          <div className="absolute inset-0 left-1/3 w-1/3" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}>
            <img
              src="/images/cl-interior/m6-setdress.png"
              alt="Set dress"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                const placeholder = document.createElement('div')
                placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                placeholder.textContent = 'Set Dress'
                e.target.parentNode.appendChild(placeholder)
              }}
            />
            {/* SET DRESS 标签 */}
            <div className="absolute top-[var(--item-gap)] left-1/2 -translate-x-1/2 px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-text-primary">
              SET DRESS
            </div>
          </div>

          {/* WIREFRAME 段 - 右侧 */}
          <div className="absolute inset-0 left-2/3 w-1/3" style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0 100%)' }}>
            <img
              src="/images/cl-interior/m6-wireframe.png"
              alt="Wireframe"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                const placeholder = document.createElement('div')
                placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                placeholder.textContent = 'Wireframe'
                e.target.parentNode.appendChild(placeholder)
              }}
            />
            {/* WIREFRAME 标签 */}
            <div className="absolute top-[var(--item-gap)] right-[var(--item-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-text-tertiary">
              WIREFRAME
            </div>
          </div>
        </div>

        {/* What & Why 两行说明 */}
        <div className="mt-[var(--content-gap)] grid grid-cols-2 gap-[var(--card-gap)]">
          <div className="bg-bg-card rounded-[var(--radius-card)] border border-border p-[var(--content-gap)]">
            <h4 className="font-heading font-bold text-subtitle text-accent-gold mb-[var(--text-gap)]">
              What
            </h4>
            <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
              TODO: 等待设计截图确认文案
            </p>
          </div>

          <div className="bg-bg-card rounded-[var(--radius-card)] border border-border p-[var(--content-gap)]">
            <h4 className="font-heading font-bold text-subtitle text-accent-gold mb-[var(--text-gap)]">
              Why
            </h4>
            <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
              TODO: 等待设计截图确认文案
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MaterialBreakdown
