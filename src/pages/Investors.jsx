import Navbar from "../components/Navbar";
import InvestorsHero from "../components/InvestorsHero";
import InvestorsContent from "../components/InvestorsContent";
import Footer from "../components/Footer";

function Investors() {
  return (
    <div>
      <div className="relative">
        <InvestorsHero />
        <div className="absolute top-0 left-0 w-full">
          <Navbar variant="light" />
        </div>
      </div>
      <InvestorsContent />
      <Footer />
    </div>
  );
}

export default Investors;