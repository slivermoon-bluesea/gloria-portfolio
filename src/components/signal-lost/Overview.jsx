import SectionHeader from '../echoes-of-jiangnan/SectionHeader'
import CardHeader from '../echoes-of-jiangnan/CardHeader'
import Placeholder from '../echoes-of-jiangnan/Placeholder'

function Overview() {
  return (
    <section className="w-full bg-bg-primary flex justify-center py-[var(--container-padding-y)]">
      <div className="w-full max-w-[var(--container-max-width)] px-[var(--container-padding-x)]">
        <div className="flex flex-col gap-[var(--section-gap)]">

          {/* Section Header */}
          <SectionHeader
            number="01"
            eyebrow="PROJECT OVERVIEW"
            title="Project Overview"
          />

          {/* Row 1: Concept + Details */}
          <div className="flex gap-[var(--card-gap)]">
            {/* Card A: Concept & Narrative */}
            <div className="flex-1 bg-bg-card rounded-card p-[32px] flex flex-col gap-[var(--content-gap)]">
              <CardHeader letter="A" label="CONCEPT & NARRATIVE" />

              <h3 className="font-heading text-card font-bold text-text-primary">
                Concept & Narrative
              </h3>

              <div className="flex flex-col gap-[var(--item-gap)] font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                {/* TODO: Concept paragraphs */}
                <p>TODO: First paragraph</p>
                <p>TODO: Second paragraph</p>
                <p>TODO: Third paragraph</p>
              </div>
            </div>

            {/* Card B: Project Details */}
            <div className="bg-bg-card rounded-card p-[32px] flex flex-col gap-[var(--card-gap)]" style={{ width: '416px' }}>
              <CardHeader letter="B" label="ROLE & SPECS" />

              <h3 className="font-heading text-card font-bold text-text-primary">
                Project Details
              </h3>

              <div className="flex flex-col gap-[var(--content-gap)] font-body text-body">
                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">ROLE</div>
                  <div className="text-text-primary">{/* TODO */}Environment Artist</div>
                </div>

                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">DEVELOPMENT TIME</div>
                  <div className="text-text-primary">{/* TODO */}8 weeks</div>
                </div>

                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">ENGINE</div>
                  <div className="text-text-primary">{/* TODO */}UE5 · Lumen · Nanite</div>
                </div>

                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">SCENE BUDGET</div>
                  <div className="text-text-primary">{/* TODO */}3M tris · 60 assets</div>
                </div>

                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">OUTPUT</div>
                  <div className="text-text-primary">{/* TODO */}3840×1620 (21:9)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Tools + Image */}
          <div className="flex gap-[var(--card-gap)]">
            {/* Card C: Tools of Craft */}
            <div className="flex-1 bg-bg-card rounded-card p-[32px] flex flex-col gap-[var(--card-gap)]">
              <CardHeader letter="C" label="SOFTWARE STACK" />

              <h3 className="font-heading text-card font-bold text-text-primary">
                Tools of Craft
              </h3>

              <div className="grid grid-cols-2 gap-[var(--item-gap)]">
                {/* TODO: Tool cards */}
                <div className="flex items-center gap-[var(--item-gap)] bg-bg-card-darker rounded-small p-[var(--item-gap)] border border-border">
                  <div className="w-[56px] h-[56px] rounded-[10px] flex items-center justify-center font-semibold border border-border-heavy bg-bg-card-darker text-text-tertiary text-[12px]">
                    TOOL
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[14px] text-text-primary">Tool Name</div>
                    <div className="text-caption text-text-tertiary">Description</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className="relative rounded-card overflow-hidden flex-1">
              <Placeholder ratio="636/363" label="OVERVIEW SCENE 636×363" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
