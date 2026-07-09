import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SectionHeader from '../components/echoes-of-jiangnan/SectionHeader'
import { projects } from '../data/projects'

const skills = [
  {
    label: 'Environment Art',
    items: 'Environment Modeling · Modular Systems · Hard-Surface Modeling · Set Dressing · Real-Time Lighting (UE5: Lumen / Nanite)'
  },
  {
    label: 'Texturing / Look-Dev',
    items: 'PBR Texturing · UV Unwrapping · Baking (High → Low) · Material Authoring · Asset Optimization'
  },
  {
    label: 'Software',
    items: 'Maya (primary) · Substance Painter · Substance Designer · Mari (UDIM) · Unreal Engine 5 · Photoshop · PureRef'
  }
]

const experience = [
  {
    title: 'Digital Media Tutor',
    org: 'Future Up Inc',
    meta: 'North York, ON · Part-time',
    date: '2020 – 2023',
    bullets: [
      'Taught interactive-media and programming fundamentals (Max/MSP); built per-student curricula and guided projects end-to-end.'
    ]
  },
  {
    title: 'Event Volunteer',
    org: 'VGLX (Video Game Live Experience)',
    meta: 'Toronto, ON',
    date: 'Oct 2025',
    bullets: [
      'Supported MSI booth demos and audience-engagement activities.'
    ]
  }
]

const education = [
  {
    title: 'Master of Digital Media',
    org: 'Toronto Metropolitan University',
    meta: 'GPA 4.05 / 4.33',
    date: '2024 – 2025'
  },
  {
    title: 'Asset Creation Diploma — Environment & Props for Film',
    org: 'Think Tank Training Centre',
    meta: 'Modeling · Texturing · Lighting',
    date: '2023 – 2024'
  },
  {
    title: 'Bachelor of Digital Media',
    org: 'York University',
    meta: "Dean's Honour Roll",
    date: '2018 – 2021'
  }
]

