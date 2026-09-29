import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import WhoWeAre from '../components/WhoWeAre'
import OurJourney from '../components/OurJourney'
import VisionMission from '../components/VisionMission'
import Footer from '../components/Footer'
import KeyStrengths from '../components/KeyStrengths'
import Testimonial from '../components/Testimonial'
import AwardsRecognitions from '../components/AwardsRecognitions'
import PartnershipsLogos from '../components/PartnershipsLogos'
function About() {
  return (
    <div>
      <div className="relative">
        <AboutHero />
        <div className="absolute top-0 left-0 w-full">
          <Navbar variant="light" />
        </div>
      </div>
      <WhoWeAre />
       <OurJourney />
       <VisionMission/>
       <Testimonial />
       <KeyStrengths />
       <AwardsRecognitions />
       <PartnershipsLogos/> 
      <Footer />
    </div>
  )
}

export default About