import SectionHeader from './SectionHeader'
import ImageLabel from './ImageLabel'

function TechnicalNotes() {
  const processSteps = [
    {
      id: 1,
      label: 'REFERENCE BOARD',
      image: '/images/cl-interior/process-reference.png'
    },
    {
      id: 2,
      label: 'MODELING',
      image: '/images/cl-interior/process-modeling.png'
    },
    {
      id: 3,
      label: 'MODULAR KIT',
      image: '/images/cl-interior/process-modularkit.png'
    },
    {
      id: 4,
      label: 'LAYOUT BREAKDOWN',
      image: '/images/cl-interior/process-layout-breakdown.png'
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

        {/* 两行网格 */}
        <div className="space-y-[var(--card-gap)]">

          {/* 第1行：3个等宽横向卡片 - 16:9 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--card-gap)]">
            {processSteps.slice(0, 3).map((step) => (
              <div
                key={step.id}
                className="relative aspect-[16/9] bg-bg-card rounded-[var(--radius-card)] overflow-hidden"
              >
                <img
                  src={step.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* 底部渐变 scrim - 加深到 0.72 */}
                <div className="absolute inset-x-0 bottom-0 h-[30%] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72), transparent)' }} />
                {/* 右下角标签 */}
                <ImageLabel>
                  {step.label}
                </ImageLabel>
              </div>
            ))}
          </div>

          {/* 第2行：1个全宽卡片 - 16:9 */}
          {processSteps.slice(3).map((step) => (
            <div
              key={step.id}
              className="relative aspect-[16/9] bg-bg-card rounded-[var(--radius-card)] overflow-hidden"
            >
              <img
                src={step.image}
                alt=""
                className="w-full h-full object-cover"
              />
              {/* 底部渐变 scrim */}
              <div className="absolute inset-x-0 bottom-0 h-[30%] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
              {/* 右下角标签 */}
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

export default TechnicalNotes
