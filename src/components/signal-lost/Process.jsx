import SectionHeader from '../echoes-of-jiangnan/SectionHeader'
import ImageLabel from '../echoes-of-jiangnan/ImageLabel'
import Placeholder from '../echoes-of-jiangnan/Placeholder'

function Process() {
  const processSteps = [
    { id: 1, label: 'REFERENCE' },
    { id: 2, label: 'BLOCKOUT' },
    { id: 3, label: 'SET DRESS' },
    { id: 4, label: 'FINAL' }
  ]

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Section Header */}
        <div className="mb-[var(--section-gap)]">
          <SectionHeader
            number="06"
            eyebrow="BEHIND THE SCENES"
            title="Process"
          />
        </div>

        {/* Two rows grid */}
        <div className="space-y-[var(--card-gap)]">

          {/* Row 1: 3 equal horizontal cards - 16:9 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--card-gap)]">
            {processSteps.slice(0, 3).map((step) => (
              <div
                key={step.id}
                className="relative aspect-[16/9] bg-bg-card rounded-[var(--radius-card)] overflow-hidden"
              >
                <Placeholder ratio="16/9" label={`PROCESS ${step.label}`} className="rounded-none" />
                {/* Bottom gradient scrim */}
                <div className="absolute inset-x-0 bottom-0 h-[30%] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72), transparent)' }} />
                {/* Bottom-right label */}
                <ImageLabel>
                  {step.label}
                </ImageLabel>
              </div>
            ))}
          </div>

          {/* Row 2: 1 full-width card - 16:9 */}
          {processSteps.slice(3).map((step) => (
            <div
              key={step.id}
              className="relative aspect-[16/9] bg-bg-card rounded-[var(--radius-card)] overflow-hidden"
            >
              <Placeholder ratio="16/9" label={`PROCESS ${step.label}`} className="rounded-none" />
              {/* Bottom gradient scrim */}
              <div className="absolute inset-x-0 bottom-0 h-[30%] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
              {/* Bottom-right label */}
              <ImageLabel>
                {step.label}
              </ImageLabel>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
