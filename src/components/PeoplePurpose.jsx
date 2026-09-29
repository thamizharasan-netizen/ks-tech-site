import handsImage from "../assets/people-purpose.jpg";

function PeoplePurpose() {
  return (
    <section
      className="w-full mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 px-6 md:px-[120px] py-10 md:py-[80px]"
      style={{ maxWidth: "1440px", backgroundColor: "#FFFFFF" }}
    >
      <img
        src={handsImage}
        alt="Team collaboration"
        className="rounded-2xl object-cover w-full md:w-[320px] flex-shrink-0"
        style={{ aspectRatio: "1 / 1" }}
      />

      <div>
        <h2 className="font-['Open_Sans'] font-bold text-2xl md:text-3xl text-gray-900 mb-4">
          People, Purpose and the Principles
        </h2>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600 leading-relaxed">
          KS Smart is powered by a multidisciplinary team of engineers,
          developers, project managers, and field technicians delivering
          mission-critical technology solutions across India. We design,
          develop, deploy, and support proprietary platforms for simulation,
          video intelligence, device management, enterprise management, and
          learning systems. Managing the complete lifecycle ensures
          seamless execution, operational excellence, clear accountability,
          and long-term reliability across education, surveillance,
          defence, and enterprise sectors.
        </p>
      </div>
    </section>
  );
}

export default PeoplePurpose;