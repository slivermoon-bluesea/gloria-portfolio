import SectionHeader from '../components/case-study/SectionHeader'
import CardHeader from '../components/case-study/CardHeader'
import Figure from '../components/case-study/Figure'

function DesignSystemDemo() {
  return (
    <main className="min-h-screen bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Page Title */}
        <h1 className="font-heading text-hero font-bold text-text-primary mb-[48px]">
          Design System Demo
        </h1>

        {/* Color Palette */}
        <section className="mb-[var(--section-gap)]">
          <h2 className="font-heading text-card font-bold text-text-primary mb-[24px]">
            Color Tokens
          </h2>
          <div className="grid grid-cols-4 gap-[var(--card-gap)]">
            <div>
              <div className="h-[100px] rounded-small bg-bg-primary border border-border" />
              <p className="font-body text-caption text-text-secondary mt-2">bg-primary<br/>#121212</p>
            </div>
            <div>
              <div className="h-[100px] rounded-small bg-bg-card" />
              <p className="font-body text-caption text-text-secondary mt-2">bg-card<br/>#1a1a1a</p>
            </div>
            <div>
              <div className="h-[100px] rounded-small bg-accent-gold" />
              <p className="font-body text-caption text-text-secondary mt-2">accent-gold<br/>#C9A227</p>
            </div>
            <div>
              <div className="h-[100px] rounded-small bg-text-primary" />
              <p className="font-body text-caption text-text-secondary mt-2">text-primary<br/>#F2EFE9</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-[var(--section-gap)]">
          <h2 className="font-heading text-card font-bold text-text-primary mb-[24px]">
            Typography
          </h2>
          <div className="flex flex-col gap-[var(--item-gap)] bg-bg-card rounded-card p-[32px]">
            <p className="font-heading text-hero font-bold text-text-primary">
              Hero Title - Playfair Display 56px Bold
            </p>
            <p className="font-heading text-section font-bold text-text-primary">
              Section Title - Playfair Display 40px Bold
            </p>
            <p className="font-heading text-card font-bold text-text-primary">
              Card Title - Playfair Display 32px Bold
            </p>
            <p className="font-body text-subtitle text-text-secondary">
              Subtitle - Inter 18px Normal
            </p>
            <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
              Body text - Inter 13px Normal. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Shafts of volumetric light cut through broken lattice windows and hang in the dust.
            </p>
            <p className="font-body text-caption uppercase tracking-[var(--letter-spacing-wide)] text-text-tertiary">
              Caption - Inter 11px Uppercase
            </p>
          </div>
        </section>

        {/* Component: SectionHeader */}
        <section className="mb-[var(--section-gap)]">
          <h2 className="font-heading text-card font-bold text-text-primary mb-[24px]">
            Component: SectionHeader
          </h2>
          <div className="bg-bg-card rounded-card p-[32px]">
            <SectionHeader
              number="01"
              eyebrow="PROJECT OVERVIEW"
              title="Section Header Component"
            />
          </div>
        </section>

        {/* Component: CardHeader */}
        <section className="mb-[var(--section-gap)]">
          <h2 className="font-heading text-card font-bold text-text-primary mb-[24px]">
            Component: CardHeader
          </h2>
          <div className="bg-bg-card rounded-card p-[32px]">
            <CardHeader
              letter="A"
              label="CONCEPT & NARRATIVE"
            />
          </div>
        </section>

        {/* Component: Figure */}
        <section className="mb-[var(--section-gap)]">
          <h2 className="font-heading text-card font-bold text-text-primary mb-[24px]">
            Component: Figure
          </h2>
          <div className="flex flex-col gap-[var(--card-gap)]">
            {/* Standard figure with caption */}
            <Figure
              src="https://placehold.co/1440x617/222/666?text=Standard+Figure"
              alt="Demo image"
              mainCaption="SHOT_01"
              subCaption="Main hero view showing volumetric lighting / 21:9 aspect ratio"
            />
            {/* Figure with overlay label */}
            <Figure
              src="https://placehold.co/1440x617/222/666?text=With+Overlay"
              alt="Demo image with overlay"
              overlayLabel="FINAL"
              mainCaption="SHOT_02"
              subCaption="Final composite with all lighting passes / Color graded"
            />
          </div>
        </section>

      </div>
    </main>
  )
}

export default DesignSystemDemo
