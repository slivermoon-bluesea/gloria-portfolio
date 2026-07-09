import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

function Work() {
  // 只显示 online: true 的项目
  const visibleProjects = projects.filter(p => p.online)

  return (
    <div className="min-h-screen bg-bg-primary">
      <Nav />

      <main className="pt-[calc(var(--nav-height)+var(--container-padding-y))] pb-[var(--container-padding-y)]">
        <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">

          <h1 className="font-heading font-bold text-hero text-text-primary mb-[var(--section-gap)]">
            Gloria's Portfolio
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--card-gap)] max-w-[1200px] mx-auto">
            {visibleProjects.map((project) => (
              <Link
                key={project.id}
                to={project.route}
                className="group block rounded-card overflow-hidden border border-border bg-bg-card transition-colors hover:border-border-heavy"
              >
                {/* Phase 3D: 共享元素过渡 - layoutId 用于 morph 动画 */}
                <motion.div
                  layoutId={`project-card-${project.id}`}
                  className="relative aspect-[4/3] bg-bg-card-darker overflow-hidden"
                  transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                  {project.heroImage ? (
                    <motion.img
                      layoutId={`project-image-${project.id}`}
                      src={project.heroImage}
                      alt={project.title}
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
                </motion.div>

                {/* 文字信息区域：图片下方 */}
                <div className="p-[24px] flex flex-col gap-[var(--tight-gap)]">
                  <p className="font-body text-caption uppercase tracking-[var(--letter-spacing-normal)] text-text-tertiary">
                    {project.scope.work}
                  </p>
                  <h2 className="font-heading font-bold text-card text-text-primary group-hover:text-accent-gold transition-colors">
                    {project.title}
                  </h2>
                  <p className="font-body text-body text-text-secondary">
                    {project.blurb}
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
