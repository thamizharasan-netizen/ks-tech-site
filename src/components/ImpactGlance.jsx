import educationIcon from "../assets/education-icon.png";
import surveillanceIcon from "../assets/surveillance-icon.png";
import defenceIcon from "../assets/defence-icon.png";
import utilitiesIcon from "../assets/utilities-icon.png";
import marketingIcon from "../assets/marketing-icon.png";

import educationShape from "../assets/education-shape.png";
import surveillanceShape from "../assets/surveillance-shape.png";
import defenceShape from "../assets/defence-shape.png";
import utilitiesShape from "../assets/utilities-shape.png";
import marketingShape from "../assets/marketing-shape.png";

function ImpactGlance() {
  const cards = [
    {
      title: "Education Revolutionized",
      description:
        "Integrated smart classroom and VR learning systems engineered for scalable deployment and data-driven academic performance.",
      icon: educationIcon,
      shape: educationShape,
    },
    {
      title: "Surveillance Redefined",
      description:
        "AI-powered city-scale monitoring systems engineered for secure asset protection, operational visibility, and intelligent threat response.",
      icon: surveillanceIcon,
      shape: surveillanceShape,
    },
    {
      title: "Defence Advancements",
      description:
        "Advanced VR simulators and CBT platforms engineered for mission-critical training, operational readiness, and performance precision.",
      icon: defenceIcon,
      shape: defenceShape,
    },
    {
      title: "Utilities Optimized",
      description:
        "Smart IoT-based metering infrastructure enabling optimized consumption, transparency, and scalable utility governance.",
      icon: utilitiesIcon,
      shape: utilitiesShape,
    },
    {
      title: "Digital Marketing Mastery",
      description:
        "Data-driven outreach strategies designed to accelerate lead generation, audience engagement, and measurable brand growth.",
      icon: marketingIcon,
      shape: marketingShape,
    },
  ];

  return (
    <section
      className="flex flex-col gap-[64px] px-[80px] py-[80px]"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="text-center">
        <h2
          className="mb-2"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "160%",
            letterSpacing: "0px",
            color: "#000000",
          }}
        >
          Our Impact at a Glance
        </h2>
        <p className="text-gray-500">
          Transforming industries with cutting-edge technology solutions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-[24px] max-w-6xl mx-auto w-full">
  {cards.map((card) => (
    <div
      key={card.title}
      className="relative bg-white rounded-[24px] p-[24px] overflow-hidden flex flex-col gap-[24px]"
      style={{ border: "1px solid #EEDDFF" }}
    >
      <img
        src={card.icon}
        alt=""
        className="absolute top-6 right-6 w-10 h-10 z-10"
      />

      <div className="relative z-10 pr-14">
        <h3 className="font-semibold text-base mb-2" >{card.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {card.description}
        </p>
      </div>

      <img
        src={card.shape}
        alt=""
        className="absolute -bottom-2 -right-2 w-[120px] h-[120px] z-0 pointer-events-none"
      />
    </div>
  ))}
</div>
    </section>
  );
}

export default ImpactGlance;