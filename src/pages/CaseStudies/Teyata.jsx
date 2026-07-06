import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

function Teyata() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      <Nav />
      <main className="flex-1 flex items-center justify-center px-[var(--container-padding-x)]">
        <div className="text-center flex flex-col items-center gap-[var(--item-gap)]">
          <p className="font-body text-caption uppercase tracking-[var(--letter-spacing-wide)] text-accent-gold">
            Coming Soon
          </p>
          <h1 className="font-heading font-bold text-section text-text-primary">
            Teyata
          </h1>
          <p className="font-body text-body text-text-secondary">
            This case study is still in production.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Teyata
