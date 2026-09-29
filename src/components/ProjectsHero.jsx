import bgImage from "../assets/projects-hero-bg.jpg"; // same purple brush texture, or your own

function ProjectsHero() {
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
          Our Projects
        </h1>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-700 max-w-md md:max-w-2xl">
          Delivering technology-driven projects that solve real-world
          challenges, improve operational efficiency, and create lasting
          value across industries and government sectors.
        </p>
      </div>
    </section>
  );
}

export default ProjectsHero;