import innovationIcon from "../assets/innovation-icon.png";
import impactIcon from "../assets/impact-icon.png";
import sustainabilityIcon from "../assets/sustainability-icon.png";
import investorIcon from "../assets/investor-icon.png";
function KeyValues() {
  const values = [
  {
    title: "Innovation First",
    icon: innovationIcon,
    description:
      "Constantly pushing boundaries with AI/ML and VR technology to deliver next-generation solutions.",
  },
  {
    title: "Impact-Driven",
    icon: impactIcon,
    description:
      "Solutions that deliver measurable results, from cost savings to enhanced security and efficiency.",
  },
  {
    title: "Sustainability Focus",
    icon: sustainabilityIcon,
    description:
      "IoT designs that promote efficient resource use in utilities and beyond for a greener future.",
  },
  {
    title: "Investor Alignment",
    icon: investorIcon,
    description:
      "Transparent growth strategies for long-term value creation and mutual success.",
  },
];

  return (
    <section
      className="flex flex-col gap-[120px] px-[80px] py-[80px]"
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
  Our Key Values
</h2>
        <p className="text-gray-500">
          Principles that drive our innovation and success
        </p>
      </div>

<div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
  {values.map((value) => (
    <div
      key={value.title}
      className="flex flex-col items-center text-center rounded-[16px] border"
      style={{
        backgroundColor: "#F6EBFF",
        borderColor: "#E6E6E6",
        padding: "24px",
        gap: "16px",
      }}
    >
      <img src={value.icon} alt={value.title} className="w-12 h-12" />
      <h3 className="font-bold text-sm tracking-wide">
        {value.title.toUpperCase()}
      </h3>
      <p className="text-xs text-gray-600 leading-relaxed">
        {value.description}
      </p>
    </div>
  ))}
</div>
    </section>
  );
}

export default KeyValues;