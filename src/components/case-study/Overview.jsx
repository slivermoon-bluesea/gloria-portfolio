import SectionHeader from './SectionHeader'
import CardHeader from './CardHeader'

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
                <p>
                  Behind a moon gate, a Jiangnan tea room has been left to time. Shafts of volumetric light cut through broken lattice windows and hang in the dust; ivy has climbed in from outside, spilling across the lacquered table and the patterned floor where the sun rakes long window-shadows. A painted landscape screen still frames a water town no one visits anymore. The space sits between two moods — the softness of a half-remembered dream and the quiet violence of decay.
                </p>
                <p>
                  The lighting and decay language references Naughty Dog's The Last of Us Part I — its abandoned interiors, where a single shaft of daylight carries the emotion and nature reclaims the architecture instead of props being staged to signal "ruin." I carried that principle into the material logic: every surface ages on its own rule — moisture pooling low, dust gathering on horizontal faces, varnish yellowing where light once fell hardest — so the room reads as decades abandoned rather than merely dirty.
                </p>
                <p>
                  A single warm key rakes through the broken lattice, then Lumen carries it around the room in soft bounce — enough fill to read the space without ever lifting the crushed blacks. Warm daylight plays against the cool depth of the interior, and volumetric fog gives the shafts their body. The passes below build the frame one contribution at a time: key, bounce, volumetrics, final.
                </p>
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
                  <div className="text-text-primary">Environment Artist</div>
                </div>

                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">DEVELOPMENT TIME</div>
                  <div className="text-text-primary">6 weeks</div>
                </div>

                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">ENGINE</div>
                  <div className="text-text-primary">UE5 · Lumen (real-time) · Nanite</div>
                </div>

                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">SCENE BUDGET</div>
                  <div className="text-text-primary">2.5M tris · 40 assets · hero 4K / mid 2K</div>
                </div>

                <div className="flex flex-col gap-[var(--tight-gap)]">
                  <div className="uppercase font-medium tracking-[var(--letter-spacing-normal)] text-text-tertiary">OUTPUT</div>
                  <div className="text-text-primary">3840×1620 (21:9) Lumen real-time captures</div>
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
                {/* Maya */}
                <div className="flex items-center gap-[var(--item-gap)] bg-bg-card-darker rounded-small p-[var(--item-gap)] border border-border">
                  <div className="w-[56px] h-[56px] rounded-[10px] flex items-center justify-center font-semibold border" style={{ backgroundColor: '#1a4d4d', color: '#2EC7B2', borderColor: '#2EC7B2', fontSize: '12px' }}>
                    MAYA
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[14px] text-text-primary">Autodesk Maya</div>
                    <div className="text-caption text-text-tertiary">3D Modeling & UVs</div>
                  </div>
                </div>

                {/* UE5 */}
                <div className="flex items-center gap-[var(--item-gap)] bg-bg-card-darker rounded-small p-[var(--item-gap)] border border-border">
                  <div className="w-[56px] h-[56px] rounded-[10px] flex items-center justify-center font-semibold border border-border-heavy" style={{ backgroundColor: '#2a2a2a', color: '#7A776F', fontSize: '12px' }}>
                    UE5
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[14px] text-text-primary">Unreal Engine 5</div>
                    <div className="text-caption text-text-tertiary">Rendering & Lighting</div>
                  </div>
                </div>

                {/* Mari */}
                <div className="flex items-center gap-[var(--item-gap)] bg-bg-card-darker rounded-small p-[var(--item-gap)] border border-border">
                  <div className="w-[56px] h-[56px] rounded-[10px] flex items-center justify-center font-semibold border" style={{ backgroundColor: '#3d2817', color: '#EB7340', borderColor: '#EB7340', fontSize: '12px' }}>
                    MARI
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[14px] text-text-primary">Mari</div>
                    <div className="text-caption text-text-tertiary">UDIM Texture Painting</div>
                  </div>
                </div>

                {/* Substance Painter */}
                <div className="flex items-center gap-[var(--item-gap)] bg-bg-card-darker rounded-small p-[var(--item-gap)] border border-border">
                  <div className="w-[56px] h-[56px] rounded-[10px] flex items-center justify-center font-semibold border" style={{ backgroundColor: '#4a3f1a', color: '#D9AD33', borderColor: '#D9AD33', fontSize: '12px' }}>
                    SP
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[14px] text-text-primary">Substance Painter</div>
                    <div className="text-caption text-text-tertiary">PBR Material Authoring</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className="relative rounded-card overflow-hidden flex-1">
              <img
                src="/images/cl-interior/overview-scene.webp"
                alt="Scene preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/636x363/1a1a1a/666?text=Scene+Preview'
                }}
              />
              {/* Overlay label */}
              <div className="absolute bottom-[16px] right-[16px] font-body font-medium uppercase text-caption tracking-[var(--letter-spacing-wide)] text-text-primary">
                SCENE WIDE-SHOT · MOON DOOR VIEW
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
