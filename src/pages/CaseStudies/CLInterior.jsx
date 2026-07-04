import Nav from '../../components/Nav'
import Hero from '../../components/case-study/Hero'
import Overview from '../../components/case-study/Overview'
import FinalFrames from '../../components/case-study/FinalFrames'
import MaterialPipeline from '../../components/case-study/MaterialPipeline'
import CinematicLighting from '../../components/case-study/CinematicLighting'
import SceneConstruction from '../../components/case-study/SceneConstruction'
import HeroPropBreakdown from '../../components/case-study/HeroPropBreakdown'
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
        <CinematicLighting />
        <SceneConstruction />
        <HeroPropBreakdown />
        <TechnicalNotes />
      </main>
      <Footer />
    </div>
  )
}

export default CLInterior
