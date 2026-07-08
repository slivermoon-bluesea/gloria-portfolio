import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-bg-primary' : 'bg-transparent'
      }`}
      style={{
        height: 'var(--nav-height)',
        borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none'
      }}
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)] h-full flex items-center justify-between">
        {/* Left: Name */}
        <Link
          to="/"
          className="font-heading text-subtitle font-normal text-text-primary hover:text-accent-gold transition-colors"
        >
          Hao (Gloria) Tang
        </Link>

        {/* Right: Menu */}
        <ul className="flex items-center gap-[48px]">
          <li>
            <Link
              to="/"
              className="font-body text-body font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="font-body text-body font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
