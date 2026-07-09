import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LayoutGroup } from 'framer-motion'
import Work from './pages/Work'
import Resume from './pages/Resume'
import EchoesOfJiangnan from './pages/CaseStudies/EchoesOfJiangnan'
import SignalLost from './pages/CaseStudies/SignalLost'
import Teyata from './pages/CaseStudies/Teyata'
import DesignSystemDemo from './pages/DesignSystemDemo'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Phase 3D: LayoutGroup 包裹路由，支持跨页面的 layoutId 共享元素过渡 */}
      <LayoutGroup>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/case-studies/echoes-of-jiangnan" element={<EchoesOfJiangnan />} />
          <Route path="/case-studies/signal-lost" element={<SignalLost />} />
          <Route path="/case-studies/teyata" element={<Teyata />} />
          <Route path="/design-system" element={<DesignSystemDemo />} />
        </Routes>
      </LayoutGroup>
    </Router>
  )
}

export default App
