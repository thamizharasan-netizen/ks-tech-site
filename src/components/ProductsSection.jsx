import vrFlightImg from "../assets/vr-flight-simulator.png";
import motionPlatformImg from "../assets/6dof-motion-platform.png";
import cbtPlatformImg from "../assets/cbt-platform.png";
import videoAnalyticsImg from "../assets/ikshana-video-analytics.png";
import mdmImg from "../assets/ikshana-mdm.png";
import vmsImg from "../assets/ikshana-vms.png";

function ProductsSection() {
  const products = [
    {
      title: "VR Flight Simulator",
      image: vrFlightImg,
      description:
        "Immersive force-feedback VR flight simulator delivering realistic pilot training, mission readiness, and emergency response capabilities.",
    },
    {
      title: "6DOF Motion Platform",
      image: motionPlatformImg,
      description:
        "Indigenous six-axis motion system enabling realistic, immersive simulation for defence, aviation, and research applications.",
    },
    {
      title: "CBT Platform",
      image: cbtPlatformImg,
      description:
        "Role-based digital learning system enabling accurate, traceable, scalable technical and procedural training across industries.",
    },
    {
      title: "Ikshana Video Analytics",
      image: videoAnalyticsImg,
      description:
        "AI-powered video analytics enabling real-time threat detection, identification, and actionable alerts across 25+ use cases.",
    },
    {
      title: "Ikshana MDM (Mobile Device Management)",
      image: mdmImg,
      description:
        "Ikshana MDM centrally manages, secures, monitors, and configures mobile devices at scale through one console.",
    },
    {
      title: "Ikshana Video Management System",
      image: vmsImg,
      description:
        "Ikshana VMS unifies live monitoring, recording, events, and evidence management across multiple sites.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[64px] px-[80px] py-[80px] bg-white text-center">
      <div>
        <h2
          className="mb-2"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "160%",
            letterSpacing: "0px",
            color: "#000000",
          }}
        >
          Our Products
        </h2>
        <p className="font-semibold text-gray-800 mb-3">
          Modernistic Tech for Tomorrow's Challenges
        </p>
        <p className="text-gray-500 max-w-3xl mx-auto mb-6">
          KS Technologies offers a suite of proprietary products designed for
          seamless integration and maximum impact. Built on AI, IoT, and VR
          foundations, these solutions are engineered for scalability, making
          them attractive for enterprise adoption and investment in
          product-led growth.
        </p>
        <button className="bg-purple-900 hover:bg-purple-950 text-white text-sm font-medium px-6 py-3 rounded-full inline-flex items-center gap-2">
          Explore More Product
          <span>→</span>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl grid grid-cols-2 gap-4 to grid grid-cols-1 sm:grid-cols-2 gap-4 ">
  {products.map((product) => (
    <div
      key={product.title}
      className="rounded-[16px] overflow-hidden text-left flex flex-col gap-[32px] p-[24px]"
      style={{ border: "1px solid #E0E2FF", backgroundColor: "#EDEEFF" }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-[366px] h-[366px] object-cover rounded-[16px] border"
        style={{ borderColor: "#E0E2FF" }}
      />
      <div>
        <h3 className="font-semibold text-base mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}

export default ProductsSection;