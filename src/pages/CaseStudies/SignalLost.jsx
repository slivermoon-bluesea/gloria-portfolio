import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Hero from '../../components/signal-lost/Hero'
import Overview from '../../components/signal-lost/Overview'
import Gallery from '../../components/signal-lost/Gallery'
import Storytelling from '../../components/signal-lost/Storytelling'
import PropDensity from '../../components/signal-lost/PropDensity'
import Lighting from '../../components/signal-lost/Lighting'
import Process from '../../components/signal-lost/Process'

function SignalLost() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Gallery />
        <Storytelling />
        <PropDensity />
        <Lighting />
        <Process />
      </main>
      <Footer />
    </div>
  )
}

export default SignalLost
