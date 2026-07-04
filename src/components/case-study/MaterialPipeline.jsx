import CardHeader from './CardHeader'
import Figure from './Figure'

function MaterialPipeline() {
  // 彩色标签的配置
  const maskTypes = [
    {
      label: 'COLOR',
      color: '#C9A227', // 金色
      description: 'TODO: 等待设计截图确认文案',
      detail: 'TODO: 等待设计截图确认文案'
    },
    {
      label: 'HEIGHT MASK',
      color: '#4A90E2', // 蓝色 /* 暂定值,待同步校对 */
      description: 'TODO: 等待设计截图确认文案',
      detail: 'TODO: 等待设计截图确认文案'
    },
    {
      label: 'ROUGHNESS',
      color: '#7ED321', // 绿色 /* 暂定值,待同步校对 */
      description: 'TODO: 等待设计截图确认文案',
      detail: 'TODO: 等待设计截图确认文案'
    },
    {
      label: 'NORMAL',
      color: '#BD10E0', // 紫色 /* 暂定值,待同步校对 */
      description: 'TODO: 等待设计截图确认文案',
      detail: 'TODO: 等待设计截图确认文案'
    }
  ]

  const nodeGraphs = [
    { id: 1, color: '#C9A227', image: '/images/cl-interior/material-node-1-color.png' },
    { id: 2, color: '#4A90E2', image: '/images/cl-interior/material-node-2-height.png' },
    { id: 3, color: '#7ED321', image: '/images/cl-interior/material-node-3-roughness.png' },
    { id: 4, color: '#BD10E0', image: '/images/cl-interior/material-node-4-normal.png' }
  ]

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* 左右两列布局 */}
        <div className="flex gap-[var(--card-gap)]">

          {/* 左卡 - How It's Made */}
          <div className="flex-1 flex flex-col gap-[var(--content-gap)] bg-bg-card rounded-[var(--radius-card)] border border-border p-[var(--card-gap)]">

            <CardHeader letter="A" label="MF_CHINESEWEATHERING" />

            <h3 className="font-heading font-bold text-card text-text-primary">
              How It's Made
            </h3>

            <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
              TODO: 等待设计截图确认简介文案
            </p>

            {/* 四个彩色标签卡 */}
            <div className="grid grid-cols-2 gap-[var(--item-gap)]">
              {maskTypes.map((mask) => (
                <div
                  key={mask.label}
                  className="bg-bg-card-darker rounded-[var(--radius-small)] border p-[var(--item-gap)]"
                  style={{ borderColor: mask.color }}
                >
                  {/* 标签 */}
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

                  {/* 说明文字 */}
                  <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)] mb-[4px]">
                    {mask.description}
                  </p>
                  <p className="font-body text-body text-text-tertiary leading-[var(--line-height-normal)]">
                    {mask.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* 底部文案 */}
            <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)] italic">
              All masks exposed as per-asset parameters — one function drives decay across all 40 assets.
            </p>
          </div>

          {/* 右侧 - 节点图 + BEFORE/AFTER */}
          <div className="flex-1 flex flex-col gap-[var(--item-gap)]">

            {/* 四条节点图 */}
            {nodeGraphs.map((node) => (
              <div
                key={node.id}
                className="bg-bg-card rounded-[var(--radius-small)] border border-border overflow-hidden"
              >
                {/* 彩色顶栏 */}
                <div
                  className="h-[8px]"
                  style={{ backgroundColor: node.color }}
                />

                {/* 节点图图片 */}
                <img
                  src={node.image}
                  alt={`Node graph ${node.id}`}
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const placeholder = document.createElement('div')
                    placeholder.className = 'w-full h-[120px] bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                    placeholder.textContent = `Node Graph ${node.id}`
                    e.target.parentNode.appendChild(placeholder)
                  }}
                />
              </div>
            ))}

            {/* BEFORE/AFTER 对比卡 */}
            <div className="bg-bg-card rounded-[var(--radius-card)] border-2 border-accent-gold p-[var(--item-gap)]">
              <div className="flex items-center gap-[var(--tight-gap)] mb-[var(--tight-gap)]">
                <span className="font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
                  DETAIL — BEFORE/AFTER
                </span>
              </div>

              <Figure
                src="/images/cl-interior/m4-before-after.png"
                aspectRatio="16/9"
                mainCaption="Material weathering comparison"
                subCaption="Left: base material · Right: procedural decay applied"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MaterialPipeline
