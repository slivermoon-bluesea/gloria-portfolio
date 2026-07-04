import { useState, useRef } from 'react'

function CinematicLighting() {
  const [activePass, setActivePass] = useState('final')
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const passes = [
    { id: 'key', label: 'Key only' },
    { id: 'bounce', label: '+Bounce' },
    { id: 'volumetrics', label: '+Volumetrics' },
    { id: 'final', label: 'Final' }
  ]

  const lightingPoints = [
    { number: '01', text: 'Single warm key through the lattice sets direction & contrast' },
    { number: '02', text: 'Lumen GI fills softly without lifting the crushed blacks' },
    { number: '03', text: 'Fog gives the shafts their body; warm-cool depth' },
    { number: '04', text: 'Per-shot exposure & white balance tuned via MRQ' }
  ]

  const updateSliderPosition = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseDown = () => setIsDragging(true)

  const handleMouseMove = (e) => {
    if (!isDragging) return
    updateSliderPosition(e.clientX)
  }

  const handleMouseUp = () => setIsDragging(false)

  const handleTouchStart = () => setIsDragging(true)

  const handleTouchMove = (e) => {
    if (!isDragging) return
    updateSliderPosition(e.touches[0].clientX)
  }

  const handleTouchEnd = () => setIsDragging(false)

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        <div className="flex gap-[var(--card-gap)]">

          {/* 左侧 - before/after 滑块 (约 2/3) */}
          <div className="flex-[2]">
            <div
              ref={containerRef}
              className="relative w-full aspect-[16/9] bg-bg-card rounded-[var(--radius-card)] overflow-hidden cursor-ew-resize select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* 右侧图片（底层，根据 activePass 变化） */}
              <img
                src={`/images/cl-interior/lighting-${activePass}.png`}
                alt={`Lighting ${activePass}`}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />

              {/* 左侧图片（顶层，固定 lighting-flat.png，通过 clip-path 裁剪） */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src="/images/cl-interior/lighting-flat.png"
                  alt="Lighting flat"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>

              {/* 滑块线 */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-accent-gold pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* 滑块把手 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-accent-gold rounded-full flex items-center justify-center shadow-lg cursor-ew-resize pointer-events-auto">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L4 10M16 10L13 10M10 7L10 4M10 16L10 13" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* BEFORE/AFTER 标签 */}
              <div className="absolute top-[var(--item-gap)] left-[var(--item-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-normal)] text-text-primary">
                BEFORE
              </div>
              <div className="absolute top-[var(--item-gap)] right-[var(--item-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-normal)] text-text-primary">
                AFTER
              </div>
            </div>
          </div>

          {/* 右侧 - Lighting & Mood 卡片 (约 1/3) */}
          <div className="flex-1 bg-bg-card rounded-[var(--radius-card)] border border-border p-[var(--card-gap)] flex flex-col gap-[var(--content-gap)]">

            <h3 className="font-heading font-bold text-subtitle text-text-primary">
              Lighting & Mood
            </h3>

            {/* 四个 pass 标签 */}
            <div className="flex flex-wrap gap-[var(--tight-gap)]">
              {passes.map((pass) => (
                <button
                  key={pass.id}
                  onClick={() => setActivePass(pass.id)}
                  className={`px-[var(--item-gap)] py-[var(--tight-gap)] rounded-[var(--radius-mini)] font-body font-medium text-caption uppercase tracking-[var(--letter-spacing-normal)] transition-colors ${
                    activePass === pass.id
                      ? 'bg-accent-gold text-bg-primary'
                      : 'bg-bg-card-darker text-text-tertiary border border-border hover:border-border-heavy'
                  }`}
                >
                  {pass.label}
                </button>
              ))}
            </div>

            {/* 静态说明列表 */}
            <div className="flex flex-col gap-[var(--item-gap)]">
              {lightingPoints.map((point) => (
                <div key={point.number} className="flex gap-[var(--text-gap)]">
                  <span className="font-body font-semibold text-body text-accent-gold flex-shrink-0">
                    {point.number}
                  </span>
                  <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CinematicLighting
