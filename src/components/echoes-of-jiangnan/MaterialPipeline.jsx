import { useState, useRef, useCallback, useEffect } from 'react'
import SectionHeader from './SectionHeader'
import CardHeader from './CardHeader'
import ImageLabel from './ImageLabel'

function MaterialPipeline() {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef(null)

  const maskTypes = [
    {
      label: 'COLOR',
      color: '#C9A227',
      line1: (
        <>
          Orientation-based dust via <strong><em>VertexNormalWS</em></strong>;
        </>
      ),
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
          Surface grime layered with <strong><em>Blend-angle</em></strong>
        </>
      ),
      line2: (
        <>
          <strong><em>corrected normals</em></strong> to keep base detail intact
        </>
      )
    }
  ]

  const handleMouseDown = (e) => {
    if (!isHovering) return
    setIsDragging(true)
    setLastPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !isHovering) return
    const dx = e.clientX - lastPos.x
    const dy = e.clientY - lastPos.y
    setPosition(prev => ({ x: prev.x + dx, y: prev.y + dy }))
    setLastPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = useCallback((e) => {
    if (!isHovering) return
    e.preventDefault()
    e.stopPropagation()
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
  }, [isHovering, scale])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheelPassive = (e) => {
      if (isHovering) {
        e.preventDefault()
      }
    }

    container.addEventListener('wheel', handleWheelPassive, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheelPassive)
    }
  }, [isHovering])

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

          {/* 左卡 - 固定 491×811 */}
          <div className="bg-bg-card rounded-[var(--radius-card)] border border-border p-[32px]" style={{ width: '491px', height: '811px' }}>

            <CardHeader letter="A" label="MF_CHINESEWEATHERING" />

            <h3 className="font-heading font-bold text-card text-text-primary mt-[16px]">
              How It's Made
            </h3>

            <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)] mt-[16px]">
              A custom UE5 Material Function layering yellowing, dust, moisture and roughness.
            </p>

            {/* 四个标签卡 - 色点索引 */}
            <div className="flex flex-col gap-[16px] mt-[16px]">
              {maskTypes.map((mask) => (
                <div
                  key={mask.label}
                  className="rounded-[20px] px-[32px] py-[24px] flex flex-col gap-[12px]"
                  style={{
                    width: '415px',
                    height: '118px',
                    backgroundColor: '#1A1A1A',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#333333'
                  }}
                >
                  {/* 顶部标签 - 色点 + 文字 */}
                  <div className="flex items-center gap-[8px]">
                    <div
                      className="w-[8px] h-[8px] rounded-full flex-shrink-0"
                      style={{ backgroundColor: mask.color }}
                    />
                    <span
                      className="font-body font-normal text-caption uppercase tracking-[var(--letter-spacing-normal)] text-text-secondary"
                    >
                      {mask.label}
                    </span>
                  </div>

                  {/* 描述文字区域 - 固定尺寸 351×50，两行颜色相同 */}
                  <div className="flex flex-col gap-[4px]" style={{ width: '351px', height: '50px' }}>
                    <p className="font-body text-body leading-[var(--line-height-normal)]" style={{ color: '#B8B5AE' }}>
                      {mask.line1}
                    </p>
                    <p className="font-body text-body leading-[var(--line-height-normal)]" style={{ color: '#B8B5AE' }}>
                      {mask.line2}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 底部文案区域 - 固定 415×49 */}
            <div className="mt-[16px]" style={{ width: '415px', height: '49px' }}>
              <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                All masks exposed as per-asset parameters — one function drives decay across all 40 assets.
              </p>
            </div>
          </div>

          {/* 右侧 - 固定 781×811，相对定位容器 */}
          <div className="relative" style={{ width: '781px', height: '811px' }}>

            {/* 单张节点图 - 781×599，pan/zoom 交互 */}
            <div
              ref={containerRef}
              className="relative bg-bg-card rounded-[var(--radius-card)] border border-border overflow-hidden"
              style={{ width: '781px', height: '599px', cursor: isHovering ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false)
                setIsDragging(false)
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onWheel={handleWheel}
            >
              <img
                src="/images/cl-interior/material-node-graph.png"
                alt="Material node graph"
                className="absolute top-0 left-0 w-full h-auto select-none pointer-events-none"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transformOrigin: '0 0'
                }}
                draggable={false}
                onError={(e) => {
                  e.target.style.display = 'none'
                  const placeholder = document.createElement('div')
                  placeholder.className = 'absolute inset-0 bg-bg-card-darker flex items-center justify-center text-text-tertiary text-body'
                  placeholder.textContent = 'Node Graph (use test image to verify interaction)'
                  e.target.parentNode.appendChild(placeholder)
                }}
              />
            </div>

            {/* BEFORE/AFTER 静态图片模块 401×274，绝对定位右下角，无边框 */}
            <div className="absolute bottom-0 right-0 rounded-[12px] overflow-hidden" style={{ width: '401px', height: '274px' }}>
              <div className="relative w-full h-full">
                <img
                  src="/images/cl-interior/material-before-after.png"
                  alt="Material weathering comparison"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                {/* 底部渐变 scrim */}
                <div className="absolute inset-x-0 bottom-0 h-[30%] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
                {/* 右下角标签 - 70%白 */}
                <ImageLabel>
                  DETAIL — BEFORE/AFTER
                </ImageLabel>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MaterialPipeline
