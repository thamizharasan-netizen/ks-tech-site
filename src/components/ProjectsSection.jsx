import defenceVideo from "../assets/defence-project.mp4";
import educationVideo from "../assets/education-project.mp4";
import publicServiceVideo from "../assets/publicservice-project.mp4";

function ProjectsSection() {
const projects = [
  {
    title: "Defence",
    video: defenceVideo,
    textFirst: false,
    description:
      "Hindustan Aeronautics Limited, Defence Research and Development Organisation, Indian Armed Forces, Combat Army Aviation Training School, Nashik etc...",
  },
  {
    title: "Education",
    video: educationVideo,
    textFirst: true,
    description:
      "Tamil Nadu Education, Punjab school education, Kerala State Electronics Development Corporation Limited etc...",
  },
  {
    title: "Public Service Sector",
    video: publicServiceVideo,
    textFirst: false,
    description:
      "Tamil Nadu and Gujarat Integrated Child Development Services (ICDS), Odisha Computer Application Centre (OCAC) CCTV, Greater Chennai Corporation Switch Project etc...",
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
          Our Projects
        </h2>
        <p className="font-semibold text-gray-800 mb-3">
          Driving Impact through Execution
        </p>
        <p className="text-gray-500 max-w-3xl mx-auto mb-6">
          Delivering innovative technology solutions that solve real-world
          challenges, enhance operational efficiency, and create lasting
          value across government, defence, education, and public sectors.
        </p>
        <button className="bg-purple-900 hover:bg-purple-950 text-white text-sm font-medium px-6 py-3 rounded-full inline-flex items-center gap-2">
          Explore More Projects
          <span>→</span>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl items-stretch">
  {projects.map((project) => {
    const textBlock = (
      <div>
        <h3 className="font-semibold text-base mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>
    );

    const videoBlock = (
  <video
    src={project.video}
    autoPlay
    loop
    muted
    playsInline
    className="w-[365.33px] h-[365.33px] object-cover rounded-[8px]"
  />
);

    return (
      <div
        key={project.title}
        className="rounded-[16px] overflow-hidden text-left flex flex-col gap-[32px] p-[24px]"
        style={{ border: "1px solid #E0E2FF" }}
      >
        {project.textFirst ? (
          <>
            {textBlock}
            {videoBlock}
          </>
        ) : (
          <>
            {videoBlock}
            {textBlock}
          </>
        )}
      </div>
    );
  })}
</div>
    </section>
  );
}

export default ProjectsSection;