import { useState, useEffect, useRef } from 'react'
import SectionHeader from './SectionHeader'

function CinematicLighting() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)
  const autoPlayTimerRef = useRef(null)
  const idleTimerRef = useRef(null)

  const passes = [
    { id: 'key', label: 'Key only' },
    { id: 'bounce', label: '+Bounce' },
    { id: 'volumetrics', label: '+Volumetrics' },
    { id: 'final', label: 'Final' }
  ]

  const lightingPoints = [
    { id: 'key', number: '01', text: 'Single warm key through the lattice sets direction & contrast' },
    { id: 'bounce', number: '02', text: 'Lumen GI fills softly without lifting the crushed blacks' },
    { id: 'volumetrics', number: '03', text: 'Fog gives the shafts their body; warm-cool depth' },
    { id: 'final', number: '04', text: 'Per-shot exposure & white balance tuned via MRQ' }
  ]

  const specs = [
    { label: 'LIGHT COUNT', value: '1 key + 3 fill + sky' },
    { label: 'GI', value: 'Lumen' },
    { label: 'SHADOWS', value: 'Virtual Shadow Maps' },
    { label: 'FOG', value: 'Exponential + Volumetric' },
    { label: 'KEY TEMP', value: '4200K' },
    { label: 'RENDER', value: 'Movie Render Queue' }
  ]

  // Phase 2 G-K: 自动播放 + 手动控制
  // 预加载所有图片
  useEffect(() => {
    passes.forEach((pass) => {
      const img = new Image()
      img.src = `/images/cl-interior/lighting-${pass.id}.webp`
    })
  }, [])

  // H: IntersectionObserver - 进视口启动自动播放，离开暂停
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // 自动播放逻辑
  useEffect(() => {
    // 检查用户是否偏好减少动画
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // K: 尊重 prefers-reduced-motion，关闭自动播放
      return
    }

    if (isInView && isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % passes.length)
      }, 2800) // 每张停 2.8s

      return () => {
        if (autoPlayTimerRef.current) {
          clearInterval(autoPlayTimerRef.current)
        }
      }
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [isInView, isAutoPlaying, passes.length])

  // 进入视口时启动自动播放
  useEffect(() => {
    if (isInView && !isAutoPlaying) {
      setIsAutoPlaying(true)
    }
  }, [isInView])

  // I: 手动点击 - 停止自动播放，闲置 5s 后恢复
  const handleManualClick = (index) => {
    setActiveIndex(index)
    setIsAutoPlaying(false)

    // 清除旧的闲置计时器
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current)
    }

    // 启动新的闲置计时器（5s 后恢复自动播放）
    idleTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  // 清理计时器
  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Section Header */}
        <div className="mb-[var(--section-gap)]">
          <SectionHeader
            number="04"
            eyebrow="TECHNICAL BREAKDOWN"
            title="Cinematic Lighting"
          />
        </div>

        <div className="flex gap-[var(--card-gap)] items-stretch">

          {/* 左侧 - 图片切换区 (约 2/3) */}
          <div className="flex-[2] flex">
            <div className="relative w-full bg-bg-card rounded-[var(--radius-card)] overflow-hidden">
              {/* J: crossfade - 4 张图片叠放，通过 opacity 淡入淡出 */}
              {passes.map((pass, index) => (
                <img
                  key={pass.id}
                  src={`/images/cl-interior/lighting-${pass.id}.webp`}
                  alt={`Lighting ${pass.label}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                  style={{ opacity: activeIndex === index ? 1 : 0 }}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              ))}
            </div>
          </div>

          {/* 右侧 - Lighting & Mood 卡片 (约 1/3) */}
          <div className="flex-1 bg-bg-card rounded-[var(--radius-card)] border border-border p-[var(--card-gap)] flex flex-col gap-[var(--content-gap)]">

            <h3 className="font-bold text-text-primary" style={{ fontFamily: 'Playfair Display', fontSize: '28px' }}>
              Lighting & Mood
            </h3>

            {/* G: 四个 pass 按钮 - activeIndex 驱动高亮 */}
            <div className="flex gap-[12px]">
              {passes.map((pass, index) => (
                <button
                  key={pass.id}
                  onClick={() => handleManualClick(index)}
                  className={`px-[12px] py-[6px] rounded-[var(--radius-mini)] uppercase tracking-[var(--letter-spacing-normal)] transition-all duration-300 whitespace-nowrap ${
                    activeIndex === index
                      ? 'bg-accent-gold text-bg-primary ring-2 ring-accent-gold ring-offset-2 ring-offset-bg-card'
                      : 'text-text-tertiary hover:text-text-secondary'
                  }`}
                  style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '13px' }}
                  aria-label={`Show ${pass.label} lighting pass`}
                  aria-pressed={activeIndex === index}
                >
                  {pass.label}
                </button>
              ))}
            </div>

            {/* 说明列表 - G: activeIndex 驱动高亮，可选累积点亮效果 */}
            <div className="flex flex-col gap-[var(--item-gap)]">
              {lightingPoints.map((point, index) => {
                // 累积点亮：当前步骤及之前的步骤都高亮
                const isActive = index <= activeIndex

                return (
                  <div
                    key={point.id}
                    className={`flex gap-[var(--text-gap)] transition-all duration-300 ${
                      isActive
                        ? 'opacity-100 border-l-[3px] border-[#C9A227] pl-[12px]'
                        : 'opacity-40 pl-[15px]'
                    }`}
                  >
                    <span
                      className="font-body font-semibold text-body flex-shrink-0"
                      style={{ color: isActive ? '#E0B840' : '#C9A227' }}
                    >
                      {point.number}
                    </span>
                    <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                      {point.text}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Specs 区 - 钉在底部，不随 index 变化（同一套灯光方案的分层展示） */}
            <div className="mt-auto pt-[var(--content-gap)] border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
              <div className="grid md:grid-cols-[auto_1fr] grid-cols-1 gap-x-[24px] gap-y-[12px]">
                {specs.map((spec) => (
                  <div key={spec.label} className="contents">
                    <span className="font-body text-caption uppercase tracking-[var(--letter-spacing-wide)]" style={{ color: 'rgba(255, 255, 255, 0.45)' }}>
                      {spec.label}
                    </span>
                    <span className="font-body text-caption justify-self-end" style={{ color: '#B8B5AE' }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CinematicLighting
