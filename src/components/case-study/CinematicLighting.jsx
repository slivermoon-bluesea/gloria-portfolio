function CinematicLighting() {
  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* 左右两列布局 */}
        <div className="flex gap-[var(--card-gap)]">

          {/* 左侧 - 大图 */}
          <div className="flex-1">
            <div className="relative aspect-[16/9] rounded-[var(--radius-card)] overflow-hidden">
              <img
                src="/images/cl-interior/cinematic-lighting-main.png"
                alt="Cinematic lighting showcase"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  const placeholder = document.createElement('div')
                  placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                  placeholder.textContent = 'Cinematic Lighting'
                  e.target.parentNode.appendChild(placeholder)
                }}
              />
            </div>
          </div>

          {/* 右侧 - Lighting & Mood 卡片 */}
          <div className="w-[416px] bg-bg-card rounded-[var(--radius-card)] border border-border p-[var(--card-gap)] flex flex-col gap-[var(--content-gap)]">

            {/* 标题区域 */}
            <div className="flex items-center gap-[var(--text-gap)]">
              <div className="w-[6px] h-[6px] rounded-full bg-accent-gold" />
              <h3 className="font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
                Lighting & Mood
              </h3>
            </div>

            <h4 className="font-heading font-bold text-card text-text-primary">
              TODO: 等待设计截图确认标题
            </h4>

            <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
              TODO: 等待设计截图确认说明文案
            </p>

            {/* 标签列表 */}
            <div className="flex flex-wrap gap-[var(--tight-gap)]">
              <span className="px-[12px] py-[6px] bg-bg-card-darker rounded-[var(--radius-mini)] border border-border font-body text-caption text-text-tertiary">
                TODO: 标签1
              </span>
              <span className="px-[12px] py-[6px] bg-bg-card-darker rounded-[var(--radius-mini)] border border-border font-body text-caption text-text-tertiary">
                TODO: 标签2
              </span>
              <span className="px-[12px] py-[6px] bg-bg-card-darker rounded-[var(--radius-mini)] border border-border font-body text-caption text-text-tertiary">
                TODO: 标签3
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CinematicLighting
