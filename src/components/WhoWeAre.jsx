import officeImage from "../assets/who-we-are.png"; // exported 565x509 collage

const stats = [
  { number: "10+ Years", label: "Deep-tech Delivery" },
  { number: "20+", label: "Government & Defense clients" },
  { number: "50,000+", label: "Devices Management" },
  { number: "8+", label: "Active Department in states" },
  { number: "300+", label: "No .of Employee" },
  { number: "4+", label: "Tot no. of Sector Services" },
];

function StatCard({ number, label }) {
  return (
    <div
      className="flex flex-col rounded-[12px]"
      style={{
        padding: "12px 16px",
        gap: "8px",
        border: "1px solid transparent",
        backgroundImage:
          "linear-gradient(#F9F4FF, #F9F4FF), linear-gradient(135deg, #CBAEFF 0%, rgba(255,255,255,0) 50%, #CBAEFF 100%)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        backdropFilter: "blur(42px)",
      }}
    >
      <span className="font-['Open_Sans'] font-semibold text-xl text-gray-900">
        {number}
      </span>
      <span className="font-['Open_Sans'] font-semibold text-xs text-gray-500 leading-tight">
        {label}
      </span>
    </div>
  );
}

function WhoWeAre() {
  return (
    <section
      className="w-full mx-auto bg-white px-6 md:px-[120px] py-10 md:py-[80px] flex flex-col gap-8 md:gap-10"
      style={{ maxWidth: "1440px" }}
    >
      <div>
        <p className="font-['Open_Sans'] font-semibold text-sm text-purple-700 uppercase tracking-wide mb-2">
          Who We are
        </p>
        <h2 className="font-['Open_Sans'] font-bold text-2xl md:text-3xl text-gray-900">
          Empowered By Innovation
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        <img
          src={officeImage}
          alt="KS Smart office"
          className="w-full md:w-[565px] rounded-xl object-cover flex-shrink-0"
          style={{ maxHeight: "509px" }}
        />

        <div className="flex flex-col gap-6">
          <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600 leading-relaxed">
            KS Smart is a top tech firm providing innovative digital and
            automation solutions in sectors like Education, Public Safety,
            Defence, and Smart Utilities. We utilize our expertise in AI,
            surveillance, and digital infrastructure to create intelligent,
            cost-effective solutions for government and business clients. As
            a partner of DRDO and an authorized Android Enterprise Silver
            Partner, we focus on enhancing efficiency, security, and driving
            digital transformation across India.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {stats.map((s) => (
              <StatCard key={s.label} number={s.number} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;