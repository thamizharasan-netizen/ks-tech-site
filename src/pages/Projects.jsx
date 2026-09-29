import Navbar from '../components/Navbar'
import ProjectsHero from '../components/ProjectsHero'
import DrivingImpact from '../components/DrivingImpact'
import KeySectors from '../components/KeySectors'
import Footer from '../components/Footer'

function Projects() {
  return (
    <div>
      <div className="relative">
        <ProjectsHero />
        <div className="absolute top-0 left-0 w-full">
          <Navbar variant="light" />
        </div>
      </div>
      <DrivingImpact />
      <KeySectors />
      <Footer />
    </div>
  )
}

export default Projects