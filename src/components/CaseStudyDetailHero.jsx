function CaseStudyDetailHero({ title, subtitle, bgImage }) {
  return (
    <section
      className="w-full flex items-center justify-center px-6 md:px-[117px] pt-[100px] md:pt-[128px] pb-8 md:pb-[44px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "280px",
      }}
    >
      <div className="flex flex-col items-center text-center gap-3 max-w-full md:w-[1206px]">
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
          {title}
        </h1>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-700 max-w-md md:max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export default CaseStudyDetailHero;