import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CLInterior from './pages/CaseStudies/CLInterior'
import DesignSystemDemo from './pages/DesignSystemDemo'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/cl-interior" element={<CLInterior />} />
        <Route path="/design-system" element={<DesignSystemDemo />} />
      </Routes>
    </Router>
  )
}

export default App
