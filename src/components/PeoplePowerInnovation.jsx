import futureWorkforceImg from "../assets/people-future-workforce.jpg";
import boardMeetingImg from "../assets/people-board-meeting.jpg";
import teamCelebrationImg from "../assets/people-team-celebration.png";
import handshakeImg from "../assets/people-handshake.jpg";

const cards = [
  {
    image: futureWorkforceImg,
    title: "Building a Future-ready Workforce",
    description:
      "We remain committed to fostering an inclusive, collaborative and high-performance workplace. Capability development is our strategic priority, with investments in role-based learning journeys, digital learning platforms and targeted upskilling initiatives across emerging areas such as AI, analytics and automation, ensuring the workforce remains agile and future-ready.",
    imageFirst: true,
  },
  {
    image: boardMeetingImg,
    title: "Governance Rooted in Integrity",
    description:
      "Complementing its people-centric culture is a governance framework built on transparency, ethics and accountability. The Board and leadership teams provide strategic oversight through proper structures and policies that guide performance, risk management and compliance. Internal controls and ethical frameworks reinforce a culture of integrity",
    imageFirst: false,
  },
  {
    image: teamCelebrationImg,
    title: "Holistic Employee Well-being",
    description:
      "Employee wellbeing is at the heart of KS Smart's culture. We foster a supportive workplace through comprehensive wellness programs, flexible work practices, and meaningful employee engagement. By encouraging collaboration, trust, and continuous growth, we empower our teams to excel. Recognized as a Great Place to Work, we remain committed to creating an inclusive, people-centric environment that inspires innovation and long-term success.",
    imageFirst: true,
  },
  {
    image: handshakeImg,
    title: "Strengthening Digital Trust",
    description:
      "Recognising the growing importance of digital trust, we enhance our cybersecurity, data privacy and compliance frameworks to safeguard stakeholder interests and support resilient business operations. Regular training programmes on business ethics, data privacy and cybersecurity reinforce governance standards across the enterprise.",
    imageFirst: false,
  },
];

function InnovationCard({ card }) {
  const ImageBlock = (
    <img
      src={card.image}
      alt={card.title}
      className="rounded-lg object-cover w-full"
      style={{ aspectRatio: "30 / 9" }}
    />
  );

  const TextBlock = (
    <div>
      <h3 className="font-['Open_Sans'] font-bold text-2xl text-gray-900 mb-4">
        {card.title}
      </h3>
      <p className="font-['Open_Sans'] text-base text-gray-600 leading-relaxed">
        {card.description}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col" style={{ gap: "24px" }}>
      {card.imageFirst ? (
        <>
          {ImageBlock}
          {TextBlock}
        </>
      ) : (
        <>
          {TextBlock}
          {ImageBlock}
        </>
      )}
    </div>
  );
}
function PeoplePowerInnovation() {
  return (
    <section
      className="w-full mx-auto flex flex-col"
      style={{
        maxWidth: "1440px",
        backgroundColor: "#F8F8F8",
        paddingTop: "64px",
        paddingRight: "80px",
        paddingBottom: "64px",
        paddingLeft: "80px",
        gap: "32px",
      }}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-['Open_Sans'] font-bold text-2xl md:text-3xl text-gray-900 mb-3">
          Where People Power Innovation
        </h2>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600">
          Innovation starts with empowered individuals. We foster a space
          where talent flourishes through collaboration, ongoing learning,
          responsible governance, and a commitment to excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card) => (
          <InnovationCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default PeoplePowerInnovation;