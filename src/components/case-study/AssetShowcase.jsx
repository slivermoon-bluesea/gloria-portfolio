import { useState } from 'react'

function AssetShowcase() {
  const [activePass, setActivePass] = useState('final')
  const [sliderPosition, setSliderPosition] = useState(50)

  const passes = [
    { id: 'key', label: 'Key only' },
    { id: 'bounce', label: '+Bounce' },
    { id: 'volumetrics', label: '+Volumetrics' },
    { id: 'final', label: 'Final' }
  ]

  const getImagePaths = (pass) => ({
    before: `/images/cl-interior/m5-${pass}-before.png`,
    after: `/images/cl-interior/m5-${pass}-after.png`
  })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const currentImages = getImagePaths(activePass)

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Pass 标签切换 */}
        <div className="flex gap-[var(--text-gap)] mb-[var(--card-gap)]">
          {passes.map((pass) => (
            <button
              key={pass.id}
              onClick={() => setActivePass(pass.id)}
              className={`px-[var(--item-gap)] py-[var(--tight-gap)] rounded-[var(--radius-mini)] font-body font-medium text-body uppercase tracking-[var(--letter-spacing-normal)] transition-all ${
                activePass === pass.id
                  ? 'bg-accent-gold text-bg-primary'
                  : 'bg-bg-card text-text-tertiary border border-border hover:border-border-heavy'
              }`}
            >
              {pass.label}
            </button>
          ))}
        </div>

        {/* Before/After 拖拽滑块 */}
        <div
          className="relative w-full aspect-[21/9] bg-bg-card rounded-[var(--radius-card)] overflow-hidden cursor-ew-resize select-none"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* After 图片（底层） */}
          <img
            src={currentImages.after}
            alt={`${passes.find(p => p.id === activePass)?.label} - After`}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              const placeholder = document.createElement('div')
              placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
              placeholder.textContent = 'After Image'
              e.target.parentNode.appendChild(placeholder)
            }}
          />

          {/* Before 图片（顶层，通过 clip-path 裁剪） */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={currentImages.before}
              alt={`${passes.find(p => p.id === activePass)?.label} - Before`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                const placeholder = document.createElement('div')
                placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                placeholder.textContent = 'Before Image'
                e.target.parentNode.appendChild(placeholder)
              }}
            />
          </div>

          {/* 滑块线 */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-accent-gold pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* 滑块手柄 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-accent-gold rounded-full flex items-center justify-center shadow-lg">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 10L4 10M16 10L13 10M10 7L10 4M10 16L10 13" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Before/After 标签 */}
          <div className="absolute top-[var(--item-gap)] left-[var(--item-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-normal)] text-text-primary">
            BEFORE
          </div>
          <div className="absolute top-[var(--item-gap)] right-[var(--item-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-normal)] text-text-primary">
            AFTER
          </div>
        </div>

        {/* 说明文字 */}
        <p className="mt-[var(--content-gap)] font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
          TODO: 等待设计截图确认说明文案
        </p>
      </div>
    </section>
  )
}

export default AssetShowcase
