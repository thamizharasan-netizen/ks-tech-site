import keshavImg from "../assets/keshav-founders.png";
import rohanImg from "../assets/rohan-ramaswamy.png";
import venkateshImg from "../assets/venkatesh-subramanyam.png";
import puneetImg from "../assets/puneet-rakesh-pandey.png";
import reshmaImg from "../assets/reshma-dilip-kumar.png";
import rajanImg from "../assets/rajan-chaurasiya.png";
import vigneshImg from "../assets/vignesh-seethapathi.png";
import priyankaImg from "../assets/priyanka-malpani.png";

const annualReportYears = [
  "2008 - 2009", "2009 - 2010", "2010 - 2011", "2011 - 2012", "2012 - 2013",
  "2013 - 2014", "2014 - 2015", "2015 - 2016", "2016 - 2017", "2017 - 2018",
  "2018 - 2019", "2019 - 2020", "2020 - 2021", "2021 - 2022", "2022 - 2023",
  "2023 - 2024", "2024 - 2025", "2025 - 2026",
].map((label) => ({ label }));

const investorsData = {
  "corporate-governance": {
    tabs: [
      { name: "Integrated Governance Report", type: "reports" },
      { name: "Board & Committees", type: "boardCommittees" },
      { name: "Disclosure u/r 46", type: "reports" },
      { name: "Newspaper Advertisements", type: "reports" },
      { name: "Investor Information", type: "richContent" },
    ],
    reportsByTabAndYear: {
      "Integrated Governance Report": {
        "2025-2026": [
          { label: "June 2025 CG Report" },
          { label: "September 2025 CG Report" },
          { label: "December 2025 CG Report" },
          { label: "March 2026 CG Report" },
        ],
      },
    },
    boardCommittees: {
      subTabs: ["Board", "Committees"],
      membersBySubTab: {
        Board: [
          {
            name: "Keshav A S",
            title: "Managing Director & Chairman",
            bio: "Mr. Anancha Perumal Selvi Keshav holds a Bachelor of Engineering (B.E.) degree from Anna University. He has over 10 years of experience in emerging technologies and their practical applications, with expertise in technology implementation, innovation-driven solutions and execution of tech-enabled projects. His experience includes working on development and deployment of technology solutions and supporting business operations through adoption of new and evolving technologies.",
            image: keshavImg,
          },
          {
            name: "Rohan Ramaswamy",
            title: "Executive Director",
            bio: "Mr. Rohan Ramaswamy is a technology professional with experience in leading innovation-driven initiatives and multidisciplinary technical teams. His expertise includes end-to-end design and deployment of advanced technology solutions such as ICT, IoT and AR/VR platforms. He has led research and development initiatives involving AI-powered analytics, immersive simulation technologies and next-generation digital infrastructure.",
            image: rohanImg,
          },
          {
            name: "Venkatesh Subramanyam",
            title: "Non-Executive Non-Independent Director",
            bio: "Mr. Venkatesh Subramanyam is a business and technology leader driving strategy, innovation, and digital transformation. An MBA Gold Medalist, he leads government-focused initiatives, smart city, ICT, and AR/VR solutions while managing large-scale projects. His expertise in strategic partnerships and execution delivers impactful, future-ready technology solutions.",
            image: venkateshImg,
          },
          {
            name: "Puneet Rakesh Pandey",
            title: "Non-Executive Independent Director",
            bio: "Mr. Puneet Rakesh Pandey is a Tax & Audit professional with over five years of experience in statutory, internal, and ASM bank audits. He is actively involved in SFIO investigations, showcasing strong analytical skills and high ethical standards. Skilled at simplifying complex tax laws into practical strategies, he delivers insightful financial reports focused on efficiency and excellence.",
            image: puneetImg,
          },
          {
            name: "Reshma Dilip Kumar",
            title: "Non-Executive Independent Director",
            bio: "Mrs. Reshma Dilip is a Chartered Accountant and an experienced Indirect Tax professional. She holds a Bachelor of Commerce degree from the University of Madras and is a member of the Institute of Chartered Accountants of India. She has expertise in indirect tax laws and related compliance matters.",
            image: reshmaImg,
          },
          {
            name: "Rajan Chaurasiya",
            title: "Non-Executive Independent Director",
            bio: "Mr. Rajan Chaurasiya, a CA Finalist (ICAI) and B.Com graduate from the University of Mumbai, has over 6 years of experience in audit and accounting. He specializes in finalizing books and conducting statutory and tax audits, with expertise in forensic and concurrent audits, as well as Income Tax, GST, TDS, and regulatory compliance.",
            image: rajanImg,
          },
        ],
        Committees: [
          {
            name: "Audit Committee",
            members: [
              { name: "Mrs. Reshma D", designation: "Chairperson" },
              { name: "Mr. Rajana Chaurasiya", designation: "Member" },
              { name: "Mr. Puneet Rakesh Pandey", designation: "Member" },
            ],
          },
          {
            name: "Nomination & Remuneration Committee",
            members: [
              { name: "Mrs. Reshma D", designation: "Chairperson" },
              { name: "Mr. Rajana Chaurasiya", designation: "Member" },
              { name: "Mr. Puneet Rakesh Pandey", designation: "Member" },
              { name: "Mr. Venkatesh Subramanyam", designation: "Member" },
            ],
          },
          {
            name: "Stakeholders Relationship Committee",
            members: [
              { name: "Mrs. Reshma D", designation: "Chairperson" },
              { name: "Mr. Keshav A S", designation: "Member" },
              { name: "Mr. Venkatesh Subramanyam", designation: "Member" },
              { name: "Mr. Rohan Ramaswamy", designation: "Member" },
            ],
          },
          {
            name: "Corporate Social Responsibility Committee",
            members: [
              { name: "Mrs. Reshma D", designation: "Chairperson" },
              { name: "Mr. Puneet Rakesh Pandey", designation: "Member" },
              { name: "Mr. Rohan Ramaswamy", designation: "Member" },
            ],
          },
        ],
      },
      keyManagerialPersonnel: [
        {
          name: "Vignesh Seethapathi",
          title: "Chief Financial Officer",
          bio: "Mr. Vignesh Seethapathi is a finance professional with expertise in financial strategy, budgeting, regulatory compliance, treasury management, and statutory audits. He plays a key role in IPO readiness, investor relations, audit coordination, and evaluating investment opportunities, ensuring strong financial governance and sustainable business growth.",
          image: vigneshImg,
        },
        {
          name: "Priyanka Malpani",
          title: "Company Secretary & Compliance Officer",
          bio: "Ms. Priyanka Malpani is a Company Secretary professional with over eight years of experience specialising in corporate governance, regulatory compliance, IPOs and M&A. She has managed end-to-end secretarial and compliance functions for multiple companies. She holds a Master of Business Law from the National Law School of India University, Bengaluru.",
          image: priyankaImg,
        },
      ],
    },
    richContent: {
      "Investor Information": {
        intro:
          "Authority to determine the materiality of information and disclosures to stock exchanges. The following Key Managerial Personnel of the company are authorised to determine the materiality of an event or information for the purpose of making disclosures to stock exchanges under Regulation 30 of the Securities and Exchange Board of India (Listing Obligations and Disclosure Requirements) Regulations, 2015.",
        sections: [
          {
            heading: "Name and Designation",
            numberedList: [
              "Mr. Keshav A S -  Managing Director",
              "Mr. Vignesh -  Chief Financial Officer",
              "MS. Priyanka Malpani -  Company secretary & Compliance Officer",
            ],
            fields: [
              { label: "Contact", value: "+91 72003 94611" },
              { label: "Email", value: "hello@ksstech.co" },
            ],
          },
          {
            heading: "Registrar and Transfer Agent",
            fields: [
              { label: "Name", value: "Adroit Corporate Services Pvt ltd" },
              { label: "Address", value: "Adroit Corporate Services Pvt ltd 18 -20, 1st Floor, Plot No.639, Makhwana Road, Marol, Andheri" },
              { label: "Telephone", value: "(022) 42270400  |  (022) 42270400" },
              { label: "Fax", value: "(022) 28503748" },
              { label: "Email", value: "pratapp@adroitcorporate.com" },
            ],
          },
          {
            heading: "For Compliance, Investor Complaints redressal and for more information",
            fields: [
              { label: "Name", value: "Ms. Priyanka Malpani" },
              { label: "Designation", value: "Company Secretary & Compliance Officer" },
              { label: "Email", value: "hello@ksstech.co  |  priyanka@kssmart.co" },
            ],
          },
        ],
      },
    },
  },

  "financial-information": {
    tabs: [
      { name: "Annual Report", type: "yearlyReports" },
      { name: "Financial Results", type: "yearlyReportsWithYear" },
      { name: "Statement of Deviation & Variation", type: "flatReports" },
    ],
    reportsByTabAndYear: {},
    yearlyReportsByTab: {
      "Annual Report": {
        subTabs: ["KSS Tech", "Subsidiaries"],
        reportsBySubTab: {
          "KSS Tech": annualReportYears,
          Subsidiaries: [
            { label: "FS 2025-2026 - Southern Electric Metering Private Limited" },
          ],
        },
      },
      "Financial Results": {
        subTabs: ["Quarterly results", "Related Party Transactions"],
        reportsBySubTabAndYear: {
          "Quarterly results": {
            "2026-2027": [{ label: "June 2026" }],
          },
          "Related Party Transactions": {},
        },
      },
    },
    flatReportsByTab: {
      "Statement of Deviation & Variation": [
        { label: "MA Report June 30 2026" },
        { label: "MA Report March 31 2026" },
        { label: "MA Report December 31 2025" },
        { label: "Addendum MA Report June 30 2026" },
      ],
    },
  },

  "policies-and-conduct": {
    tabs: [],
    flatReports: [
      { label: "Whistle Blower Policy" },
      { label: "Preservation and Archival Policy" },
      { label: "Risk Management Policy" },
      { label: "Nomination and Remuneration Policy" },
    ],
  },

  "shareholders-meeting": {
    tabs: [
      { name: "Notices", type: "flatReports" },
      { name: "Postal Ballot", type: "flatReports" },
      { name: "Shareholders' Meetings", type: "flatReports" },
      { name: "Others", type: "flatReports" },
    ],
    flatReportsByTab: {
      Notices: [
        { label: "35th AGM Notice" },
      ],
      "Postal Ballot": [
        { label: "Postal ballot notice dated 04th March 2026" },
        { label: "Voting Results and Scrutinixer's Report" },
      ],
      "Shareholders' Meetings": [
        { label: "Newspaper publication for EGM Notice." },
        { label: "Notice of 02/2025-26 EGM" },
        { label: "EGM Notice" },
        { label: "PCS Compliance Certificate Company Website" },
        // more rows below the fold in your screenshot — send the scrolled view if there are additional items
      ],
      Others: [
        { label: "Intimation of 35th Annual General Meeting" },
        { label: "Intimation of Notice of Postal Ballot" },
        { label: "Newspaper Publication for AGM" },
        { label: "Newspaper Publication for Postal Ballot" },
      ],
    },
  },
  "statutory-documents-open-offer": {
    tabs: [],
    flatReports: [
      { label: "Public Announcement" },
      { label: "Detailed Public statement" },
      { label: "Draft letter of offer" },
      { label: "Corrigendum to Detailed Public statement" },
      // more rows below the fold — there's a partial row and scrollbar
      // visible in your screenshot, send the scrolled view for the rest
    ],
  },
    "stock-exchange-disclosures": {
    tabs: [
      { name: "Board Meeting Intimation", type: "yearlyReports" },
      { name: "Statutory Disclosures", type: "flatReports" },
      { name: "Shareholding Pattern", type: "reports" },
      { name: "Secretarial Compliance Report", type: "flatReports" },
      { name: "Other Disclosures", type: "flatReports" },
    ],
    reportsByTabAndYear: {
      "Shareholding Pattern": {
        "2026-2027": [{ label: "March 2026" }],
      },
    },
    yearlyReportsByTab: {
      "Board Meeting Intimation": {
        subTabs: ["Intimation", "Outcome"],
        reportsBySubTab: {
          Intimation: [
            { label: "May 2026" },
            { label: "August 2026" },
            { label: "September 2026" },
          ],
          Outcome: [
            // Add once you share that sub-tab's Figma frame.
          ],
        },
      },
    },
    flatReportsByTab: {
      "Statutory Disclosures": [
        // Add once you share that tab's Figma frame.
      ],
      "Shareholding Pattern": [
        // no longer used — this tab now uses reportsByTabAndYear above
      ],
      "Secretarial Compliance Report": [
        // Add once you share that tab's Figma frame.
      ],
            "Other Disclosures": [
        { label: "Outcome of Board Meeting held on Friday, September 11, 2026 for raising of funds and MoA alteration" },
        { label: "Closure of Trading Window" },
        { label: "Newspaper ad Financials June 2026" },
        { label: "Change in Registered Office Address" },
        // more rows below the fold — scrollbar is visible, send the
        // scrolled view for anything past "Change in Registered Office Address"
      ],
    },
  },
    "mgt-7-mgt-7a": {
    tabs: [],
    flatReports: [
      { label: "2025" },
      { label: "2024" },
      { label: "2023" },
      { label: "2022" },
    ],
  },
};

export const sidebarItems = [
  { key: "corporate-governance", label: "Corporate Governance" },
  { key: "financial-information", label: "Financial Information" },
  { key: "policies-and-conduct", label: "Policies And Conduct" },
  { key: "shareholders-meeting", label: "Shareholders Meeting" },
  { key: "statutory-documents-open-offer", label: "Statutory Documents - Open Offer" },
  { key: "stock-exchange-disclosures", label: "Stock Exchange Disclosures" },
  { key: "mgt-7-mgt-7a", label: "MGT-7/MGT-7A" },
];

export const availableYears = ["2025-2026", "2026-2027"];

export default investorsData;