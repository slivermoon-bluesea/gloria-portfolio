import { useState } from 'react'
import SectionHeader from './SectionHeader'

function TechnicalNotes() {
  const [isExpanded, setIsExpanded] = useState(false)

  const processSteps = [
    {
      id: 1,
      label: 'REFERENCE BOARD',
      image: '/images/cl-interior/process-reference.png'
    },
    {
      id: 2,
      label: 'BLOCKOUT',
      image: '/images/cl-interior/process-blockout.png'
    },
    {
      id: 3,
      label: 'TOP-DOWN LAYOUT',
      image: '/images/cl-interior/process-layout.png'
    },
    {
      id: 4,
      label: 'MODULAR KIT',
      image: '/images/cl-interior/process-modular.png'
    }
  ]

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Section Header */}
        <div className="mb-[var(--section-gap)]">
          <SectionHeader
            number="07"
            eyebrow="BEHIND THE SCENES"
            title="Process"
          />
        </div>

        {/* 折叠头部 */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between bg-bg-card rounded-[var(--radius-card)] border border-border p-[var(--card-gap)] hover:border-border-heavy transition-colors"
        >
          <span className="font-heading font-bold text-section text-text-primary">▸</span>

          {/* 展开/收起图标 */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`text-text-tertiary transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 展开内容 - 2×2 网格 */}
        {isExpanded && (
          <div className="mt-[var(--card-gap)] grid grid-cols-2 gap-[var(--card-gap)]">
            {processSteps.map((step) => (
              <div key={step.id} className="relative aspect-[16/9] bg-bg-card rounded-[var(--radius-card)] border border-border overflow-hidden">
                <img
                  src={step.image}
                  alt={step.label}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const placeholder = document.createElement('div')
                    placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                    placeholder.textContent = step.label
                    e.target.parentNode.appendChild(placeholder)
                  }}
                />
                {/* 标签覆盖在图片上 */}
                <div className="absolute bottom-[var(--item-gap)] left-[var(--item-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default TechnicalNotes
