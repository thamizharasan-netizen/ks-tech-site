import { useParams, Navigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CaseStudyDetailHero from "../components/CaseStudyDetailHero";
import DetailSection from "../components/DetailSection";
import Footer from "../components/Footer";
import caseStudies from "../data/caseStudies";

function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies[slug];

  if (!study) {
    return <Navigate to="/case-study" replace />;
  }

  return (
    <div>
      <div className="relative">
        <CaseStudyDetailHero
          title={study.title}
          subtitle={study.subtitle}
          bgImage={study.heroImage}
        />
        <div className="absolute top-0 left-0 w-full">
          <Navbar variant="light" />
        </div>
      </div>

      <div className="text-sm font-['Open_Sans'] text-gray-500 px-6 md:px-[117px] py-6">
        <Link to="/case-study" className="hover:underline">
          Casestudy
        </Link>
        <span className="mx-1">/</span>
        <span style={{ color: "#A6266D" }}>{study.title}</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-[117px] pb-[64px]">
        {study.sections.map((section) => (
          <DetailSection
            key={section.heading}
            heading={section.heading}
            content={section.content}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default CaseStudyDetail;