function Resume() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Nav />

      <main className="pt-[calc(var(--nav-height)+var(--container-padding-y))] pb-[var(--container-padding-y)]">
        <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

          {/* Header */}
          <header className="flex flex-col gap-[var(--item-gap)] pb-[var(--section-gap)] border-b border-border">
            <h1 className="font-heading font-bold text-hero text-text-primary leading-[var(--line-height-tight)]">
              Gloria (Hao) Tang
            </h1>
            <p className="font-body text-subtitle text-text-secondary">
              3D Environment Artist · 3D Generalist
            </p>
            <p className="font-body text-body text-text-tertiary">
              Based in Canada · Canadian PGWP valid through 2028
            </p>
            <a
              href="/Gloria_Tang_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[var(--tight-gap)] inline-flex w-fit items-center gap-[var(--tight-gap)] rounded-[var(--radius-small)] border border-accent-gold px-[24px] py-[12px] font-body text-body font-medium uppercase tracking-[var(--letter-spacing-normal)] text-accent-gold hover:bg-accent-gold hover:text-bg-primary transition-colors"
            >
              Download PDF ↓
            </a>
          </header>

          {/* 01 Summary */}
          <section className="pt-[var(--section-gap)]">
            <SectionHeader number="01" eyebrow="Profile" title="Summary" />
            <p className="mt-[var(--content-gap)] max-w-[900px] font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
              Detail-oriented 3D Environment Artist specializing in real-time, high-fidelity game environments with a strong focus on cinematic realism and environmental storytelling. Proficient in end-to-end Unreal Engine 5 pipelines — from hard-surface and organic modeling in Maya to advanced texturing in Substance Painter and Mari (UDIM). Master of Digital Media graduate with specialized training in film-quality environment and prop asset creation.
            </p>
          </section>

          {/* 02 Skills */}
          <section className="pt-[var(--section-gap)]">
            <SectionHeader number="02" eyebrow="Toolset" title="Skills" />
            <div className="mt-[var(--content-gap)] flex flex-col gap-[var(--card-gap)]">
              {skills.map((group) => (
                <div key={group.label} className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[var(--item-gap)]">
                  <span className="font-body text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold pt-[2px]">
                    {group.label}
                  </span>
                  <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                    {group.items}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 03 Projects */}
          <section className="pt-[var(--section-gap)]">
            <SectionHeader number="03" eyebrow="Selected Work" title="Projects" />
            <div className="mt-[var(--content-gap)] grid grid-cols-1 md:grid-cols-2 gap-[var(--card-gap)]">
              {projects.filter(p => p.online).map((p) => (
                <Link
                  key={p.id}
                  to={p.route}
                  className="group block rounded-card overflow-hidden border border-border bg-bg-card transition-colors hover:border-border-heavy"
                >
                  {/* Phase 3D: 共享元素过渡 - 与 Work 页使用相同的 layoutId */}
                  <motion.div
                    layoutId={`project-card-${p.id}`}
                    className="relative aspect-[16/10] bg-bg-card-darker overflow-hidden"
                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                  >
                    {/* 背景图片 */}
                    {p.heroImage ? (
                      <motion.img
                        layoutId={`project-image-${p.id}`}
                        src={p.heroImage}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-body text-caption uppercase tracking-[var(--letter-spacing-wide)] text-text-tertiary">
                          Image Coming Soon
                        </span>
                      </div>
                    )}

                    {/* 默认显示层：标题 + 副标题（底部，半透明背景） */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/70 to-transparent p-[24px] pt-[48px]">
                      <h3 className="font-heading font-bold text-card text-text-primary mb-[4px]">
                        {p.title}
                      </h3>
                      <span className="font-body text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold block mb-[2px]">
                        {p.scope.resume.role}
                      </span>
                      <span className="font-body text-caption text-text-tertiary">
                        {p.scope.resume.meta}{p.scope.resume.date ? ` · ${p.scope.resume.date}` : ''}
                      </span>
                    </div>

                    {/* Hover 显示层：详细介绍（全覆盖，强模糊背景） */}
                    <div className="absolute inset-0 bg-bg-primary/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-[32px] text-center">
                      <h3 className="font-heading font-bold text-card text-text-primary mb-[4px]">
                        {p.title}
                      </h3>
                      <span className="font-body text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold block mb-[2px]">
                        {p.scope.resume.role}
                      </span>
                      <span className="font-body text-caption text-text-tertiary block mb-[var(--item-gap)]">
                        {p.scope.resume.meta}{p.scope.resume.date ? ` · ${p.scope.resume.date}` : ''}
                      </span>
                      <ul className="flex flex-col gap-[var(--tight-gap)]">
                        {p.scope.resume.bullets.map((b, i) => (
                          <li key={i} className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

          {/* 04 Experience */}
          <section className="pt-[var(--section-gap)]">
            <SectionHeader number="04" eyebrow="History" title="Experience" />
            <div className="mt-[var(--content-gap)] flex flex-col gap-[var(--card-gap)]">
              {experience.map((e) => (
                <div key={e.title} className="flex flex-col gap-[var(--tight-gap)] border-t border-border pt-[var(--item-gap)]">
                  <div className="flex flex-wrap items-baseline justify-between gap-[var(--tight-gap)]">
                    <h3 className="font-heading font-bold text-subtitle text-text-primary">
                      {e.title} <span className="text-accent-gold">— {e.org}</span>
                    </h3>
                    <span className="font-body text-caption uppercase tracking-[var(--letter-spacing-normal)] text-text-tertiary">
                      {e.date}
                    </span>
                  </div>
                  <span className="font-body text-caption text-text-tertiary">{e.meta}</span>
                  <ul className="flex flex-col gap-[var(--tight-gap)] mt-[4px]">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 05 Education */}
          <section className="pt-[var(--section-gap)]">
            <SectionHeader number="05" eyebrow="Background" title="Education" />
            <div className="mt-[var(--content-gap)] flex flex-col gap-[var(--card-gap)]">
              {education.map((ed) => (
                <div key={ed.title} className="flex flex-wrap items-baseline justify-between gap-[var(--tight-gap)] border-t border-border pt-[var(--item-gap)]">
                  <div className="flex flex-col gap-[4px]">
                    <h3 className="font-heading font-bold text-subtitle text-text-primary">
                      {ed.title} <span className="text-accent-gold">— {ed.org}</span>
                    </h3>
                    <span className="font-body text-caption text-text-tertiary">{ed.meta}</span>
                  </div>
                  <span className="font-body text-caption uppercase tracking-[var(--letter-spacing-normal)] text-text-tertiary">
                    {ed.date}
                  </span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Resume
