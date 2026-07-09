import Nav from '../../components/Nav'
import Hero from '../../components/teyata/Hero'
import Overview from '../../components/teyata/Overview'
import EnvironmentWork from '../../components/teyata/EnvironmentWork'
import EnvironmentalStorytelling from '../../components/teyata/EnvironmentalStorytelling'
import Reflection from '../../components/teyata/Reflection'
import Footer from '../../components/Footer'

function Teyata() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Nav />
      <main>
        <Hero />
        <Overview />
        <EnvironmentWork />
        <EnvironmentalStorytelling />
        <Reflection />
      </main>
      <Footer />
    </div>
  )
}

export default Teyata
