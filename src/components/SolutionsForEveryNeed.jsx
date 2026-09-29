import { Link } from "react-router-dom";
import utilityImg from "../assets/case-utility-metering.png";
import surveillanceImg from "../assets/case-surveillance.png";
import vrTrainingImg from "../assets/case-vr-training.png";
import eduVrImg from "../assets/case-edu-vr.png";

const solutions = [
  {
    slug: "smart-utility-metering",
    title: "Smart utility metering",
    description:
      "Developed intelligent smart water and electricity metering solutions with real-time monitoring and advanced analytics, enabling data-driven decisions, predictive planning, improved resource efficiency, and sustainable utility management.",
    image: utilityImg,
    grayscale: true,
  },
  {
    slug: "surveillance-solutions",
    title: "Surveillance solutions",
    description:
      "AI-powered surveillance and incident management solutions enhance public safety through real-time monitoring, centralized command centers, GPS tracking, and faster emergency response for smarter, more secure environments.",
    image: surveillanceImg,
  },
  {
    slug: "military-training-vr-simulators",
    title: "Military training with VR simulators",
    description:
      "We develop advanced, fully immersive VR flight simulators for the Indian Air Force and Army, enabling realistic pilot training by safely replicating complex missions and emergency scenarios while reducin...",
    image: vrTrainingImg,
  },
  {
    slug: "hi-tech-labs-eduvr",
    title: "Hi-tech labs and EduVR",
    description:
      "We established Smart Classrooms, Hi-Tech Labs, and supplied digital education devices to government schools across Tamil Nadu, transforming traditional learning environments into interactive classr...",
    image: eduVrImg,
  },
];

function SolutionCard({ solution }) {
  return (
    <Link
      to={`/case-study/${solution.slug}`}
      className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
    >
      <div>
        <h3 className="font-['Open_Sans'] font-semibold text-lg text-gray-900 mb-2">
          {solution.title}
        </h3>
        <p className="font-['Open_Sans'] text-sm text-gray-600 leading-relaxed">
          {solution.description}
        </p>
      </div>

      <div
        style={{
          height: "400px",
          borderRadius: "16px",
          border: "1px solid #E0E2FF",
          padding: "24px",
        }}
      >
        <img
          src={solution.image}
          alt={solution.title}
          className={`w-full h-full object-cover rounded-lg ${
            solution.grayscale ? "grayscale" : ""
          }`}
        />
      </div>
    </Link>
  );
}

function SolutionsForEveryNeed() {
  return (
    <section
      className="w-full mx-auto flex flex-col"
      style={{
        maxWidth: "1440px",
        backgroundColor: "#FFFFFF",
        paddingTop: "64px",
        paddingRight: "80px",
        paddingBottom: "64px",
        paddingLeft: "80px",
        gap: "40px",
      }}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2
          className="font-['Open_Sans'] font-semibold mb-3"
          style={{
            fontSize: "40px",
            lineHeight: "120%",
            letterSpacing: "0px",
            color: "#1D1D1D",
          }}
        >
          Solutions for Every Need
        </h2>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600">
          We address operational and infrastructure challenges across
          utilities, governance, public safety, defence and education. By
          integrating innovation, digital capabilities and strong execution
          expertise, we are enabling smarter systems, enhancing efficiency
          and creating scalable impact across sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((solution) => (
          <SolutionCard key={solution.slug} solution={solution} />
        ))}
      </div>
    </section>
  );
}

export default SolutionsForEveryNeed;