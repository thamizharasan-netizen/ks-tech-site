import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import educationImg from "../assets/success-education.png";

const stories = [
  {
    title: "Strengthening National Defence Capabilities",
    description:
      "Our defence solutions reflect the power of reliable, indigenous technology in addressing real-world operational challenges. The development of fully Made-in-India VR flight simulators for the Indian Air Force demonstrates this commitment. Designed for high-fidelity, immersive training, these systems replicate complex flight conditions and emergency scenarios with precision. By reducing dependency on expensive real-flight training hours, improving pilot preparedness and enabling rapid Return On Investment, our solutions deliver tangible value where it matters most-national security and operational readiness.",
    image: educationImg,
  },
  {
    title: "Enabling Safer and Smarter Cities",
    description:
      "Reliable technology becomes truly impactful when it enhances everyday urban life. Through large scale surveillance and analytics deployments such as the Chennai Mega City project and Odisha CCTV implementation, we are enabling smarter, safer cities. By integrating AI-driven video analytics, GPS-enabled tracking and centralised command systems, these solutions provide real-time visibility, faster emergency response and improved law enforcement efficiency. The result is not just better monitoring, but a safer environment for citizens and more responsive urban governance.",
    image: educationImg, // replace with correct image once available
  },
  {
    title: "Securing Public Transportation Systems",
    description:
      "In public transport, where safety and reliability are critical, our technology delivers real-world impact at scale. Through deployments such as surveillance systems in Metropolitan Transport Corporation (MTC) buses, equipped with cameras, GPS tracking and panic buttons connected to command centers, we enable monitoring and incident response. These solutions enhance commuter safety, build public trust and create a scalable framework that can be extended across broader transportation networks demonstrating how dependable technology can directly improve daily lives",
    image: educationImg, // replace with correct image once available
  },
  {
    title: "Transforming Education at Scale",
    description:
      "Our education initiatives use scalable technology to enhance learning and create real impact. Projects like Tamil Nadu's Smart Classroom with 22,000+ classrooms and 8,000+ Hi-Tech Labs, LED Ultra HD TVs in Anganwadi centres, Punjab's digital education upgrade, and Rajasthan's Robotics and STEM Labs strengthen digital education infrastructure. These solutions improve teaching, engage students, and expand access to quality education. They help bridge gaps between government and private schools. We build a digitally empowered education ecosystem benefiting millions of students.",
    image: educationImg,
  },
];
function SuccessStories() {
  const [current, setCurrent] = useState(0);

  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  const goNext = () =>
    setCurrent((prev) => (prev === stories.length - 1 ? 0 : prev + 1));

  const story = stories[current];

  return (
    <section
      className="w-full mx-auto flex flex-col items-center"
      style={{
        maxWidth: "1440px",
        backgroundColor: "#FFFFFF",
        paddingTop: "80px",
        paddingRight: "120px",
        paddingBottom: "80px",
        paddingLeft: "120px",
        gap: "40px",
      }}
    >
      <div className="text-center max-w-2xl mx-auto"><h2
  className="font-['Open_Sans'] font-semibold mb-3"
  style={{
    fontSize: "40px",
    lineHeight: "120%",
    letterSpacing: "0px",
    color: "#1D1D1D",
  }}
>
  Success Stories
</h2>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600">
          Our success stories reflect how innovation-driven solutions have
          transformed industries, empowered institutions, simplified lives
          and created measurable impact across communities and government
          ecosystems.
        </p>
      </div>

      <div className="border border-gray-200 rounded-2xl p-8 w-full flex items-center gap-8">
        <img
          src={story.image}
          alt={story.title}
          className="rounded-lg object-cover flex-shrink-0"
          style={{ width: "180px", height: "140px" }}
        />
        <div>
          <h3 className="font-['Open_Sans'] font-bold text-lg text-gray-900 mb-3">
            {story.title}
          </h3>
          <p className="font-['Open_Sans'] text-sm text-gray-600 leading-relaxed">
            {story.description}
          </p>
        </div>
      </div>

      {/* Navigation: arrows + dots */}
      <div className="flex items-center gap-6">
        <button
          onClick={goPrev}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
          aria-label="Previous story"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${
                i === current
                  ? "w-3 h-3 bg-gray-800"
                  : "w-2.5 h-2.5 bg-gray-300"
              }`}
              aria-label={`Go to story ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
          aria-label="Next story"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default SuccessStories;