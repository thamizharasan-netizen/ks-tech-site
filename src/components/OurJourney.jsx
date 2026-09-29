import journeyImage from "../assets/journey-timeline.png"; // this exact image

function OurJourney() {
  return (
    <section
      className="w-full mx-auto bg-white flex flex-col items-center px-6 md:px-[120px] py-10 md:py-[80px] gap-8 md:gap-10"
      style={{ maxWidth: "1440px" }}
    >
      <div className="text-center max-w-2xl">
        <p className="font-['Open_Sans'] font-semibold text-sm text-purple-700 uppercase tracking-wide mb-2">
          Our Journey
        </p>
        <h2 className="font-['Open_Sans'] font-semibold text-2xl md:text-3xl text-gray-900 mb-3">
          Our Evolution in Action
        </h2>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600">
          Schools require reliable infrastructure, connectivity, hardware,
          support services, and long-term maintenance to sustain meaningful
          digital learning outcomes at scale.
        </p>
      </div>

      <img
        src={journeyImage}
        alt="KS Smart company timeline: 2016 to 2026"
        className="w-full"
        style={{ maxWidth: "1220px", height: "auto" }}
      />
    </section>
  );
}

export default OurJourney;