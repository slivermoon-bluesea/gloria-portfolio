import SectionHeader from './SectionHeader'

function SceneConstruction() {
  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Section Header */}
        <div className="mb-[var(--section-gap)]">
          <SectionHeader
            number="05"
            eyebrow="TECHNICAL BREAKDOWN"
            title="Scene Construction & Performance"
          />
        </div>

        {/* 三段斜切拼接容器 */}
        <div className="relative w-full aspect-[21/9] bg-bg-card rounded-[var(--radius-card)] overflow-hidden mb-[var(--content-gap)]">

          {/* FINAL 段 - 左侧 */}
          <div className="absolute inset-0 w-1/3" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
            <img
              src="/images/cl-interior/scene-construction-final.png"
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
            <div className="absolute top-[var(--item-gap)] left-[var(--item-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
              FINAL
            </div>
          </div>

          {/* SET DRESS 段 - 中间 */}
          <div className="absolute inset-0 left-1/3 w-1/3" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}>
            <img
              src="/images/cl-interior/scene-construction-setdress.png"
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
            <div className="absolute top-[var(--item-gap)] left-1/2 -translate-x-1/2 px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-text-primary">
              SET DRESS
            </div>
          </div>

          {/* WIREFRAME 段 - 右侧 */}
          <div className="absolute inset-0 left-2/3 w-1/3" style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0 100%)' }}>
            <img
              src="/images/cl-interior/scene-construction-wireframe.png"
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
            <div className="absolute top-[var(--item-gap)] right-[var(--item-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-text-primary">
              WIREFRAME
            </div>
          </div>
        </div>

        {/* 底部两行说明文字 */}
        <div className="flex flex-col gap-[4px]">
          <p className="font-body text-body text-text-primary leading-[var(--line-height-normal)]">
            Same camera, three states — Nanite wireframe, dressed set, final Lumen lighting.
          </p>
          <p className="font-body text-body text-text-tertiary leading-[var(--line-height-normal)]">
            Detail budgeted where the light falls — Nanite and instancing hold the 2.5M-tri interior at real-time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SceneConstruction
