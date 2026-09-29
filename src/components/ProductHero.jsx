import bgImage from "../assets/product-hero-bg.jpg"; // you'll replace this

function ProductHero() {
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
      <div className="flex flex-col items-center text-center gap-4 md:gap-4 max-w-full md:w-[1272px]">
        <h1
  className="font-abhaya font-extrabold text-purple-950"
  style={{
    fontSize: "60px",
    lineHeight: "120%",
    letterSpacing: "0%",
    textAlign: "center",
    color: "#320D31",
  }}
>
  Our Product
</h1>
        <p className="font-sans text-sm md:text-base text-gray-700 max-w-md md:max-w-2xl">
          Mission-critical solutions delivering advanced intelligence,
          analytics, real-time visibility, and centralized operations for
          defence, aviation, research, and public safety.
        </p>
      </div>
    </section>
  );
}

export default ProductHero;