import Navbar from '../components/Navbar'
import CaseStudyHero from '../components/CaseStudyHero'
import SolutionsForEveryNeed from '../components/SolutionsForEveryNeed'
import PillarsOfProgress from '../components/PillarsOfProgress'
import SuccessStories from '../components/SuccessStories'
import Footer from '../components/Footer'

function CaseStudy() {
  return (
    <div>
      <div className="relative">
        <CaseStudyHero />
        <div className="absolute top-0 left-0 w-full">
          <Navbar variant="light" />
        </div>
      </div>
      <SolutionsForEveryNeed />
      <PillarsOfProgress />
      <SuccessStories />
      <Footer />
    </div>
  )
}

export default CaseStudy