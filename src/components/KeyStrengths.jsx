const rows = [
  {
    strength: "Customer-Centricity And Partnerships",
    capabilities: [
      "Customer-centric and outcome-driven solutions",
      "Multi-sector expertise",
      "Proven execution of multi-location projects",
    ],
    kpis: [
      "States covered: 28",
      "Number of sectors: 4",
      "Government and defence clients: 20+",
      "Project delivered: 600+ crores",
    ],
  },
  {
    strength: "Time-To-Market Positioning",
    capabilities: [
      "AI-led digital transformation capabilities",
      "Expertise in simulation, robotics and surveillance systems",
    ],
    kpis: [
      "Uptime commitment: 99%",
      "AI-powered analytics use cases: 25+",
      "Facilities under AI surveillance: 9,500+",
      "Data points captured per day: 10,000",
    ],
  },
  {
    strength: "Strategic Opportunity Utilisation",
    capabilities: [
      "Education infrastructure development",
      "Technology-driven market opportunities",
      "Strategic capability enhancement",
    ],
    kpis: [
      "Server storage: 4PB+",
      "Devices under active management: 5+ lakhs",
      "Smart classrooms deployed: 22,931+",
      "Robotic kits: 6,000+",
    ],
  },
  {
    strength: "Resilient Execution",
    capabilities: [
      "Defence R&D ecosystem presence",
      "Aircraft training and defence surveillance expertise",
    ],
    kpis: [
      "Years of defence project delivery: 5+",
      "Surveillance systems deployed in active forward areas: 20+",
      "Simulators deployed across active defence bases: 75+",
    ],
  },
  {
    strength: "Indigenous Technology And Innovation",
    capabilities: [
      "Proprietary made-in-India platforms",
      "In-house products",
      "Critical indigenous solutions",
    ],
    kpis: [
      "Make in India compliant: 100%",
      "Smart electricity meters installed: 20,000",
      "Smart bulk water meters installed: 500+",
      "In-house products: 9",
    ],
  },
  {
    strength: "Scalable Delivery Excellence",
    capabilities: [
      "Devices managed",
      "Deployment locations",
      "Projects delivered",
    ],
    kpis: [
      "Camera deployed and managed: 72,000",
      "Tablets: 80,000+",
      "Laptops: 3+ lakhs",
    ],
  },
];

function BulletList({ items }) {
  return (
    <ul className="list-disc list-inside space-y-1">
      {items.map((item, i) => (
        <li key={i} className="font-['Open_Sans'] text-sm text-gray-600">
          {item}
        </li>
      ))}
    </ul>
  );
}

function KeyStrengths() {
  return (
    <section
      className="w-full mx-auto px-6 md:px-[120px] py-10 md:py-[80px]"
      style={{ maxWidth: "1440px", backgroundColor: "#F8F8F8" }}
    >
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="text-center">
          <h2 className="font-['Open_Sans'] font-bold text-2xl md:text-3xl text-gray-900 mb-2">
            Key Strengths
          </h2>
          <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600">
            Creating Intelligent Value
          </p>
        </div>

        <div className="border border-gray-200 rounded-xl overflow-x-auto bg-white">
          <table className="w-full border-collapse" style={{ minWidth: "700px" }}>
            <thead>
              <tr style={{ backgroundColor: "#FBDCEF" }}>
                <th
                  className="font-['Open_Sans'] font-semibold text-sm text-center py-4 px-4 border-r border-gray-200 w-1/4"
                  style={{ color: "#C0248D" }}
                >
                  Competitive Strengths
                </th>
                <th
                  className="font-['Open_Sans'] font-semibold text-sm text-center py-4 px-4 border-r border-gray-200"
                  style={{ color: "#C0248D" }}
                >
                  Capabilities
                </th>
                <th
                  className="font-['Open_Sans'] font-semibold text-sm text-center py-4 px-4"
                  style={{ color: "#C0248D" }}
                >
                  KPIs
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.strength} className="border-t border-gray-200">
                  <td className="font-['Open_Sans'] text-sm font-medium text-gray-900 align-top py-5 px-4 border-r border-gray-200">
                    {row.strength}
                  </td>
                  <td className="align-top py-5 px-4 border-r border-gray-200">
                    <BulletList items={row.capabilities} />
                  </td>
                  <td className="align-top py-5 px-4">
                    <BulletList items={row.kpis} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default KeyStrengths;