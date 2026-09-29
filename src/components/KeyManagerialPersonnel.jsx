import vigneshPhoto from "../assets/vignesh-seethapathi.png";
import priyankaPhoto from "../assets/priyanka-malpani.png";

const personnel = [
  {
    name: "Vignesh Seethapathi",
    title: "Chief Financial Officer",
    bio: "Mr. Vignesh Seethapathi is a finance professional with expertise in financial strategy, budgeting, regulatory compliance, treasury management, and statutory audits. He plays a key role in IPO readiness, investor relations, audit coordination, and evaluating investment opportunities, ensuring strong financial governance and sustainable business growth.",
    photo: vigneshPhoto,
  },
  {
    name: "Priyanka Malpani",
    title: "Company Secretary & Compliance Officer",
    bio: "Ms. Priyanka Malpani is a Company Secretary professional with over eight years of experience specialising in corporate governance, regulatory compliance, IPOs and M&A. She has managed end-to-end secretarial and compliance functions for multiple companies. She holds a Master of Business Law from the National Law School of India University, Bengaluru.",
    photo: priyankaPhoto,
  },
];

function PersonCard({ person }) {
  return (
    <div className="flex flex-col gap-3">
      <img
        src={person.photo}
        alt={person.name}
        className="w-full object-cover rounded-2xl relative object-[50%_40%]"
        style={{ height: "350px" }}
      />
      <div>
        <h3 className="font-['Open_Sans'] font-bold text-xl text-gray-900">
          {person.name}
        </h3>
        <p className="font-['Open_Sans'] text-sm text-gray-500 mb-2">
          {person.title}
        </p>
        <p className="font-['Open_Sans'] text-sm text-gray-600 leading-relaxed">
          {person.bio}
        </p>
      </div>
    </div>
  );
}

function KeyManagerialPersonnel() {
  return (
    <section
      className="w-full mx-auto flex flex-col"
      style={{
        maxWidth: "1440px",
        backgroundColor: "#FFFFFF",
        paddingTop: "64px",
        paddingRight: "80px",
        paddingBottom: "64px",
        paddingLeft: "80px",
        gap: "16px",
      }}
    >
      <h3 className="font-['Open_Sans'] font-bold text-xl md:text-2xl text-gray-900 text-center mb-4">
        Key Managerial Personnel
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personnel.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </div>
    </section>
  );
}

export default KeyManagerialPersonnel;