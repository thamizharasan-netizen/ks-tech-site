import vrFlightImg from "../assets/product-vr-flight.png";
import motionPlatformImg from "../assets/product-6dof-motion.png";
import cbtImg from "../assets/product-cbt.png";
import ikshanaVideoImg from "../assets/product-ikshana-video.png";
import ikshanaMdmImg from "../assets/product-ikshana-mdm.png";
import ikshanaVmsImg from "../assets/product-ikshana-vms.png";
import ikshanaEmsImg from "../assets/product-ikshana-ems.png";

import iaf from "../assets/logos/iaf.png";
import army from "../assets/logos/army.png";
import navy from "../assets/logos/navy.png";
import drdo from "../assets/logos/drdo.png";
import hal from "../assets/logos/hal.png";
import civilAviation from "../assets/logos/civil-aviation.png";
import chandigarh from "../assets/logos/chandigarh.png";
import mtc from "../assets/logos/mtc.png";
import tnSchoolEdu from "../assets/logos/tn-school-education.png";
import fci from "../assets/logos/fci.png";
import tnTemple from "../assets/logos/tn-hr-ce.png";
import bule from "../assets/logos/bule.png";
import dfm from "../assets/logos/dfm.png";
import Punjab from "../assets/logos/Punjab.png";
import tngvn from "../assets/logos/tn-gvn.png";

const products = [
  {
    title: "VR Flight Simulator",
    description:
      "A fully immersive, force-feedback VR flight simulator for fixed-wing and rotary-wing aircraft, delivering realistic pilot training, mission readiness, and emergency response, with deployments across Indian Air Force bases.",
    image: vrFlightImg,
    projects: [
      "Kiran - IAF Basic Jet Trainer",
      "Chetak - IAF/Army Light Utility Helicopter",
      "Mi-17 - IAF Medium Lift Helicopter",
      "HTT-40 - HAL Basic Turboprop Trainer",
    ],
    logos: [
      { src: iaf, width: 74, height: 74 },
      { src: dfm, width: 74, height: 74 },
      { src: navy, width: 74, height: 74 },
      { src: hal, width: 181, height: 74 },,
      { src: civilAviation, width: 192, height: 74 },
    ],
  },
  {
    title: "6DOF Motion Platform",
    description:
      "It is an indigenously developed motion system that delivers realistic six-axis movement for immersive simulation. Designed for defense, aviation and research applications, it can be configured to support diverse simulation environments, payload requirements and operational scenarios.",
    image: motionPlatformImg,
    projects: [
      "Integrated simulator deployment",
      "Standalone platform supply",
      "R&D platform",
    ],
    logos: [
      { src: iaf, width: 74, height: 74 },
      { src: army, width: 74, height: 74 },
      { src: bule, width: 74, height: 74 },
      { src: drdo, width: 75, height: 74 },
      { src: civilAviation, width: 192, height: 74 },
    ],
  },
  {
    title: "CBT Platform",
    description:
      "Role-based digital learning system designed for technical and procedural training with a focus on accuracy, traceability and scalability. Successfully deployed with HAL for the HTT-40 aircraft programme, it is adaptable for defence, aviation, government and industrial training requirements.",
    image: cbtImg,
    projects: [
      "Deployed within the client's IT infrastructure",
      "Centrally hosted for multisite access",
      "Merges on-premises and cloud deployment.",
      "Inside simulator training environments",
    ],
    logos: [
      { src: hal, width: 181, height: 74 },
      { src: iaf, width: 74, height: 74 },
      { src: army, width: 74, height: 74 },
      { src: bule, width: 74, height: 74 },
      { src: drdo, width: 74, height: 74 },
      { src: tnSchoolEdu, width: 73, height: 74 },
    ],
  },
  {
    title: "Ikshana Video Analytics",
    description:
      "Ikshana Video Analytics is our AI powered video analytics platform that transforms conventional surveillance systems into intelligent security solutions. Using deep learning, it enables real-time event detection, automated threat identification and actionable alerts across 25+ use cases, with deployments in some of India's most demanding public safety environments.",
    image: ikshanaVideoImg,
    projects: [
      "Edge Deployment",
      "Centralised Server Deployment",
      "Cloud Deployment",
      "Hybrid Deployment",
    ],
    logos: [
      { src: tnTemple, width: 74, height: 74 },
      { src: mtc, width: 74, height: 74 },
      { src: army, width: 74, height: 74 },
      { src: fci, width: 74, height: 74 },
      { src: tnSchoolEdu, width: 73, height: 74 },
      { src: Punjab, width: 74, height: 74 },
      { src: chandigarh, width: 74, height: 74 },
    ],
  },
  {
    title: "Ikshana MDM -Mobile Device Management",
    description:
      "Ikshana MDM is used for centrally managing, securing, monitoring and configuring mobile devices at scale. Designed for large government deployments, it enables real-time device administration through a single, customisable management console",
    image: ikshanaMdmImg,
    projects: ["Cloud Hosted MDM", "Hybrid MDM", "On-Premises MDM"],
    logos: [
      { src: army, width: 74, height: 74 },
      { src: tnSchoolEdu, width: 60, height: 60 },
      { src: Punjab, width: 73, height: 74 },
      { src: chandigarh, width: 74, height: 74 },
    ],
  },
  {
    title: "Ikshana Video Management System (VMS)",
    description:
      "Ikshana VMS unifies live monitoring, video recording, event management and evidence handling across multiple sites through a single interface. Designed for large-scale government and defense deployments, it provides a secure and scalable command environment.",
    image: ikshanaVmsImg,
    projects: [
      "Installed for complete data management.",
      "Hosted platform with remote multi-site access.",
      "Cloud management with local storage solutions.",
      "Integrated with command-control platforms.",
    ],
    logos: [
      { src: tnTemple, width: 74, height: 74 },
      { src: fci, width: 74, height: 74 },
      { src: tngvn, width: 74, height: 74 },
      { src: Punjab, width: 74, height: 74 },
      { src: army, width: 74, height: 74 },
      { src: mtc, width: 74, height: 74 },
    ],
  },
  {
    title: "Ikshana EMS - Enterprise Management System",
    description:
      "Ikshana EMS provides real-time visibility into school infrastructure, attendance, academic performance and compliance through a unified dashboard. It enables data-driven administration by automating processes and delivering continuous operational insights.",
    image: ikshanaEmsImg,
    projects: [
      "District Deployment",
      "State Deployment",
      "Programme Deployment",
      "Integrated Stack Deployment",
    ],
    logos: [
      { src: tnTemple, width: 74, height: 74 },
      { src: fci, width: 74, height: 74 },
      { src: tngvn, width: 74, height: 74 },
      { src: Punjab, width: 74, height: 74 },
      { src: army, width: 74, height: 74 },
      { src: mtc, width: 74, height: 74 },
      
    ],
  },
];

