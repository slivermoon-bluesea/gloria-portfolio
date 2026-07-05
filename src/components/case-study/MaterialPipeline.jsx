import SectionHeader from './SectionHeader'
import CardHeader from './CardHeader'

function MaterialPipeline() {
  const maskTypes = [
    {
      label: 'COLOR',
      color: '#C9A227',
      line1: 'Orientation-based dust via VertexNormalWS;',
      line2: 'varnish yellows where light once fell'
    },
    {
      label: 'HEIGHT MASK',
      color: '#4A90E2',
      line1: 'Height-based masking pools moisture low —',
      line2: 'darker albedo, lower roughness'
    },
    {
      label: 'ROUGHNESS',
      color: '#7ED321',
      line1: 'Procedural breakup so wear reads under grazing',
      line2: 'light, not just head-on'
    },
    {
      label: 'NORMAL',
      color: '#BD10E0',
      line1: (
        <>
          Surface grime layered with <em>Blend-angle</em>
        </>
      ),
      line2: (
        <>
          <em>corrected normals</em> to keep base detail intact
        </>
      )
    }
  ]

  const nodeGraphs = [
    { id: 1, color: '#808000', image: '/images/cl-interior/material-node-1-color.png' },
    { id: 2, color: '#4A90E2', image: '/images/cl-interior/material-node-2-height.png' },
    { id: 3, color: '#7ED321', image: '/images/cl-interior/material-node-3-roughness.png' },
    { id: 4, color: '#BD10E0', image: '/images/cl-interior/material-node-4-normal.png' }
  ]

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Section Header */}
        <div className="mb-[var(--section-gap)]">
          <SectionHeader
            number="03"
            eyebrow="TECHNICAL BREAKDOWN"
            title="Material & Texture Pipeline"
          />
        </div>

        <div className="flex gap-[var(--card-gap)]">

          {/* 左卡 - 约 60% */}
          <div className="flex-[3] flex flex-col gap-[var(--content-gap)] bg-bg-card rounded-[var(--radius-card)] border border-border p-[var(--card-gap)]">

            <CardHeader letter="A" label="MF_CHINESEWEATHERING" />

            <h3 className="font-heading font-bold text-card text-text-primary">
              How It's Made
            </h3>

            <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
              A custom UE5 Material Function layering yellowing, dust, moisture and roughness.
            </p>

            {/* 四个彩色标签卡 - 竖向堆叠 */}
            <div className="flex flex-col gap-[var(--item-gap)]">
              {maskTypes.map((mask) => (
                <div
                  key={mask.label}
                  className="bg-bg-card-darker rounded-[var(--radius-small)] border p-[var(--item-gap)]"
                  style={{ borderColor: mask.color }}
                >
                  <div
                    className="inline-block px-[12px] py-[4px] rounded-full mb-[var(--tight-gap)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-normal)]"
                    style={{
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: mask.color,
                      color: mask.color
                    }}
                  >
                    {mask.label}
                  </div>

                  <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)] mb-[4px]">
                    {mask.line1}
                  </p>
                  <p className="font-body text-body text-text-tertiary leading-[var(--line-height-normal)]">
                    {mask.line2}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)] italic">
              All masks exposed as per-asset parameters — one function drives decay across all 40 assets.
            </p>
          </div>

          {/* 右侧 - 约 40% */}
          <div className="flex-[2] flex flex-col gap-[var(--item-gap)]">

            {/* 四条节点图 */}
            {nodeGraphs.map((node) => (
              <div
                key={node.id}
                className="bg-bg-card rounded-[var(--radius-small)] border border-border overflow-hidden flex-1"
              >
                <div className="h-[8px]" style={{ backgroundColor: node.color }} />
                <img
                  src={node.image}
                  alt={`Node graph ${node.id}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const placeholder = document.createElement('div')
                    placeholder.className = 'w-full h-full bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                    placeholder.textContent = `Node Graph ${node.id}`
                    e.target.parentNode.appendChild(placeholder)
                  }}
                />
              </div>
            ))}

            {/* BEFORE/AFTER 对比卡 */}
            <div className="bg-bg-card rounded-[var(--radius-card)] border-2 border-accent-gold p-[var(--item-gap)]">
              <div className="mb-[var(--tight-gap)]">
                <span className="font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
                  DETAIL — BEFORE/AFTER
                </span>
              </div>

              <img
                src="/images/cl-interior/material-before-after.png"
                alt="Material weathering comparison"
                className="w-full h-auto rounded-[var(--radius-mini)]"
                onError={(e) => {
                  e.target.style.display = 'none'
                  const placeholder = document.createElement('div')
                  placeholder.className = 'w-full h-[200px] bg-bg-card-darker rounded-[var(--radius-mini)] flex items-center justify-center text-text-tertiary text-body'
                  placeholder.textContent = 'Before/After Comparison'
                  e.target.parentNode.appendChild(placeholder)
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MaterialPipeline
