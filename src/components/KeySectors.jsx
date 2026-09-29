import { useState } from "react";

const sectorsData = {
  Defence: [
    {
      number: "01",
      client: "Hindustan Aeronautics Limited",
      description: "Provided software solutions for Hindustan Turbo Trainer-40",
      value: "₹22 crores",
    },
    {
      number: "02",
      client: "Defence Research and Development Organisation",
      description: "Provided solutions for Rail Track Rocket Sled (RTRS) facility.",
      value: "₹6.5 crores",
    },
    {
      number: "03",
      client: "Indian Armed Forces",
      description: "Provided solution for long range surveillance system in Nainital.",
      value: "₹22.5 crores",
    },
    {
      number: "04",
      client: "Combat Army Aviation Training School, Nashik",
      description: "Helped to upgrade Cheetah Simulator.",
      value: "₹8.98 crores",
    },
  ],
  Education: [
    {
      number: "01",
      client: "Tamil Nadu Education",
      description: "Distributed 3.25 lakhs advanced laptops across government schools.",
      value: "₹650 crores",
    },
    {
      number: "02",
      client: "Punjab school education",
      description:
        "Distributed 23,846 advanced desktops, 23,207 Uninterruptible Power Supply (UPS) and 4,960 Interactive Flat Panels.",
      value: "₹230 crores",
    },
    {
      number: "03",
      client: "Kerala State Electronics Development Corporation Limited",
      description:
        "Deployed 2,233 Samsung 1-star LED Ultra HD TVs across Anganwadi centres in Tamil Nadu to enhance digital learning infrastructure.",
      value: "₹4.38 crores",
    },
  ],
  "Public Service Sector": [
    {
      number: "01",
      client: "Tamil Nadu and Gujarat Integrated Child Development Services (ICDS)",
      description:
        "Distributed 2,233 Smart TVs installed across Anganwadi centres and 29,236 smartphones across 20 districts.",
      value: "₹125 crores",
    },
    {
      number: "02",
      client: "Odisha Computer Application Centre (OCAC) CCTV",
      description: "Provided complete surveillance infrastructure for Excise Department across 66 locations.",
      value: "₹6.10 crores",
    },
    {
      number: "03",
      client: "Greater Chennai Corporation Switch Project",
      description: "Replaced old network switches in Amma Maaligai.",
      value: "₹6 crores",
    },
    {
      number: "04",
      client: "Kendriya Bhandar (Rajasthan Government)",
      description:
        "Deployed end-to-end robotics system and Science, Technology, Engineering and Mathematics (STEM) labs across 614 schools.",
      value: "₹6.88 crores",
    },
    {
      number: "05",
      client: "Haryana State Electronics Development Corporation Limited",
      description:
        "Distributed 29,236 Smartphones with Poshan tracking software by social welfare and Nutritious Meal Programme Department Tamil Nadu.",
      value: "₹33.8 crores",
    },
    {
      number: "06",
      client: "Kerala State Electronics Development Corporation Limited.",
      description:
        "Supplied 55,523 units of Samsung Galaxy Smartphone A06 5G (6GB/128GB) under the ICDS scheme of the Women and Child Development Department, Government of Gujarat.",
      value: "₹83.51 crores",
    },
  ],
};

function KeySectors() {
  const [activeTab, setActiveTab] = useState("Defence");
  const tabs = Object.keys(sectorsData);

  return (
    <section
      className="w-full mx-auto"
      style={{
        maxWidth: "1440px",
        backgroundColor: "#FFFFFF",
        paddingTop: "64px",
        paddingRight: "80px",
        paddingBottom: "64px",
        paddingLeft: "80px",
      }}
    >
      <div className="flex flex-col" style={{ gap: "32px" }}>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-['Open_Sans'] font-bold text-2xl md:text-3xl text-gray-900 mb-3">
            Our Key Sectors
          </h2>
          <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600">
            Delivering innovative technology solutions that address
            real-world challenges, enhance operational efficiency, and
            create lasting value across industries and government sectors.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-sm font-['Open_Sans'] font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* List */}
<div className="flex flex-col gap-4">
  {sectorsData[activeTab].map((item) => (
    <div
      key={item.number}
      className="flex items-center justify-between"
      style={{
        borderRadius: "16px",
        border: "1px solid #F6EBFF",
        backgroundColor: "#F8F8F8",
        padding: "24px",
      }}
    >
      <div className="flex items-start gap-4">
        <span
  className="font-['Open_Sans'] font-bold"
  style={{
    width: "74px",
    height: "80px",
    fontSize: "64px",
    lineHeight: "80px",
    letterSpacing: "0px",
    color: "#BD8BFC",
  }}
>
  {item.number}
</span>
        <div>
          <p className="font-['Open_Sans'] font-semibold text-base text-gray-900">
            {item.client}
          </p>
          <p className="font-['Open_Sans'] text-sm text-gray-500">
            {item.description}
          </p>
        </div>
      </div>
      <span className="font-['Open_Sans'] font-bold text-lg md:text-xl text-gray-900 flex-shrink-0 ml-4">
        {item.value}
      </span>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

export default KeySectors;