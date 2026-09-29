import Navbar from '../components/Navbar'
import PeopleHero from '../components/PeopleHero'
import PeoplePurpose from '../components/PeoplePurpose'
import PeoplePowerInnovation from '../components/PeoplePowerInnovation'
import BoardOfDirectors from '../components/BoardOfDirectors'
import KeyManagerialPersonnel from '../components/KeyManagerialPersonnel'
import Footer from '../components/Footer'

function People() {
  return (
    <div>
      <div className="relative">
        <PeopleHero />
        <div className="absolute top-0 left-0 w-full">
          <Navbar variant="light" />
        </div>
      </div>
      <PeoplePurpose />
      <PeoplePowerInnovation />
      <BoardOfDirectors />
      <KeyManagerialPersonnel />
      <Footer />
    </div>
  )
}

export default People