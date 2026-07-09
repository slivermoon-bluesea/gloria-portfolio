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

        {/* 单张完整图片 + 三个标签 */}
        <div className="relative aspect-[21/9] rounded-[var(--radius-card)] overflow-hidden bg-bg-card mb-[var(--content-gap)]">
          <img loading="lazy" decoding="async"
            src="/images/cl-interior/scene-construction.webp"
            alt="Scene construction - wireframe, set dress, and final render"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />

          {/* 底部全宽 scrim - 提升标签可读性 */}
          <div className="absolute inset-x-0 bottom-0 h-[30%] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />

          {/* 三个区块标签 - 各自钉在所属斜切区的右下角（right% 为暂定值，可微调） */}
          <span className="absolute bottom-3 font-body font-normal text-caption uppercase pointer-events-none" style={{ right: '58%', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em' }}>
            FINAL
          </span>
          <span className="absolute bottom-3 font-body font-normal text-caption uppercase pointer-events-none" style={{ right: '28%', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em' }}>
            SET DRESS
          </span>
          <span className="absolute bottom-3 right-3 font-body font-normal text-caption uppercase pointer-events-none" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em' }}>
            WIREFRAME
          </span>
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
