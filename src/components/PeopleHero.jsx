import bgImage from "../assets/people-hero-bg.jpg";

function PeopleHero() {
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
      <div className="flex flex-col items-center text-center gap-3 max-w-full md:w-[1272px]">
        <h1
          className="font-abhaya font-extrabold"
          style={{
            fontSize: "60px",
            lineHeight: "120%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#320D31",
          }}
        >
          Our People
        </h1>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-700 max-w-md md:max-w-2xl">
          Our multidisciplinary team delivers mission-critical technology
          solutions through innovation, proprietary platforms, seamless
          execution, and reliable lifecycle management nationwide.
        </p>
      </div>
    </section>
  );
}

export default PeopleHero;