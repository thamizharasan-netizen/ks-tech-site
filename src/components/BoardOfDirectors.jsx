import keshavPhoto from "../assets/keshav-founders.png"; // reuse from Testimonial
import rohanPhoto from "../assets/rohan-ramaswamy.png";
import venkateshPhoto from "../assets/venkatesh-subramanyam.png";
import puneetPhoto from "../assets/puneet-rakesh-pandey.png";
import reshmaPhoto from "../assets/reshma-dilip-kumar.png";
import rajanPhoto from "../assets/rajan-chaurasiya.png";

const directors = [
  {
    name: "Keshav A S",
    title: "Managing Director & Chairman",
    bio: "Mr. Anancha Perumal Selvi Keshav holds a Bachelor of Engineering (B.E.) degree from Anna University. He has over 10 years of experience in emerging technologies and their practical applications, with expertise in technology implementation, innovation-driven solutions and execution of tech-enabled projects. His experience includes working on development and deployment of technology solutions and supporting business operations through adoption of new and evolving technologies.",
    photo: keshavPhoto,
  },
  {
    name: "Rohan Ramaswamy",
    title: "Executive Director",
    bio: "Mr. Rohan Ramaswamy is a technology professional with experience in leading innovation-driven initiatives and multidisciplinary technical teams. His expertise includes end-to-end design and deployment of advanced technology solutions such as ICT, IoT and AR/VR platforms. He has led research and development initiatives involving AI-powered analytics, immersive simulation technologies and next-generation digital infrastructure.",
    photo: rohanPhoto,
  },
{
  name: "Venkatesh Subramanyam",
  title: "Non-Executive Non-Independent Director",
  bio: "Mr. Venkatesh Subramanyam is a business and technology leader driving strategy, innovation, and digital transformation. An MBA Gold Medalist, he leads government-focused initiatives, smart city, ICT, and AR/VR solutions while managing large-scale projects. His expertise in strategic partnerships and execution delivers impactful, future-ready technology solutions.",
  photo: venkateshPhoto,
},
{
  name: "Puneet Rakesh Pandey",
  title: "Non-Executive Independent Director",
  bio: "Mr. Puneet Rakesh Pandey is Tax & Audit professional with over five years of experience at specialising in statutory, internal and ASM bank audits. Actively involved in SFIO investigations, demonstrating strong analytical skills and high ethical standards. Adept at translating complex tax laws into practical, compliant strategies and delivering insightful financial reports with a focus on efficiency and excellence.",
  photo: puneetPhoto,
},
{
  name: "Reshma Dilip Kumar",
  title: "Non-Executive Independent Director",
  bio: "Mrs. Reshma Dilip is a Chartered Accountant and an experienced Indirect Tax professional. She holds a Bachelor of Commerce degree from the University of Madras and is a member of the Institute of Chartered Accountants of India. She has expertise in indirect tax laws and related compliance matters", // cut off — send the rest
  photo: reshmaPhoto,
},
{
  name: "Rajan Chaurasiya",
  title: "Non-Executive Independent Director",
  bio: "Mr. Rajan Chaurasiya CA Finalist (ICAI) and B.Com graduate from the University of Mumbai with over 6 years of experience in audit and accounting with strong expertise in finalisation of books, statutory and tax audits for listed and non-listed entities. Hands-on experience in forensic and concurrent audits. Wellversed in Income Tax, GST, TDS and regulatory compliances including MCA and Professional Tax.", // cut off — send the rest
  photo: rajanPhoto,
},
];

function DirectorCard({ director }) {
  return (
    <div className="flex flex-col gap-3">
      <img
        src={director.photo}
        alt={director.name}
        className="h-79.5 sm:h-100 rounded-2xl object-cover relative object-[50%_30%]"
        style={{ height: "350px" }}
      />
      <div>
        <h3 className="font-['Open_Sans'] font-bold text-xl text-gray-900">
          {director.name}
        </h3>
        <p className="font-['Open_Sans'] text-sm text-gray-500 mb-2">
          {director.title}
        </p>
        <p className="font-['Open_Sans'] text-sm text-gray-600 leading-relaxed">
          {director.bio}
        </p>
      </div>
    </div>
  );
}

function BoardOfDirectors() {
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
        gap: "32px",
      }}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-['Open_Sans'] font-bold text-2xl md:text-3xl text-gray-900 mb-3">
          Driving Force Behind Innovation
        </h2>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600">
          Our leadership drives innovation with vision, accountability, and
          precision, transforming intelligence into trusted solutions that
          empower governments and institutions worldwide.
        </p>
      </div>

      <h3 className="font-['Open_Sans'] font-bold text-xl md:text-2xl text-gray-900 text-center">
        Board of Directors
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {directors.map((director) => (
          <DirectorCard key={director.name} director={director} />
        ))}
      </div>
    </section>
  );
}

export default BoardOfDirectors;