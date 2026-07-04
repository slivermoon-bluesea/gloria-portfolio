import { useState } from 'react'
import Figure from './Figure'

function TechnicalNotes() {
  const [isExpanded, setIsExpanded] = useState(false)

  const processSteps = [
    {
      id: 'reference',
      title: 'Reference Board',
      image: '/images/cl-interior/m8-reference.png',
      description: 'TODO: 等待设计截图确认文案'
    },
    {
      id: 'blockout',
      title: 'Blockout',
      image: '/images/cl-interior/m8-blockout.png',
      description: 'TODO: 等待设计截图确认文案'
    },
    {
      id: 'layout',
      title: 'Top-down Layout',
      image: '/images/cl-interior/m8-layout.png',
      description: 'TODO: 等待设计截图确认文案'
    },
    {
      id: 'modular',
      title: 'Modular Kit Breakdown',
      image: '/images/cl-interior/m8-modular.png',
      description: 'TODO: 等待设计截图确认文案'
    }
  ]

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* 折叠头部 */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between bg-bg-card rounded-[var(--radius-card)] border border-border p-[var(--card-gap)] hover:border-border-heavy transition-colors"
        >
          <div className="flex items-center gap-[var(--item-gap)]">
            <span className="font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
              PROCESS
            </span>
            <h3 className="font-heading font-bold text-section text-text-primary">
              Technical Notes
            </h3>
          </div>

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

        {/* 展开内容 */}
        {isExpanded && (
          <div className="mt-[var(--card-gap)] grid grid-cols-2 gap-[var(--card-gap)]">
            {processSteps.map((step) => (
              <div key={step.id} className="bg-bg-card rounded-[var(--radius-card)] border border-border overflow-hidden">
                {/* 图片 */}
                <div className="relative aspect-[16/9]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      const placeholder = document.createElement('div')
                      placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                      placeholder.textContent = step.title
                      e.target.parentNode.appendChild(placeholder)
                    }}
                  />
                </div>

                {/* 标题和说明 */}
                <div className="p-[var(--content-gap)]">
                  <h4 className="font-heading font-bold text-subtitle text-text-primary mb-[var(--text-gap)]">
                    {step.title}
                  </h4>
                  <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                    {step.description}
                  </p>
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
