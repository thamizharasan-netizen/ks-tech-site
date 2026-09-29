import Navbar from '../components/Navbar'
import ProductHero from '../components/ProductHero'
import TechSolutions from '../components/TechSolutions'
import Footer from '../components/Footer'
import ProductsGlance from '../components/ProductsGlance'

function Products() {
  return (
    <div>
      <div className="relative">
        <ProductHero />
        <div className="absolute top-0 left-0 w-full">
          <Navbar variant="light" />
        </div>
      </div>
      <TechSolutions />
      <ProductsGlance />
      <Footer />
    </div>
  )
}

export default Products