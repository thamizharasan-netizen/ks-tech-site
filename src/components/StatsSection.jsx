import diagramImg from "../assets/diagram.png";

function StatsSection() {
  return (
    <section className="bg-white px-[80px] py-[80px]">
      <div className="flex flex-col lg:flex-row gap-[40px] items-center max-w-6xl mx-auto">
        {/* Left: diagram - fixed 514px */}
        <div className="shrink-0 flex justify-center">
          <div
            className="w-[514px] h-[514px] rounded-[8px] border bg-white flex items-center justify-center"
            style={{ borderColor: "#E6E6E6" }}
          >
            <img
              src={diagramImg}
              alt="KS Smart ecosystem diagram"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* Right: text content - fills remaining space, 24px internal gap */}
        <div className="flex flex-col gap-[24px] w-full">
          <div>
            <p className="text-purple-700 text-sm font-semibold mb-2">
              Our Transformation Story
            </p>
            <h2 className="text-3xl md:text-4xl font-Open Sans text-gray-900">
              Turning invention into infrastructure people can trust
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Technology is transforming the world, driving smarter, faster and
            more efficient ways of working. At KS Smart, we turn innovation
            into reliable, real-world solutions that empower governments and
            industries to enhance operations, accelerate digital
            transformation and create lasting value. Guided by our commitment
            to 'Reliable Tech. Real-World Impact.', we deliver scalable,
            future-ready technologies that people and systems can trust every
            day.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-[8px]">
            <div
              className="flex flex-col items-center justify-center text-center rounded-[8px] border p-[8px]"
              style={{ borderColor: "#F6EBFF" }}
            >
              <p className="text-xl font-bold text-gray-900">10 +</p>
              <p className="text-xs text-gray-500 mt-1">
                Years Deep-Tech Delivery
              </p>
            </div>

            <div
              className="flex flex-col items-center justify-center text-center rounded-[8px] border p-[8px]"
              style={{ borderColor: "#F6EBFF" }}
            >
              <p className="text-xl font-bold text-gray-900">20 +</p>
              <p className="text-xs text-gray-500 mt-1">
                Government &amp; defence Clients
              </p>
            </div>

            <div
              className="flex flex-col items-center justify-center text-center rounded-[8px] border p-[8px]"
              style={{ borderColor: "#F6EBFF" }}
            >
              <p className="text-xl font-bold text-gray-900">4</p>
              <p className="text-xs text-gray-500 mt-1">Core Sectors served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;