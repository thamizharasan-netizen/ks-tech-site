import logosImage from "../assets/partner-logos.png";

function PartnershipsLogos() {
  return (
    <section
      className="w-full flex items-center"
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        backgroundColor: "#F8F8F8",
        paddingTop: "61px",
        paddingRight: "80px",
        paddingBottom: "60px",
        paddingLeft: "80px",
        gap: "40px",
      }}
    >
      <p className="font-['Open_Sans'] font-bold text-sm text-gray-900 flex-shrink-0 uppercase">
        Partnerships &<br />Collaborations
      </p>

      <div className="w-px self-stretch bg-gray-300 flex-shrink-0" />

      <div
        className="flex-1 overflow-hidden relative"
        style={{
          height: "66px",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <div className="marquee-track">
          <img src={logosImage} alt="Partner logos" style={{ height: "66px" }} />
          <img src={logosImage} alt="" aria-hidden="true" style={{ height: "66px" }} />
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 40px;
          width: max-content;
          animation: scroll-left 20s linear infinite;
        }
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default PartnershipsLogos;