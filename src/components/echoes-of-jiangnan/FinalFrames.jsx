import SectionHeader from './SectionHeader'
import Figure from './Figure'

function FinalFrames() {
  return (
    <section className="w-full bg-bg-primary flex justify-center py-[var(--container-padding-y)]">
      <div className="w-full max-w-[var(--container-max-width)] px-[var(--container-padding-x)]">
        <div className="flex flex-col gap-[var(--section-gap)]">

          {/* Section Header */}
          <SectionHeader
            number="02"
            eyebrow="CINEMATIC GALLERY"
            title="Final Frames"
          />

          {/* Main hero shot - Full width */}
          <Figure
            src="/images/cl-interior/final-frame-01.png"
            alt="Main cinematic shot"
            overlayLabel="SCENE WIDE-SHOT · MOON DOOR VIEW"
            mainCaption="Hero Shot — the moon gate frames the landscape screen while a warm key light rakes across the tea table."
            subCaption="Establishes the space and the dreamcore-meets-decay mood in a single read."
            aspectRatio="21/9"
          />

          {/* Two images side by side */}
          <div className="grid grid-cols-2 gap-[var(--card-gap)]">
            <Figure
              src="/images/cl-interior/final-frame-02.png"
              alt="Low-angle shot"
              overlayLabel="LOW-ANGLE SHOT · PATTERNED RUG"
              mainCaption="Low-angle composition with god-rays and drifting dust over the patterned rug."
              subCaption="Pushes atmosphere and depth through volumetric light."
              aspectRatio="16/9"
            />
            <Figure
              src="/images/cl-interior/final-frame-03.png"
              alt="Elevated shot"
              overlayLabel="ELEVATED SHOT · WATER-TOWN VIEW"
              mainCaption="Elevated view revealing the Jiangnan water-town exterior beyond the ivy-covered window."
              subCaption="Extends the world beyond the room and grounds the location."
              aspectRatio="16/9"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default FinalFrames
