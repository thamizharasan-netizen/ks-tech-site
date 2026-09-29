import iconGovernment from "../assets/icon-alignment-government.png";
import iconInfrastructure from "../assets/icon-public-infrastructure.png";
import iconInnovation from "../assets/icon-innovation-rd.png";
import iconTalent from "../assets/icon-talent-execution.png";
import iconScaling from "../assets/icon-scaling-india.png";
import iconAlliances from "../assets/icon-tech-alliances.png";
import iconPartnerships from "../assets/icon-partnerships.png";

const pillars = [
  {
    icon: iconGovernment,
    title: "Alignment With Government's Initiatives",
    description:
      "Supporting national initiatives through scalable, sustainable technology solutions and strategic execution.",
  },
  {
    icon: iconInfrastructure,
    title: "Building Intelligent Public Infrastructure",
    description:
      "Driving citizen-centric digital transformation across education, infrastructure, and public services nationwide.",
  },
  {
    icon: iconInnovation,
    title: "Innovation Powered By R&D",
    description:
      "Developing indigenous AI-powered platforms through innovation, R&D, and advanced technologies.",
  },
  {
    icon: iconTalent,
    title: "Talent-Driven Execution",
    description:
      "Delivering mission-critical projects through skilled talent, innovation, and proven execution excellence nationwide.",
  },
  {
    icon: iconScaling,
    title: "Scaling Across India",
    description:
      "Scaling indigenous technologies through strategic partnerships and sustainable public infrastructure solutions.",
  },
  {
    icon: iconAlliances,
    title: "Strategic Technology Alliances",
    description:
      "Strengthening technology partnerships to accelerate defence and infrastructure deployment nationwide.",
  },
  {
    icon: iconPartnerships,
    title: "Partnerships And Collaborations",
    description:
      "Building trusted partnerships delivering nationwide technology solutions for government and enterprises.",
  },
];

function PillarCard({ pillar }) {
  return (
    <div
      className="flex flex-col items-center text-center rounded-2xl p-6"
      style={{ backgroundColor: "#F3E8FB" }}
    >
      <div
        className="flex items-center justify-center mb-4"
        style={{
          width: "61px",
          height: "61px",
          borderRadius: "64px",
          border: "1px solid #E6D0FF",
          padding: "8px",
          backgroundColor: "#EEDDFF",
        }}
      >
        <img
          src={pillar.icon}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <h3 className="font-['Open_Sans'] font-bold text-base text-gray-900 mb-3">
        {pillar.title}
      </h3>
      <p className="font-['Open_Sans'] text-sm text-gray-600 leading-relaxed">
        {pillar.description}
      </p>
    </div>
  );
}

function PillarsOfProgress() {
  return (
    <section
      className="w-full mx-auto flex flex-col"
      style={{
        maxWidth: "1440px",
        backgroundColor: "#F8F8F8",
        padding: "80px",
        gap: "40px",
      }}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-['Open_Sans'] font-bold text-2xl md:text-3xl text-gray-900 mb-3">
          Our Pillars of Progress
        </h2>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600">
          Driving sustainable growth through innovation, operational
          excellence, market expansion, and customer-focused solutions that
          adapt to evolving industry opportunities and needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => (
          <PillarCard key={pillar.title} pillar={pillar} />
        ))}
      </div>
    </section>
  );
}

export default PillarsOfProgress;