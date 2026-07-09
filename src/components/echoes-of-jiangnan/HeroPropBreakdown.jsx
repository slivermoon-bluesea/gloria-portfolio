import SectionHeader from './SectionHeader'

function HeroPropBreakdown() {
  const detailViews = [
    { id: 'wireframe', label: 'WIREFRAME', image: '/images/cl-interior/prop-wireframe.webp' },
    { id: 'basecolor', label: 'BASE COLOR', image: '/images/cl-interior/prop-basecolor.webp' },
    { id: 'detail', label: 'DETAIL', image: '/images/cl-interior/prop-detail.webp' }
  ]

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Section Header */}
        <div className="mb-[var(--section-gap)]">
          <SectionHeader
            number="06"
            eyebrow="TECHNICAL BREAKDOWN"
            title="Hero Prop Breakdown"
          />
        </div>

        {/* 顶部大图 - 居中、纯黑底、圆角12px */}
        <div className="mb-[var(--card-gap)] flex justify-center bg-black rounded-[12px] overflow-hidden">
          <img loading="lazy" decoding="async"
            src="/images/cl-interior/hero-prop.webp"
            alt="Scholar table hero prop"
            className="max-w-full h-auto"
          />
        </div>

        {/* 三张卡横排 - 等宽、圆角卡背景、底部标签栏 */}
        <div className="grid grid-cols-3 gap-[var(--card-gap)]">
          {detailViews.map((view) => (
            <div key={view.id} className="rounded-[12px] overflow-hidden bg-bg-card">
              {/* 图片区域 - 固定 414x274，四角直角顶到容器 */}
              <div className="w-full h-[274px] flex items-center justify-center bg-black">
                <img loading="lazy" decoding="async"
                  src={view.image}
                  alt={view.label}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 底部标签栏 - 左右分列，紧贴图片无间隙 */}
              <div className="flex items-center justify-between px-5 py-4">
                {/* 左侧：SCHOLAR TABLE 灰色 */}
                <span className="font-body font-normal text-caption uppercase tracking-[var(--letter-spacing-wide)] text-[#7A776F]">
                  SCHOLAR TABLE
                </span>
                {/* 右侧：状态标签 白色半透明 */}
                <span className="font-body font-normal text-caption uppercase tracking-[var(--letter-spacing-wide)]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {view.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroPropBreakdown
