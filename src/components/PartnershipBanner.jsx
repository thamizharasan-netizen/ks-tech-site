function PartnershipBanner() {
  return (
    <div
      className="flex justify-center px-[80px] py-[80px]"
      style={{ backgroundColor: "#F4EDFE" }}
    >
      <div
        className="flex flex-col items-center text-center gap-[10px]"
        style={{
          backgroundColor: "#9939B8",
          borderRadius: "32px",
          paddingTop: "32px",
          paddingRight: "100px",
          paddingBottom: "32px",
          paddingLeft: "100px",
          maxWidth: "1280px",
          width: "100%",
        }}
      >
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Explore partnership opportunities for co-development and market
          expansion.
        </h2>
        <p className="text-purple-100 text-sm mb-2">
          Collaborate on innovative solutions, expand into new markets, and
          accelerate shared growth through strategic partnerships.
        </p>
        <button className="bg-white text-purple-900 font-medium text-sm px-6 py-3 rounded-full inline-flex items-center gap-2">
          Ready to integrate?
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

export default PartnershipBanner;