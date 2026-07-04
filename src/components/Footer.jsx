function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-bg-card border-t border-border">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)] py-[var(--container-padding-y)]">

        {/* 上部分 - 链接区 */}
        <div className="grid grid-cols-3 gap-[var(--card-gap)] mb-[var(--section-gap)]">

          {/* 左列 - 品牌 */}
          <div>
            <h3 className="font-heading font-bold text-subtitle text-accent-gold mb-[var(--item-gap)]">
              ISOFF
            </h3>
            <p className="font-body text-body text-text-secondary leading-[var(--line-height-normal)]">
              TODO: 等待设计截图确认品牌描述文案
            </p>
          </div>

          {/* 中列 - 导航 */}
          <div>
            <h4 className="font-body font-semibold text-body uppercase tracking-[var(--letter-spacing-normal)] text-text-tertiary mb-[var(--item-gap)]">
              Navigation
            </h4>
            <nav className="flex flex-col gap-[var(--text-gap)]">
              <a href="/" className="font-body text-body text-text-secondary hover:text-accent-gold transition-colors">
                Home
              </a>
              <a href="/work" className="font-body text-body text-text-secondary hover:text-accent-gold transition-colors">
                Work
              </a>
              <a href="/about" className="font-body text-body text-text-secondary hover:text-accent-gold transition-colors">
                About
              </a>
              <a href="/contact" className="font-body text-body text-text-secondary hover:text-accent-gold transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* 右列 - 联系方式 */}
          <div>
            <h4 className="font-body font-semibold text-body uppercase tracking-[var(--letter-spacing-normal)] text-text-tertiary mb-[var(--item-gap)]">
              Connect
            </h4>
            <div className="flex flex-col gap-[var(--text-gap)]">
              <a href="mailto:TODO" className="font-body text-body text-text-secondary hover:text-accent-gold transition-colors">
                TODO: Email
              </a>
              <a href="https://TODO" target="_blank" rel="noopener noreferrer" className="font-body text-body text-text-secondary hover:text-accent-gold transition-colors">
                TODO: LinkedIn
              </a>
              <a href="https://TODO" target="_blank" rel="noopener noreferrer" className="font-body text-body text-text-secondary hover:text-accent-gold transition-colors">
                TODO: ArtStation
              </a>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="w-full h-[1px] bg-border mb-[var(--content-gap)]" />

        {/* 下部分 - 版权 */}
        <div className="flex items-center justify-between">
          <p className="font-body text-body text-text-tertiary">
            © {currentYear} ISOFF. All rights reserved.
          </p>
          <p className="font-body text-body text-text-tertiary">
            TODO: 等待设计截图确认右侧文案
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
