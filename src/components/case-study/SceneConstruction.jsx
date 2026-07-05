import SectionHeader from './SectionHeader'

function SceneConstruction() {
  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Section Header */}
        <div className="mb-[var(--section-gap)]">
          <SectionHeader
            number="05"
            eyebrow="TECHNICAL BREAKDOWN"
            title="Scene Construction & Performance"
          />
        </div>

        {/* 单张完整图片 */}
        <div className="relative aspect-[21/9] rounded-[var(--radius-card)] overflow-hidden bg-bg-card mb-[var(--content-gap)]">
          <img
            src="/images/cl-interior/scene-construction.png"
            alt="Scene construction - wireframe, set dress, and final render"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>

        {/* 底部两行说明文字 */}
        <div className="flex flex-col gap-[4px]">
          <p className="font-body text-body text-text-primary leading-[var(--line-height-normal)]">
            Same camera, three states — Nanite wireframe, dressed set, final Lumen lighting.
          </p>
          <p className="font-body text-body text-text-tertiary leading-[var(--line-height-normal)]">
            Detail budgeted where the light falls — Nanite and instancing hold the 2.5M-tri interior at real-time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SceneConstruction
