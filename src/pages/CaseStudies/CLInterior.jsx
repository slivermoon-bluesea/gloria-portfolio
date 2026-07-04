import Nav from '../../components/Nav'
import Hero from '../../components/case-study/Hero'
import Overview from '../../components/case-study/Overview'
import FinalFrames from '../../components/case-study/FinalFrames'
import MaterialPipeline from '../../components/case-study/MaterialPipeline'
import AssetShowcase from '../../components/case-study/AssetShowcase'
import MaterialBreakdown from '../../components/case-study/MaterialBreakdown'
import References from '../../components/case-study/References'
import TechnicalNotes from '../../components/case-study/TechnicalNotes'
import Footer from '../../components/Footer'

function CLInterior() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Nav />
      <main>
        <Hero />
        <Overview />
        <FinalFrames />
        <MaterialPipeline />
        <AssetShowcase />
        <MaterialBreakdown />
        <References />
        <TechnicalNotes />
      </main>
      <Footer />
    </div>
  )
}

export default CLInterior
