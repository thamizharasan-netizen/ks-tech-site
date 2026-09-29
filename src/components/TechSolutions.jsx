import networkImage from "../assets/tech-solutions-network.jpg"; // the purple network graphic

function TechSolutions() {
  return (
    <section
      className="w-full mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 px-6 md:px-[120px] py-10 md:py-[80px]"
      style={{ maxWidth: "1440px", backgroundColor: "#F8F8F8" }}
    >
      <img
        src={networkImage}
        alt="Technology network visualization"
        className="rounded-2xl object-cover w-full md:w-[320px] flex-shrink-0"
        style={{ aspectRatio: "1 / 1" }}
      />

      <div>
        <h2 className="font-['Open_Sans'] font-bold text-2xl md:text-3xl text-gray-900 mb-4">
          Technology Solutions for Every Mission
        </h2>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600 leading-relaxed">
          Engineered for mission-critical environments, our products and
          solutions support defence, aviation and research applications with
          advanced intelligence and analytics. Designed to meet evolving
          operational requirements, they also strengthen public safety
          through centralized operations, real-time visibility and
          actionable insights.
        </p>
      </div>
    </section>
  );
}

export default TechSolutions;