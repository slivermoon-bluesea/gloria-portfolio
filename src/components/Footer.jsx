import { Link, useLocation } from 'react-router-dom'

const PROJECTS = [
  { slug: 'echoes-of-jiangnan', label: 'Echoes of Jiangnan' },
  // { slug: 'signal-lost', label: 'Signal Lost' },
  { slug: 'teyata', label: 'Teyata' }
]

function Footer() {
  const location = useLocation()
  const currentIndex = PROJECTS.findIndex(
    (p) => location.pathname === `/case-studies/${p.slug}`
  )
  const isCaseStudyPage = currentIndex !== -1

  // 只显示其他项目，不循环
  const prevProject = isCaseStudyPage && currentIndex > 0
    ? PROJECTS[currentIndex - 1]
    : null
  const nextProject = isCaseStudyPage && currentIndex < PROJECTS.length - 1
    ? PROJECTS[currentIndex + 1]
    : null

  return (
    <footer className="w-full bg-bg-card border-t border-border">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)] py-[var(--container-padding-y)] flex flex-col items-center gap-[var(--section-gap)]">

        {/* Email */}
        <a
          href="mailto:gloriatang1202@gmail.com"
          className="font-body text-subtitle text-text-secondary hover:text-accent-gold transition-colors"
        >
          gloriatang1202@gmail.com
        </a>

        {/* Links row */}
        <nav className="flex items-center justify-center gap-[48px] flex-wrap">
          <a
            href="https://github.com/slivermoon-bluesea"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-body text-accent-gold hover:opacity-80 transition-opacity"
          >
            GitHub — Silverlight
          </a>
          <a
            href="https://www.artstation.com/gloriat1202"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-body text-accent-gold hover:opacity-80 transition-opacity"
          >
            ArtStation — gloriat1202
          </a>
          {isCaseStudyPage && prevProject && (
            <Link
              to={`/case-studies/${prevProject.slug}`}
              className="font-body text-body text-accent-gold hover:opacity-80 transition-opacity"
            >
              ← {prevProject.label}
            </Link>
          )}
          {isCaseStudyPage && nextProject && (
            <Link
              to={`/case-studies/${nextProject.slug}`}
              className="font-body text-body text-accent-gold hover:opacity-80 transition-opacity"
            >
              {nextProject.label} →
            </Link>
          )}
        </nav>

        {/* TODO: 品牌 / 版权待定（先不做品牌） */}
      </div>
    </footer>
  )
}

export default Footer
