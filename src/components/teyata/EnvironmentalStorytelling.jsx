import SectionHeader from '../echoes-of-jiangnan/SectionHeader'
import CardHeader from '../echoes-of-jiangnan/CardHeader'
import ImageLabel from '../echoes-of-jiangnan/ImageLabel'

function EnvironmentalStorytelling() {
  return (
    <section className="w-full bg-bg-primary flex justify-center py-[var(--container-padding-y)]">
      <div className="w-full max-w-[var(--container-max-width)] px-[var(--container-padding-x)]">
        <div className="flex flex-col gap-[var(--section-gap)]">

          {/* Section Header */}
          <SectionHeader
            number="03"
            eyebrow="DESIGN IMPACT"
            title="Environmental Storytelling"
          />

          {/* 左图右文 */}
          <div className="flex flex-col md:flex-row gap-[var(--card-gap)]">
            {/* 左侧：图（与右卡等高） */}
            <div className="flex-1 relative rounded-card overflow-hidden min-h-[320px]">
              <img
                src="/images/teyata/09_plateau_vista.webp"
                alt="Elevated plateau with river and forest — settlement evaluation site"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <ImageLabel position="top-right">CHAPTER 3 · SETTLEMENT SITE EVALUATION</ImageLabel>
            </div>

            {/* 右侧：文字 */}
            <div className="flex-1 bg-bg-card rounded-card border border-border p-[32px] flex flex-col gap-[var(--content-gap)]">
              <CardHeader letter="A" label="GAMEPLAY INTEGRATION" />

              <h3 className="font-heading text-card font-bold text-text-primary">
                The Environment <em>is</em> the Teacher
              </h3>

              <div className="flex flex-col gap-[var(--item-gap)] font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                <p>
                  The map directly serves Chapter 3's core mechanic: settlement site evaluation. I designed three candidate locations, but only one satisfies all survival criteria:
                </p>

                {/* 四个绿点标准 */}
                <div className="grid grid-cols-2 gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[8px] h-[8px] rounded-full flex-shrink-0" style={{ backgroundColor: '#38C72E' }} />
                    <span className="font-body text-body text-text-secondary">Forest Proximity</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[8px] h-[8px] rounded-full flex-shrink-0" style={{ backgroundColor: '#38C72E' }} />
                    <span className="font-body text-body text-text-secondary">Water Access</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[8px] h-[8px] rounded-full flex-shrink-0" style={{ backgroundColor: '#38C72E' }} />
                    <span className="font-body text-body text-text-secondary">Defensible Elevation</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[8px] h-[8px] rounded-full flex-shrink-0" style={{ backgroundColor: '#38C72E' }} />
                    <span className="font-body text-body text-text-secondary">Tillable Land</span>
                  </div>
                </div>

                <p>
                  To make this judgment environmental rather than UI-driven, I <strong>deliberately omitted the river from the southwest corner</strong>. Players must walk the terrain, observe resource distribution, and use landscape literacy to make the correct choice.
                </p>

                <p className="text-accent-gold font-semibold">
                  The environment becomes the primary teaching tool — not dialogue, not UI hints.
                </p>
              </div>
            </div>
          </div>

          {/* TODO: 替换为带三个标注点的 top-down 地图 */}
          {/* <div className="relative rounded-card overflow-hidden">
            <img
              src="/images/teyata/TODO_topdown_map_with_annotations.png"
              alt="Top-down map showing three candidate settlement sites"
              className="w-full object-cover"
              loading="lazy"
            />
            <ImageLabel tone="gold">TOP-DOWN MAP · THREE CANDIDATE SITES + EVALUATION CRITERIA</ImageLabel>
          </div> */}

        </div>
      </div>
    </section>
  )
}

export default EnvironmentalStorytelling
