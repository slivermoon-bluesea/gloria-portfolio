import Figure from './Figure'

function References() {
  const referenceCards = [
    {
      id: 'wireframe',
      label: 'WIREFRAME',
      image: '/images/cl-interior/m7-wireframe.png',
      caption: 'TODO: 等待设计截图确认文案'
    },
    {
      id: 'basecolor',
      label: 'BASE COLOR',
      image: '/images/cl-interior/m7-basecolor.png',
      caption: 'TODO: 等待设计截图确认文案'
    },
    {
      id: 'detail',
      label: 'DETAIL',
      image: '/images/cl-interior/m7-detail.png',
      caption: 'TODO: 等待设计截图确认文案'
    }
  ]

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* 大图 */}
        <div className="mb-[var(--card-gap)]">
          <Figure
            src="/images/cl-interior/m7-hero.png"
            aspectRatio="21/9"
            mainCaption="Reference mood board"
            subCaption="TODO: 等待设计截图确认文案"
          />
        </div>

        {/* 三卡横排 */}
        <div className="grid grid-cols-3 gap-[var(--card-gap)]">
          {referenceCards.map((card) => (
            <div key={card.id} className="bg-bg-card rounded-[var(--radius-card)] border border-border overflow-hidden">
              {/* 图片 */}
              <div className="relative aspect-[4/3]">
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const placeholder = document.createElement('div')
                    placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                    placeholder.textContent = card.label
                    e.target.parentNode.appendChild(placeholder)
                  }}
                />
                {/* 标签 */}
                <div className="absolute top-[var(--text-gap)] left-[var(--text-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
                  {card.label}
                </div>
              </div>

              {/* 说明文字 */}
              <div className="p-[var(--item-gap)]">
                <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                  {card.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default References
