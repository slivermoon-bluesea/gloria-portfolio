import { useState, useEffect } from 'react'
import SectionHeader from './SectionHeader'

function CinematicLighting() {
  const [activePass, setActivePass] = useState('key')

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

  // 预加载所有图片
  useEffect(() => {
    ['key', 'bounce', 'volumetrics', 'final'].forEach(pass => {
      const img = new Image()
      img.src = `/images/cl-interior/lighting-${pass}.png`
    })
  }, [])

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
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
              {/* 4 张图片叠放，crossfade 切换 */}
              {passes.map((pass) => (
                <img
                  key={pass.id}
                  src={`/images/cl-interior/lighting-${pass.id}.png`}
                  alt={`Lighting ${pass.label}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[180ms]"
                  style={{ opacity: activePass === pass.id ? 1 : 0 }}
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

            {/* 四个 pass 标签 - toggle 切换器 */}
            <div className="flex gap-[8px]">
              {passes.map((pass) => (
                <button
                  key={pass.id}
                  onClick={() => setActivePass(pass.id)}
                  className={`px-[12px] py-[6px] rounded-[var(--radius-mini)] uppercase tracking-[var(--letter-spacing-normal)] transition-colors whitespace-nowrap ${
                    activePass === pass.id
                      ? 'bg-accent-gold text-bg-primary'
                      : 'bg-bg-card-darker text-text-tertiary border border-border hover:border-border-heavy'
                  }`}
                  style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '13px' }}
                >
                  {pass.label}
                </button>
              ))}
            </div>

            {/* 说明列表 - 联动高亮 */}
            <div className="flex flex-col gap-[var(--item-gap)]">
              {lightingPoints.map((point) => (
                <div
                  key={point.id}
                  className={`flex gap-[var(--text-gap)] transition-opacity duration-200 ${
                    activePass === point.id
                      ? 'opacity-100 border-l-[3px] border-[#C9A227] pl-[12px]'
                      : 'opacity-40 pl-[15px]'
                  }`}
                >
                  <span
                    className="font-body font-semibold text-body flex-shrink-0"
                    style={{ color: activePass === point.id ? '#E0B840' : '#C9A227' }}
                  >
                    {point.number}
                  </span>
                  <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Specs 区 - 钉在底部 */}
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
