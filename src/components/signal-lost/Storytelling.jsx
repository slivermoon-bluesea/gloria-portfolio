import SectionHeader from '../echoes-of-jiangnan/SectionHeader'
import Placeholder from '../echoes-of-jiangnan/Placeholder'

function Storytelling() {
  const narrativeProps = [
    { id: 1, title: 'Signal Lost Screen', description: 'TODO: Description' },
    { id: 2, title: 'Star Chart', description: 'TODO: Description' },
    { id: 3, title: 'Synthesizer Wall', description: 'TODO: Description' },
    { id: 4, title: 'Personal Items', description: 'TODO: Description' }
  ]

  return (
    <section className="w-full bg-bg-primary py-[var(--container-padding-y)]">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

        {/* Section Header */}
        <div className="mb-[var(--section-gap)]">
          <SectionHeader
            number="03"
            eyebrow="TECHNICAL BREAKDOWN"
            title="Environment Storytelling"
          />
        </div>

        {/* Introduction */}
        <div className="mb-[var(--card-gap)]">
          <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
            {/* TODO: Introduction paragraph */}
            TODO: Opening paragraph explaining how environmental storytelling conveys narrative through prop placement and composition.
          </p>
        </div>

        {/* Narrative Props Grid */}
        <div className="grid grid-cols-2 gap-[var(--card-gap)]">
          {narrativeProps.map((prop) => (
            <div key={prop.id} className="bg-bg-card rounded-card overflow-hidden">
              <Placeholder ratio="16/9" label={`PROP ${prop.id}`} className="rounded-none" />
              <div className="p-[var(--content-gap)] flex flex-col gap-[var(--tight-gap)]">
                <h4 className="font-heading text-subtitle font-bold text-text-primary">
                  {prop.title}
                </h4>
                <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Storytelling
