import defenceSimImg from "../assets/defence-simulation.jpg";
import sustainableImg from "../assets/sustainable-infrastructure.jpg";
import vrClassroomImg from "../assets/vr-classroom.png";
import erpSystemImg from "../assets/erp-system.jpg";

function Card({ card }) {
  return (
    <div
      className="relative overflow-hidden shrink-0"
      style={{
        flexBasis: card.widthPercent,
        height: "410px",
        borderRadius: "10px",
      }}
    >
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
        }}
      />
      <div className="absolute bottom-0 left-0 p-[30px]">
        <h3 className="text-white font-semibold text-lg">{card.title}</h3>
      </div>
    </div>
  );
}

function WhyPartner() {
  const cards = [
    { title: "Defence Simulation Lab", image: defenceSimImg, widthPercent: "64.8%" },
    { title: "Sustainable Smart Infrastructure", image: sustainableImg, widthPercent: "35.2%" },
    { title: "Immersive VR Classroom", image: vrClassroomImg, widthPercent: "34.8%" },
    { title: "Smart Enterprise Management System", image: erpSystemImg, widthPercent: "65.2%" },
  ];

  return (
    <section
      className="flex flex-col gap-[64px] px-[80px] py-[80px]"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="text-center">
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
  Why Partner with KS Technologies?
</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          As a newly acquired powerhouse in smart tech, we're accelerating
          into high-growth markets like AI analytics and sustainable IoT. Tap
          into our pipeline of government-backed projects and R&amp;D
          breakthroughs for unmatched returns.
        </p>
      </div>

      <div className="flex flex-col gap-[30px] w-full mx-auto" style={{ maxWidth: "1280px" }}>
        <div className="flex gap-[30px]">
          <Card card={cards[0]} />
          <Card card={cards[1]} />
        </div>
        <div className="flex gap-[30px]">
          <Card card={cards[2]} />
          <Card card={cards[3]} />
        </div>
      </div>
    </section>
  );
}

export default WhyPartner;