import SectionHeader from '../echoes-of-jiangnan/SectionHeader'
import CardHeader from '../echoes-of-jiangnan/CardHeader'
import ImageLabel from '../echoes-of-jiangnan/ImageLabel'

function EnvironmentWork() {
  return (
    <section className="w-full bg-bg-primary flex justify-center py-[var(--container-padding-y)]">
      <div className="w-full max-w-[var(--container-max-width)] px-[var(--container-padding-x)]">
        <div className="flex flex-col gap-[var(--section-gap)]">

          {/* Section Header */}
          <SectionHeader
            number="02"
            eyebrow="TECHNICAL BREAKDOWN"
            title="Core Contributions"
          />

          {/* A · Terrain Sculpting — 左侧文字主导高度，右侧图片跟随 */}
          <div className="flex flex-col md:flex-row gap-[var(--card-gap)]">
            {/* 左侧：文字列（主导高度） */}
            <div className="flex-1 flex flex-col gap-[var(--content-gap)]">
              <CardHeader letter="A" label="TERRAIN SCULPTING" />

              <h3 className="font-heading text-card font-bold text-text-primary">
                Building the Foundation
              </h3>

              <div className="flex flex-col gap-[var(--item-gap)] font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                <div className="bg-bg-card rounded-small p-[var(--item-gap)] border border-border">
                  <div className="flex items-center gap-[8px] mb-[4px]">
                    <div className="w-[8px] h-[8px] rounded-full flex-shrink-0" style={{ backgroundColor: '#EF4444' }} />
                    <p className="font-semibold text-text-primary">The Obstacle: Gaea Procedural Terrain</p>
                  </div>
                  <p>Node-based terrain generation promised rapid iteration, but after importing into UE5, material assignments, lighting, and resolution proved inconsistent. Post-import cleanup offset the procedural advantages.</p>
                </div>

                <div className="bg-bg-card rounded-small p-[var(--item-gap)] border border-border">
                  <div className="flex items-center gap-[8px] mb-[4px]">
                    <div className="w-[8px] h-[8px] rounded-full flex-shrink-0" style={{ backgroundColor: '#38C72E' }} />
                    <p className="font-semibold text-accent-gold">The Solution: UE5 Native Landscape Mode</p>
                  </div>
                  <p>I switched exclusively to UE5's native Landscape Mode. Using the Engraving Tool and Smoothing Brush, I hand-sculpted the plateau topography, regaining direct control over terrain shape and lighting response.</p>
                </div>

                <div className="bg-bg-card rounded-small p-[var(--item-gap)] border border-border">
                  <p>This technical pivot allowed me to perfectly match Wendat settlement patterns. Historically, the Huron-Wendat people built their villages on elevated ground to enhance defenses against potential threats. The resulting environment reflects this exact survival logic.</p>
                </div>
              </div>
            </div>

            {/* 右侧：图片列（跟随高度，上下两个占位符均分） */}
            <div className="flex-1 flex flex-col gap-[var(--item-gap)]">
              {/* 上半部分占位符 - Gaea Trial */}
              <div className="flex-1 relative rounded-card overflow-hidden bg-bg-card flex items-center justify-center">
                <img
                  src="/images/teyata/08_gaea_procedural_trial.png"
                  alt="Gaea procedural terrain trial"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <ImageLabel>GAEA TRIAL — ABANDONED</ImageLabel>
              </div>

              {/* 下半部分占位符 - UE5 Landscape */}
              <div className="flex-1 relative rounded-card overflow-hidden bg-bg-card flex items-center justify-center">
                <img
                  src="/images/teyata/03_landscape_sculpt.png"
                  alt="UE5 Landscape sculpting final"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <ImageLabel>UE5 LANDSCAPE — FINAL</ImageLabel>
              </div>
            </div>
          </div>

          {/* B · Dynamic Waterways — 右侧文字主导高度，左侧图片跟随 */}
          <div className="flex flex-col md:flex-row-reverse gap-[var(--card-gap)]">
            {/* 右侧（桌面）：文字列（主导高度） */}
            <div className="flex-1 flex flex-col gap-[var(--content-gap)]">
              <CardHeader letter="B" label="DYNAMIC WATERWAYS" />

              <h3 className="font-heading text-card font-bold text-text-primary">
                Solving Integration Challenges
              </h3>

              <div className="flex flex-col gap-[var(--item-gap)] font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                <div className="bg-bg-card rounded-small p-[var(--item-gap)] border border-border">
                  <div className="flex items-center gap-[8px] mb-[4px]">
                    <div className="w-[8px] h-[8px] rounded-full flex-shrink-0" style={{ backgroundColor: '#EF4444' }} />
                    <p className="font-semibold text-text-primary">The Problem: Rivers Don't Conform to Terrain</p>
                  </div>
                  <p>UE5's River plugin requires manual spline placement. Rivers don't automatically conform to terrain elevation — each bend, each bank, each elevation change needed individual spline point adjustment. For a winding forest river, this meant dozens of manual corrections.</p>
                </div>

                <div className="bg-bg-card rounded-small p-[var(--item-gap)] border border-border">
                  <div className="flex items-center gap-[8px] mb-[4px]">
                    <div className="w-[8px] h-[8px] rounded-full flex-shrink-0" style={{ backgroundColor: '#38C72E' }} />
                    <p className="font-semibold text-accent-gold">Solution: Reverse the Problem</p>
                  </div>
                  <p>Instead of adjusting the river to fit the terrain, I <strong>adjusted the terrain to fit the river</strong>. I laid out the river network first (optimizing for natural meanders and gameplay flow), then sculpted each riverbend's banks to accommodate the water. This approach proved faster, maintained natural-looking curves, and gave me better control over riverbank composition (wet vs. dry zones for moss placement).</p>
                </div>

                <p className="text-caption text-text-tertiary italic">
                  Additional customization: Color gradient from light blue to deep green to match forest ambiance; flow speed tuned for audio landmarks.
                </p>
              </div>

              {/* 四步 Workflow — 时间线卡片模块 */}
              <div className="bg-bg-card rounded-small p-[var(--item-gap)] border border-border flex flex-col gap-[var(--content-gap)] font-body text-body text-text-secondary mt-[var(--tight-gap)]">
                <h4 className="font-body text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">Workflow</h4>
                <div className="flex flex-col">
                  <div className="flex gap-[12px]">
                    <div className="flex flex-col items-center flex-shrink-0 w-[24px]">
                      <span className="font-body font-semibold text-body text-accent-gold leading-none">01</span>
                      <div className="w-px flex-1 bg-border mt-[6px]" />
                    </div>
                    <div className="flex-1 pb-[20px]">
                      <p className="font-semibold text-text-primary">Layout River Splines</p>
                      <p className="text-caption text-text-tertiary">Plan river network for gameplay flow + natural meanders</p>
                    </div>
                  </div>
                  <div className="flex gap-[12px]">
                    <div className="flex flex-col items-center flex-shrink-0 w-[24px]">
                      <span className="font-body font-semibold text-body text-accent-gold leading-none">02</span>
                      <div className="w-px flex-1 bg-border mt-[6px]" />
                    </div>
                    <div className="flex-1 pb-[20px]">
                      <p className="font-semibold text-text-primary">Sculpt Terrain to Match</p>
                      <p className="text-caption text-text-tertiary">Adjust banks, elevation, and width at each riverbend</p>
                    </div>
                  </div>
                  <div className="flex gap-[12px]">
                    <div className="flex flex-col items-center flex-shrink-0 w-[24px]">
                      <span className="font-body font-semibold text-body text-accent-gold leading-none">03</span>
                      <div className="w-px flex-1 bg-border mt-[6px]" />
                    </div>
                    <div className="flex-1 pb-[20px]">
                      <p className="font-semibold text-text-primary">Customize Water Parameters</p>
                      <p className="text-caption text-text-tertiary">Color, speed, curvature for forest ambiance</p>
                    </div>
                  </div>
                  <div className="flex gap-[12px]">
                    <div className="flex flex-col items-center flex-shrink-0 w-[24px]">
                      <span className="font-body font-semibold text-body text-accent-gold leading-none">04</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-text-primary">Detail Pass</p>
                      <p className="text-caption text-text-tertiary">Moss rocks on wet banks, vegetation density gradient</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 左侧（桌面）：图片列（跟随高度，上下两个占位符） */}
            <div className="flex-1 flex flex-col gap-[var(--item-gap)]">
              {/* 上半部分占位符 - Waterfall */}
              <div className="flex-1 relative rounded-card overflow-hidden bg-bg-card flex items-center justify-center">
                <img
                  src="/images/teyata/05_waterfall.png"
                  alt="Dynamic waterfall system"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <ImageLabel>WATERFALL</ImageLabel>
              </div>

              {/* 下半部分 - River conforms to sculpted terrain */}
              <div className="flex-1 relative rounded-card overflow-hidden bg-bg-card flex items-center justify-center">
                <img
                  src="/images/teyata/06_river_canyon.webp"
                  alt="River winding through sculpted canyon terrain"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <ImageLabel>CUSTOM RIVER · CONFORMED TO SCULPTED TERRAIN</ImageLabel>
              </div>
            </div>
          </div>

          {/* C · Vegetation Ecosystem — 左侧文字主导高度，右侧图片跟随 */}
          <div className="flex flex-col md:flex-row gap-[var(--card-gap)]">
            {/* 左侧：文字列（主导高度） */}
            <div className="flex-1 flex flex-col gap-[var(--content-gap)]">
              <CardHeader letter="C" label="VEGETATION ECOSYSTEM" />

              <h3 className="font-heading text-card font-bold text-text-primary">
                Balancing Scale and Detail
              </h3>

              <div className="flex flex-col gap-[var(--item-gap)] font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                <div className="bg-bg-card rounded-small p-[var(--item-gap)] border border-border">
                  <p className="font-semibold text-text-primary mb-[4px]">Strategy 1: Procedural Scattering</p>
                  <p>Used UE5 Foliage Mode to scatter marketplace tree and brush assets across the terrain. Set Density to 150, enabled Align to Surface Normal for natural ground contact, and masked placement by terrain material zones (forest vs. plateau vs. riverbank).</p>
                </div>

                <div className="bg-bg-card rounded-small p-[var(--item-gap)] border border-border">
                  <p className="font-semibold text-text-primary mb-[4px]">Strategy 2: Manual Dressing</p>
                  <p>In key gameplay areas (settlement evaluation zones), I manually adjusted scale, rotation, and density of marketplace assets to guide player sightlines. Taller trees frame distant vistas; lower brush clusters create shelter cues. This layering makes the procedural base feel intentional rather than algorithmic.</p>
                </div>
              </div>
            </div>

            {/* 右侧：图片列（跟随高度，单个占位符） */}
            <div className="flex-1 relative rounded-card overflow-hidden bg-bg-card flex items-center justify-center">
              <img
                src="/images/teyata/07_foliage_scatter.png"
                alt="Vegetation ecosystem placement"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <ImageLabel position="top-right">FOLIAGE MODE · PROCEDURAL + MANUAL PLACEMENT</ImageLabel>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default EnvironmentWork
