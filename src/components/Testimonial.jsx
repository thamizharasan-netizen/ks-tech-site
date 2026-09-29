import founderPhoto from "../assets/keshav-founder.png";
import quoteIcon from "../assets/quote-mark.png"

function Testimonial() {
  return (
    <section
      className="w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 px-6 md:px-[120px] py-10 md:py-[80px]"
      style={{ maxWidth: "1440px", backgroundColor: "#FFFFFF" }}
    >
      <img
        src={founderPhoto}
        alt="Keshav A S"
        className="rounded-2xl object-cover flex-shrink-0 w-40 md:w-[280px]"
        style={{ height: "auto" }}
      />

      <div className="text-center md:text-left">
        <span className="text-4xl md:text-6xl text-gray-200 font-serif leading-none">
          &ldquo;
        </span>

        <div className="flex items-center w-full md:w-[691px]" style={{ minHeight: "auto" }}>
          <p
            className="font-jakarta font-semibold text-gray-900"
            style={{
              fontSize: "clamp(20px, 5vw, 40px)",
              lineHeight: "150%",
              letterSpacing: "0px",
            }}
          >
            We are a{" "}
            <span className="bg-purple-100 px-1">future-ready technology</span>{" "}
            company built on timeless values of trust, commitment, and
            long-term relationships.
          </p>
        </div>

        <span
          className="text-4xl md:text-6xl text-gray-200 font-serif leading-none inline-block"
          style={{ transform: "rotate(180deg)" }}
        >
          &ldquo;
        </span>

        <p className="font-['Open_Sans'] font-semibold text-base text-gray-900 mt-2">
          Keshav A S
        </p>
        <p className="font-['Open_Sans'] text-sm text-gray-500">
          Founder &amp; Chief Executive Officer, KS Smart Solutions Pvt. Ltd.
        </p>
      </div>
    </section>
  );
}

export default Testimonial;