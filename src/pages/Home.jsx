import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import KeyValues from '../components/KeyValues'
import FinancialHighlights from '../components/FinancialHighlights'
import ImpactGlance from '../components/ImpactGlance'
import ProjectsSection from '../components/ProjectsSection'
import WhyPartner from '../components/WhyPartner'
import PartnershipBanner from '../components/PartnershipBanner'
import ProductsSection from '../components/ProductsSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <div className="relative">
        <Hero />
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>
      </div>
      <StatsSection />
      <KeyValues />
      <FinancialHighlights />
      <ImpactGlance />
      <ProjectsSection />
      <WhyPartner />
      <PartnershipBanner />
      <ProductsSection />
      <Footer />
    </div>
  )
}

export default Home