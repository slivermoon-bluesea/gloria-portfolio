import { useState, useRef } from 'react'
import SectionHeader from './SectionHeader'
import CardHeader from './CardHeader'

function MaterialPipeline() {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const maskTypes = [
    {
      label: 'COLOR',
      color: '#C9A227',
      line1: 'Orientation-based dust via VertexNormalWS;',
      line2: 'varnish yellows where light once fell'
    },
    {
      label: 'HEIGHT MASK',
      color: '#4A8CFF',
      line1: 'Height-based masking pools moisture low —',
      line2: 'darker albedo, lower roughness'
    },
    {
      label: 'ROUGHNESS',
      color: '#38C72E',
      line1: 'Procedural breakup so wear reads under grazing',
      line2: 'light, not just head-on'
    },
    {
      label: 'NORMAL',
      color: '#B435A9',
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

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setLastPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const dx = e.clientX - lastPos.x
    const dy = e.clientY - lastPos.y
    setPosition(prev => ({ x: prev.x + dx, y: prev.y + dy }))
    setLastPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e) => {
    e.preventDefault()
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const cx = e.clientX - rect.left
    const cy = e.clientY - rect.top

    const delta = e.deltaY < 0 ? 1.1 : 1 / 1.1
    const newScale = Math.max(1, Math.min(4, scale * delta))

    const ratio = newScale / scale
    setPosition(prev => ({
      x: cx - (cx - prev.x) * ratio,
      y: cy - (cy - prev.y) * ratio
    }))
    setScale(newScale)
  }

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

          {/* 左卡 - 固定宽度 491px，高度 811px */}
          <div className="w-[491px] flex flex-col gap-[var(--content-gap)] bg-bg-card rounded-[var(--radius-card)] border border-border p-[var(--card-gap)]">

            <CardHeader letter="A" label="MF_CHINESEWEATHERING" />

            <h3 className="font-heading font-bold text-card text-text-primary">
              How It's Made
            </h3>

            <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
              A custom UE5 Material Function layering yellowing, dust, moisture and roughness.
            </p>

            {/* 四个彩色标签卡 - 竖向堆叠，每个 415×118 */}
            <div className="flex flex-col gap-[var(--item-gap)]">
              {maskTypes.map((mask) => (
                <div
                  key={mask.label}
                  className="w-[415px] h-[118px] bg-bg-card-darker rounded-[var(--radius-small)] p-[var(--item-gap)] flex flex-col gap-[var(--text-gap)]"
                  style={{
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#333333'
                  }}
                >
                  {/* 顶部大按钮横条 351×25.75，水平居中 */}
                  <div className="flex justify-center">
                    <div
                      className="flex items-center justify-center font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-normal)]"
                      style={{
                        width: '351px',
                        height: '25.75px',
                        borderRadius: '13px',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: mask.color,
                        color: mask.color,
                        backgroundColor: 'transparent'
                      }}
                    >
                      {mask.label}
                    </div>
                  </div>

                  {/* 描述文字 - 左对齐 */}
                  <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
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

          {/* 右侧 - flex-1 填充剩余空间 */}
          <div className="flex-1 flex flex-col gap-[var(--item-gap)]">

            {/* 单张节点图 - 固定容器 781×599，pan/zoom 交互 */}
            <div
              ref={containerRef}
              className="relative bg-bg-card rounded-[var(--radius-card)] border border-border overflow-hidden"
              style={{ width: '781px', height: '599px', cursor: isDragging ? 'grabbing' : 'grab' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
            >
              <img
                src="/images/cl-interior/material-node-graph.png"
                alt="Material node graph"
                className="absolute top-0 left-0 w-full h-auto select-none"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transformOrigin: '0 0'
                }}
                draggable={false}
                onError={(e) => {
                  e.target.style.display = 'none'
                  const placeholder = document.createElement('div')
                  placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                  placeholder.textContent = 'Node Graph'
                  e.target.parentNode.appendChild(placeholder)
                }}
              />
            </div>

            {/* BEFORE/AFTER 静态图片模块 401×274 */}
            <div className="relative rounded-[12px] overflow-hidden" style={{ width: '401px', height: '274px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#C9A227' }}>
              <img
                src="/images/cl-interior/material-before-after.png"
                alt="Material weathering comparison"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  const placeholder = document.createElement('div')
                  placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                  placeholder.textContent = 'Before/After'
                  e.target.parentNode.appendChild(placeholder)
                }}
              />
              {/* 金色标签右下角 */}
              <div className="absolute bottom-[var(--text-gap)] right-[var(--text-gap)] px-[12px] py-[6px] bg-bg-primary/80 rounded-[var(--radius-mini)] font-body font-semibold text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
                DETAIL — BEFORE/AFTER
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MaterialPipeline
