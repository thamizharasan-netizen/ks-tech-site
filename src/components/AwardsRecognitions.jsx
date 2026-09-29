import award1 from "../assets/award-emerging-partner.jpg";
import award2 from "../assets/award-preferred-partner.jpg";
import award3 from "../assets/award-strategic-partner.jpg";
import award4 from "../assets/award-pinnacle-club.jpg";

const awards = [
  { title: "EMERGING PARTNER AWARD", image: award1, company: "SAMSUNG INDIA ELECTRONICS" },
  { title: "PREFERRED PARTNER", image: award2, company: "CP PLUS (ADITYA INFOTECH LTD.)" },
  { title: "STRATEGIC PARTNER", image: award3, company: "LG ELECTRONICS INDIA PVT. LTD." },
  { title: "PINNACLE CLUB AWARD", image: award4, company: "ACER INDIA PVT. LTD." },
];

function AwardsRecognitions() {
  return (
    <section
      className="w-full mx-auto px-6 md:px-[120px] py-10 md:py-[80px]"
      style={{ maxWidth: "1440px" }}
    >
      <div className="text-center mb-8 md:mb-10">
        <h2 className="font-['Open_Sans'] font-bold text-2xl md:text-3xl text-gray-900 mb-2">
          Awards and Recognitions
        </h2>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600">
          Honors that Reflect Our Performance
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {awards.map((award) => (
          <div
            key={award.title}
            className="rounded-2xl p-4 flex flex-col items-center overflow-hidden"
            style={{ backgroundColor: "#F3E8FB" }}
          >
            <p
              className="font-['Open_Sans'] font-bold text-gray-900 mb-3 w-full"
              style={{
                fontSize: "18px",
                lineHeight: "150%",
                letterSpacing: "0%",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {award.title}
            </p>
            <img
              src={award.image}
              alt={award.title}
              className="rounded-lg object-cover w-full mb-3"
              style={{ aspectRatio: "1 / 1" }}
            />
            <p className="font-['Open_Sans'] text-xs text-gray-600 text-center">
              {award.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AwardsRecognitions;