import impactImage from "../assets/driving-impact.jpg"; // the fan/blade blue graphic

function DrivingImpact() {
  return (
    <section
      className="w-full mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 px-6 md:px-[120px] py-10 md:py-[80px]"
      style={{ maxWidth: "1440px", backgroundColor: "#F8F8F8" }}
    >
      <img
        src={impactImage}
        alt="Driving impact through execution"
        className="rounded-2xl object-cover w-full md:w-[320px] flex-shrink-0"
        style={{ aspectRatio: "1 / 1" }}
      />

      <div>
        <h2 className="font-['Open_Sans'] font-bold text-2xl md:text-3xl text-gray-900 mb-4">
          Driving Impact through Execution
        </h2>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600 leading-relaxed">
          Our projects are driving meaningful impact by leveraging
          technology, innovation and digital capabilities to solve
          real-world challenges, enhance operational efficiency and create
          lasting value across industries and public sectors. We have
          executed projects across diverse sectors, including defence,
          education and public welfare, delivering value-added solutions to
          a wide range of clients, including government departments and
          public sector enterprises.
        </p>
      </div>
    </section>
  );
}

export default DrivingImpact;