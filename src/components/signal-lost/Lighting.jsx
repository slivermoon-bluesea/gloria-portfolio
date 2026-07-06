import { useState } from 'react'
import SectionHeader from '../echoes-of-jiangnan/SectionHeader'
import Placeholder from '../echoes-of-jiangnan/Placeholder'

function Lighting() {
  const [activePass, setActivePass] = useState('key')

  const passes = [
    { id: 'key', label: 'Key only' },
    { id: 'fill', label: '+Fill' },
    { id: 'volumetrics', label: '+Volumetrics' },
    { id: 'final', label: 'Final' }
  ]

  const lightingPoints = [
    { id: 'key', number: '01', text: 'TODO: Key light description' },
    { id: 'fill', number: '02', text: 'TODO: Fill light description' },
    { id: 'volumetrics', number: '03', text: 'TODO: Volumetrics description' },
    { id: 'final', number: '04', text: 'TODO: Final composite description' }
  ]

  const specs = [
    { label: 'LIGHT COUNT', value: 'TODO' },
    { label: 'GI', value: 'TODO' },
    { label: 'SHADOWS', value: 'TODO' },
    { label: 'FOG', value: 'TODO' },
    { label: 'KEY TEMP', value: 'TODO' },
    { label: 'RENDER', value: 'TODO' }
  ]

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Section Header */}
        <div className="mb-[var(--section-gap)]">
          <SectionHeader
            number="05"
            eyebrow="TECHNICAL BREAKDOWN"
            title="Cinematic Lighting"
          />
        </div>

        <div className="flex gap-[var(--card-gap)] items-stretch">

          {/* Left: Image switching area (2/3) */}
          <div className="flex-[2] flex">
            <div className="relative w-full bg-bg-card rounded-[var(--radius-card)] overflow-hidden">
              {/* 4 placeholder images stacked with crossfade */}
              {passes.map((pass) => (
                <div
                  key={pass.id}
                  className="absolute inset-0 transition-opacity duration-[180ms]"
                  style={{ opacity: activePass === pass.id ? 1 : 0 }}
                >
                  <Placeholder ratio="16/9" label={`LIGHTING ${pass.label.toUpperCase()}`} className="rounded-none h-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Lighting & Mood card (1/3) */}
          <div className="flex-1 bg-bg-card rounded-[var(--radius-card)] border border-border p-[var(--card-gap)] flex flex-col gap-[var(--content-gap)]">

            <h3 className="font-bold text-text-primary" style={{ fontFamily: 'Playfair Display', fontSize: '28px' }}>
              Lighting & Mood
            </h3>

            {/* Four pass toggles */}
            <div className="flex gap-[12px]">
              {passes.map((pass) => (
                <button
                  key={pass.id}
                  onClick={() => setActivePass(pass.id)}
                  className={`px-[12px] py-[6px] rounded-[var(--radius-mini)] uppercase tracking-[var(--letter-spacing-normal)] transition-colors whitespace-nowrap ${
                    activePass === pass.id
                      ? 'bg-accent-gold text-bg-primary'
                      : 'text-text-tertiary hover:text-text-secondary'
                  }`}
                  style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '13px' }}
                >
                  {pass.label}
                </button>
              ))}
            </div>

            {/* Lighting points - linked highlighting */}
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

            {/* Specs area - pinned to bottom */}
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

export default Lighting
