import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Work() {
  const projects = [
    {
      slug: 'echoes-of-jiangnan',
      title: 'Echoes of Jiangnan',
      subtitle: 'Abandoned Jiangnan Interior · Environment Storytelling & Decay',
      tag: 'UE5 · 2026',
      image: '/images/cl-interior/hero.webp',
      status: 'live'
    },
    {
      slug: 'signal-lost',
      title: 'Signal Lost',
      subtitle: 'Environment Storytelling',
      tag: 'UE5',
      image: null,
      status: 'live'
    },
    {
      slug: 'teyata',
      title: 'Teyata',
      subtitle: 'Coming Soon',
      tag: 'In Production',
      image: null,
      status: 'coming-soon'
    }
  ]

  return (
    <div className="min-h-screen bg-bg-primary">
      <Nav />

      <main className="pt-[calc(var(--nav-height)+var(--container-padding-y))] pb-[var(--container-padding-y)]">
        <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

          <h1 className="font-heading font-bold text-hero text-text-primary mb-[var(--section-gap)]">
            Work
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--card-gap)]">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/case-studies/${project.slug}`}
                className="group block rounded-card overflow-hidden border border-border bg-bg-card transition-colors hover:border-border-heavy"
              >
                <div className="relative aspect-[4/3] bg-bg-card-darker overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  {project.status === 'coming-soon' && (
                    <div className="absolute top-3 right-3 font-body text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
                      Coming Soon
                    </div>
                  )}
                </div>
                <div className="p-[24px] flex flex-col gap-[var(--tight-gap)]">
                  <p className="font-body text-caption uppercase tracking-[var(--letter-spacing-normal)] text-text-tertiary">
                    {project.tag}
                  </p>
                  <h2 className="font-heading font-bold text-card text-text-primary group-hover:text-accent-gold transition-colors">
                    {project.title}
                  </h2>
                  <p className="font-body text-body text-text-secondary">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Work
