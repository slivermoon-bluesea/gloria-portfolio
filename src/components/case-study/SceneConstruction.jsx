function SceneConstruction() {
  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* 三段拼接容器 */}
        <div className="relative w-full aspect-[21/9] bg-bg-card rounded-[var(--radius-card)] overflow-hidden">

          {/* 左段 */}
          <div className="absolute inset-0 w-1/3" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
            <img
              src="/images/cl-interior/scene-construction-left.png"
              alt="Scene construction - left view"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                const placeholder = document.createElement('div')
                placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                placeholder.textContent = 'Left View'
                e.target.parentNode.appendChild(placeholder)
              }}
            />
            {/* 左侧标签 */}
            <div className="absolute top-[var(--item-gap)] left-[var(--item-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-text-primary">
              TODO: 标签
            </div>
          </div>

          {/* 中段 */}
          <div className="absolute inset-0 left-1/3 w-1/3" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}>
            <img
              src="/images/cl-interior/scene-construction-center.png"
              alt="Scene construction - center view"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                const placeholder = document.createElement('div')
                placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                placeholder.textContent = 'Center View'
                e.target.parentNode.appendChild(placeholder)
              }}
            />
            {/* 中间标签 */}
            <div className="absolute top-[var(--item-gap)] left-1/2 -translate-x-1/2 px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-text-primary">
              TODO: 标签
            </div>
          </div>

          {/* 右段 */}
          <div className="absolute inset-0 left-2/3 w-1/3" style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0 100%)' }}>
            <img
              src="/images/cl-interior/scene-construction-right.png"
              alt="Scene construction - right view"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                const placeholder = document.createElement('div')
                placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                placeholder.textContent = 'Right View'
                e.target.parentNode.appendChild(placeholder)
              }}
            />
            {/* 右侧标签 */}
            <div className="absolute top-[var(--item-gap)] right-[var(--item-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
              TODO: 标签
            </div>
          </div>
        </div>

        {/* 底部说明文字 */}
        <p className="mt-[var(--content-gap)] font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
          TODO: 等待设计截图确认说明文案
        </p>
      </div>
    </section>
  )
}

export default SceneConstruction
