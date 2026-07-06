import Nav from '../../components/Nav'
import Hero from '../../components/echoes-of-jiangnan/Hero'
import Overview from '../../components/echoes-of-jiangnan/Overview'
import FinalFrames from '../../components/echoes-of-jiangnan/FinalFrames'
import MaterialPipeline from '../../components/echoes-of-jiangnan/MaterialPipeline'
import CinematicLighting from '../../components/echoes-of-jiangnan/CinematicLighting'
import SceneConstruction from '../../components/echoes-of-jiangnan/SceneConstruction'
import HeroPropBreakdown from '../../components/echoes-of-jiangnan/HeroPropBreakdown'
import TechnicalNotes from '../../components/echoes-of-jiangnan/TechnicalNotes'
import Footer from '../../components/Footer'

function EchoesOfJiangnan() {
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

export default EchoesOfJiangnan
