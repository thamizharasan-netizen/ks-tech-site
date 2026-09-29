import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Projects from './pages/Projects'
import People from './pages/People'
import CaseStudy from './pages/CaseStudy'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Investors from './pages/Investors'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/people" element={<People />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
        <Route path="/investors" element={<Investors />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App