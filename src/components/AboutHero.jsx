import bgImage from "../assets/about-hero-bg.jpg";

function AboutHero() {
  return (
    <section
  className="w-full flex items-center justify-center px-6 md:px-[117px] pt-[130px] md:pt-[140px] pb-10 md:pb-[44px]"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "280px",
  }}
>
      <div className="flex flex-col items-center text-center gap-4 md:gap-16 max-w-full md:w-[1272px]">
        <h1 className="font-sans font-bold text-3xl md:text-5xl text-purple-950">
          About US
        </h1>
        <p className="font-sans text-sm md:text-base text-gray-700 max-w-md md:max-w-xl">
          Financial insights, regulatory disclosures, and shareholder
          information—clearly organized and easy to access.
        </p>
      </div>
    </section>
  );
}

export default AboutHero;