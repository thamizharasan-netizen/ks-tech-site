import diagramImage from "../assets/vision-mission-diagram.png";

function VisionMission() {
  return (
    <section
      className="w-full mx-auto px-6 md:px-[120px] py-10 md:py-[80px]"
      style={{ maxWidth: "1440px", backgroundColor: "#F8F8F8" }}
    >
      <div className="flex flex-col items-center gap-8 md:gap-10">
        <div className="text-center max-w-2xl">
          <p className="font-['Open_Sans'] font-semibold text-sm text-purple-700 uppercase tracking-wide mb-2">
            Solving what Matters
          </p>
          <h2 className="font-['Open_Sans'] font-semibold text-2xl md:text-3xl text-gray-900 mb-3">
            Our Vision &amp; Mission
          </h2>
          <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600">
            Schools require reliable infrastructure, connectivity, hardware,
            support services, and long-term maintenance to sustain
            meaningful digital learning outcomes at scale.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full md:w-[1200px] max-w-full">
          <div
            className="flex items-center justify-center flex-shrink-0 mx-auto md:mx-0"
            style={{
              width: "min(100%, 496px)",
              height: "auto",
              minHeight: "300px",
              backgroundColor: "#F2F2F2",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0px 7px 24px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={diagramImage}
              alt="Vision, Mission, and Values diagram"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="flex flex-col gap-2 w-full md:w-[684px]">
            <div
              style={{
                borderRadius: "10px",
                border: "1px solid #FF96C3",
                padding: "20px",
                backgroundImage: "linear-gradient(135deg, #FFD7E8 0%, #FFD8E8 25%)",
              }}
            >
              <h3 className="font-['Open_Sans'] font-semibold text-base md:text-lg text-gray-900 mb-2">
                Our Mission
              </h3>
              <p className="font-['Open_Sans'] text-sm text-gray-600 leading-relaxed">
                KS Smart is securing India's digital sovereignty through
                innovative B2G technology solutions that connect governments
                with citizens, accelerate public service delivery, and
                strengthen national defence. From the edge to the cloud and
                from campuses to borders, we enable large-scale government
                initiatives with faster implementation and measurable public
                impact. By developing in-house products and intellectual
                property, we deliver scalable, technology-driven platforms
                that enhance education, public safety, governance, and
                digital transformation across critical sectors.
              </p>
            </div>

            <div
              style={{
                borderRadius: "10px",
                border: "1px solid #B7E3C3",
                padding: "20px",
                backgroundImage: "linear-gradient(135deg, #E4F7EA 0%, #EAF9EE 25%)",
              }}
            >
              <h3 className="font-['Open_Sans'] font-semibold text-base md:text-lg text-gray-900 mb-2">
                Our Vision
              </h3>
              <p className="font-['Open_Sans'] text-sm text-gray-600 leading-relaxed">
                We envision a future where technology enables smarter, more
                inclusive, and responsive governance. Rooted in India's
                digital transformation journey, we empower governments
                through innovative solutions in defence, education, public
                safety, and immersive technologies. From VR flight simulators
                and advanced EdTech platforms to interactive AR experiences,
                we deliver impactful, Made-in-India innovations. Guided by
                sustainability, scalability, and local innovation, we are
                building future-ready technology platforms that address
                global challenges and support governments in achieving
                long-term digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;