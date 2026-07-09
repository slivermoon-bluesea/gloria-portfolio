import SectionHeader from '../echoes-of-jiangnan/SectionHeader'
import CardHeader from '../echoes-of-jiangnan/CardHeader'

function Reflection() {
  return (
    <section className="w-full bg-bg-primary flex justify-center py-[var(--container-padding-y)]">
      <div className="w-full max-w-[var(--container-max-width)] px-[var(--container-padding-x)]">
        <div className="flex flex-col gap-[var(--section-gap)]">

          {/* Section Header */}
          <SectionHeader
            number="04"
            eyebrow="REFLECTION"
            title="Constraints & Growth"
          />

          <div className="flex gap-[var(--card-gap)]">
            {/* Left: Constraints */}
            <div className="flex-1 bg-bg-card rounded-card border border-border p-[32px] flex flex-col gap-[var(--content-gap)]">
              <CardHeader letter="A" label="PROJECT CONSTRAINTS" />

              <h3 className="font-heading text-card font-bold text-text-primary">
                Documentation vs. Portfolio Quality
              </h3>

              <div className="flex flex-col gap-[var(--item-gap)] font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                <p>
                  This was a thesis project with academic documentation constraints. The screenshots here were captured at documentation resolution (600–1900px) rather than portfolio presentation quality (3840px+).
                </p>
                <p>
                  The images successfully demonstrate the design-from-research methodology and environment-driven gameplay — the <em>process</em> and <em>problem-solving</em> are visible. They don't, however, showcase the visual fidelity I target in personal work.
                </p>
              </div>
            </div>

            {/* Right: Growth Path */}
            <div className="flex-1 bg-bg-card rounded-card border border-border p-[32px] flex flex-col gap-[var(--content-gap)]">
              <CardHeader letter="B" label="IF I REVISITED THIS" />

              <h3 className="font-heading text-card font-bold text-text-primary">
                What I'd Do Differently
              </h3>

              <div className="flex flex-col gap-[12px] font-body text-body text-text-secondary">
                <div className="flex gap-[12px] items-start">
                  <span className="font-body font-semibold text-body text-accent-gold flex-shrink-0 w-[24px]">01</span>
                  <div className="flex-1">
                    <p className="font-semibold text-text-primary">Nanite High-Poly Vegetation</p>
                    <p className="text-caption text-text-tertiary leading-[var(--line-height-normal)]">Rebuild the vegetation layer with Nanite-enabled geometry for cinematic close-ups and density.</p>
                  </div>
                </div>

                <div className="flex gap-[12px] items-start">
                  <span className="font-body font-semibold text-body text-accent-gold flex-shrink-0 w-[24px]">02</span>
                  <div className="flex-1">
                    <p className="font-semibold text-text-primary">Lumen Global Illumination</p>
                    <p className="text-caption text-text-tertiary leading-[var(--line-height-normal)]">Re-light the forest with Lumen to match the cinematic quality I established in Echoes of Jiangnan.</p>
                  </div>
                </div>

                <div className="flex gap-[12px] items-start">
                  <span className="font-body font-semibold text-body text-accent-gold flex-shrink-0 w-[24px]">03</span>
                  <div className="flex-1">
                    <p className="font-semibold text-text-primary">Author Custom Vegetation Assets</p>
                    <p className="text-caption text-text-tertiary leading-[var(--line-height-normal)]">Create 2-3 hero tree/shrub assets (Maya/ZBrush → bake → Substance Painter) to prove full organic pipeline.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA - 整卡可点击，Resume 项目卡样式 */}
          <a
            href="/case-studies/echoes-of-jiangnan"
            className="block bg-bg-card rounded-card border border-border p-[32px] hover:border-border-heavy transition-colors"
          >
            <div className="flex items-start justify-between gap-[var(--item-gap)]">
              <div className="flex-1 flex flex-col gap-[var(--item-gap)]">
                <h3 className="font-heading text-subtitle font-bold text-text-primary">
                  See My Full Environment Pipeline
                </h3>
                <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                  For a complete asset-creation pipeline (highpoly modeling → baking → texturing → cinematic lighting), explore my <strong>Echoes of Jiangnan</strong> case study — specifically the <strong>Scholar Table breakdown</strong> (9-UDIM hero prop + custom weathering material).
                </p>
              </div>
              <span className="font-heading text-subtitle text-accent-gold flex-shrink-0">→</span>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}

export default Reflection