function ProductCard({ product, index }) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-start gap-8 md:gap-10 pb-10 border-b border-gray-100 last:border-b-0`}
    >
      <img
        src={product.image}
        alt={product.title}
        className="rounded-xl object-cover w-full md:w-[380px] flex-shrink-0"
        style={{ aspectRatio: "4 / 3" }}
      />

      <div className="flex-1">
        <h3 className="font-['Open_Sans'] font-bold text-xl md:text-2xl text-gray-900 mb-2">
          {product.title}
        </h3>
        <p className="font-['Open_Sans'] text-sm text-gray-600 leading-relaxed mb-4">
          {product.description}
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="font-['Open_Sans'] font-semibold text-sm text-gray-900 mb-2">
            Projects
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
            {product.projects.map((proj, i) => (
              <li
                key={i}
                className="font-['Open_Sans'] text-sm text-gray-600 flex items-start gap-2"
              >
                <span className="text-purple-400 mt-1">●</span> {proj}
              </li>
            ))}
          </ul>
        </div>

        {product.logos.length > 0 && (
          <div className="flex items-center gap-3 flex-wrap">
            {product.logos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt=""
                className="object-contain"
                style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductsGlance() {
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
        gap: "64px",
      }}
    >
      <div className="text-center">
        <h2 className="font-['Open_Sans'] font-bold text-2xl md:text-3xl text-gray-900 mb-2">
          Products at a Glance
        </h2>
        <p className="font-['Open_Sans'] text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Empowering defence, aviation, research, and public safety with
          mission-critical technologies, advanced analytics, and real-time
          operational intelligence.
        </p>
      </div>

      {products.map((product, i) => (
        <ProductCard key={product.title} product={product} index={i} />
      ))}
    </section>
  );
}

export default ProductsGlance;