import SectionHeader from '../echoes-of-jiangnan/SectionHeader'
import Figure from '../echoes-of-jiangnan/Figure'
import Placeholder from '../echoes-of-jiangnan/Placeholder'

function Gallery() {
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
          <figure className="flex flex-col gap-[var(--text-gap)]">
            <div className="relative w-full rounded-card overflow-hidden bg-bg-card-darker" style={{ aspectRatio: '21/9' }}>
              <Placeholder ratio="21/9" label="FINAL FRAME 01 3840×1620" className="rounded-none" />
            </div>
            <figcaption className="flex flex-col gap-[4px]">
              <span className="font-medium font-body text-body text-white">
                {/* TODO: Main caption */}
                Hero Shot — TODO description
              </span>
              <span className="font-normal font-body text-body text-text-secondary">
                {/* TODO: Sub caption */}
                TODO sub-caption
              </span>
            </figcaption>
          </figure>

          {/* Two images side by side */}
          <div className="grid grid-cols-2 gap-[var(--card-gap)]">
            <figure className="flex flex-col gap-[var(--text-gap)]">
              <div className="relative w-full rounded-card overflow-hidden bg-bg-card-darker" style={{ aspectRatio: '16/9' }}>
                <Placeholder ratio="16/9" label="FINAL FRAME 02" className="rounded-none" />
              </div>
              <figcaption className="flex flex-col gap-[4px]">
                <span className="font-medium font-body text-body text-white">
                  {/* TODO: Main caption */}
                  Frame 02 — TODO
                </span>
                <span className="font-normal font-body text-body text-text-secondary">
                  {/* TODO: Sub caption */}
                  TODO
                </span>
              </figcaption>
            </figure>

            <figure className="flex flex-col gap-[var(--text-gap)]">
              <div className="relative w-full rounded-card overflow-hidden bg-bg-card-darker" style={{ aspectRatio: '16/9' }}>
                <Placeholder ratio="16/9" label="FINAL FRAME 03" className="rounded-none" />
              </div>
              <figcaption className="flex flex-col gap-[4px]">
                <span className="font-medium font-body text-body text-white">
                  {/* TODO: Main caption */}
                  Frame 03 — TODO
                </span>
                <span className="font-normal font-body text-body text-text-secondary">
                  {/* TODO: Sub caption */}
                  TODO
                </span>
              </figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Gallery
