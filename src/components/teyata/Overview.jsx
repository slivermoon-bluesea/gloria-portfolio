import SectionHeader from '../echoes-of-jiangnan/SectionHeader'
import CardHeader from '../echoes-of-jiangnan/CardHeader'

function Overview() {
  return (
    <section className="w-full bg-bg-primary flex justify-center py-[var(--container-padding-y)]">
      <div className="w-full max-w-[var(--container-max-width)] px-[var(--container-padding-x)]">
        <div className="flex flex-col gap-[var(--section-gap)]">

          {/* Section Header */}
          <SectionHeader
            number="01"
            eyebrow="PROJECT OVERVIEW"
            title="Environment Design from Historical Research"
          />

          {/* Row 1: Challenge + My Role */}
          <div className="flex gap-[var(--card-gap)]">
            {/* Card A: The Challenge - No Concept Art */}
            <div className="flex-[7] bg-bg-card rounded-card border border-border p-[32px] flex flex-col gap-[var(--content-gap)]">
              <CardHeader letter="A" label="THE CONSTRAINT" />

              <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                Developed as a Major Research Project (MRP) at Toronto Metropolitan University, Teyata bridges history and interactive gameplay. The game immerses players in a historically accurate 16th-century Huron-Wendat settlement, focusing on cultural preservation through environmental storytelling and player exploration.
              </p>

              <h3 className="font-heading text-card font-bold text-text-primary">
                Evidence-Based Environment Design
              </h3>

              <div className="flex flex-col gap-[var(--item-gap)] font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                <p>
                  Teyata is a narrative RPG where historical accuracy drives the environmental layout. I translated academic research directly into playable 3D space, bypassing traditional concept art to author environments straight from historical data.
                </p>
                <p>
                  Wendat settlement patterns documented by Trigger (1990) and Heidenreich (1978) became my technical specifications. I converted these texts into UE5 landscape parameters—sculpting elevated plateaus for defense, routing dynamic river systems for agriculture, and distributing tillable soil—embedding the cultural logic directly into the terrain.
                </p>
                <p className="text-accent-gold font-semibold">
                  Approach → Execution: The environment itself serves as an interactive historical document.
                </p>
              </div>
            </div>

            {/* Card B: My Role */}
            <div className="flex-[3] bg-bg-card rounded-card border border-border p-[32px] flex flex-col gap-[var(--card-gap)]">
              <CardHeader letter="B" label="ROLE & SPECS" />

              <h3 className="font-heading text-card font-bold text-text-primary">
                Project Details
              </h3>

              <div className="flex flex-col gap-[var(--content-gap)] font-body text-body">
                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">ROLE</div>
                  <div className="text-text-primary">Sole Environment Artist</div>
                </div>

                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">TIMELINE</div>
                  <div className="text-text-primary">Nov 2024 – Jan 2025</div>
                </div>

                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">ENGINE</div>
                  <div className="text-text-primary">Unreal Engine 5 · Landscape Sculpting · Water Extras</div>
                </div>

                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">EXHIBITION</div>
                  <div className="text-text-primary">TMU Industry Day (Public playtest)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Team Attribution */}
          <div className="bg-bg-card rounded-card border border-border p-[32px] flex flex-col gap-[var(--card-gap)]">
            <CardHeader letter="C" label="TEAM & ATTRIBUTION" />

            <h3 className="font-heading text-card font-bold text-text-primary">
              Collaboration & Honest Attribution
            </h3>

            <div className="grid grid-cols-3 gap-[var(--card-gap)]">
              <div className="flex flex-col gap-[var(--tight-gap)]">
                <div className="font-body text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
                  Hao Tang
                </div>
                <div className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                  Environment Art & Level Design — Terrain sculpting, dynamic water systems (rivers + waterfalls), and vegetation ecosystem placement.
                </div>
              </div>
              <div className="flex flex-col gap-[var(--tight-gap)]">
                <div className="font-body text-caption uppercase tracking-[var(--letter-spacing-wide)] text-text-tertiary">
                  Fangze Zhou
                </div>
                <div className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                  Programming — Character control, inventory system, animal AI, dialogue tree
                </div>
              </div>
              <div className="flex flex-col gap-[var(--tight-gap)]">
                <div className="font-body text-caption uppercase tracking-[var(--letter-spacing-wide)] text-text-tertiary">
                  Mingao Sun
                </div>
                <div className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                  UI & Visual Design — User interface, logo, poster
                </div>
              </div>
            </div>

            <div className="mt-[var(--tight-gap)] pt-[var(--item-gap)] border-t border-border-light">
              <p className="font-body text-caption text-text-tertiary leading-[var(--line-height-normal)]">
                <span className="text-accent-gold">Attribution:</span> Scene assembly focused on terrain authoring, water systems, and vegetation layout strategy to serve gameplay narrative. Tree models sourced from Unreal Marketplace forest asset packs; placement, composition, and density distribution were custom-authored.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
