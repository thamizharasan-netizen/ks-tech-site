import { useState } from "react";
import { Download } from "lucide-react";
import investorsData, { sidebarItems, availableYears } from "../data/investorsData";
import BoardMemberCard from "./BoardMemberCard";
import CommitteesTable from "./CommitteesTable";
import RichContentPanel from "./RichContentPanel";

function ReportRow({ report }) {
  return (
    <div className="flex items-center justify-between py-4">
      <span className="font-['Open_Sans'] text-sm md:text-base text-gray-800">{report.label}</span>
      <a href={report.fileUrl || "#"} download className="flex items-center gap-1.5 border border-gray-300 rounded-md px-3 py-1.5 text-sm font-['Open_Sans'] text-gray-700 hover:bg-gray-50">
        <Download size={14} />
        .pdf
      </a>
    </div>
  );
}

function EmptyMessage({ text }) {
  return <p className="py-6 text-sm font-['Open_Sans'] text-gray-400">{text}</p>;
}

function InvestorsContent() {
  const [activeSection, setActiveSection] = useState("corporate-governance");
  const [activeTab, setActiveTab] = useState("Integrated Governance Report");
  const [activeYear, setActiveYear] = useState(availableYears[0]);
  const [activeSubTab, setActiveSubTab] = useState("Board");
  const [activeYearlySubTab, setActiveYearlySubTab] = useState("");

  const section = investorsData[activeSection];
  const tabsList = section?.tabs ?? [];
  const isFlatSection = tabsList.length === 0 && Array.isArray(section?.flatReports);
  const currentTabConfig = tabsList.find((t) => t.name === activeTab);
  const tabType = isFlatSection ? "flatSection" : currentTabConfig?.type ?? "reports";

  const reports = section?.reportsByTabAndYear?.[activeTab]?.[activeYear] ?? [];
  const boardData = section?.boardCommittees;
  const members = boardData?.membersBySubTab?.[activeSubTab] ?? [];
  const richContentData = section?.richContent?.[activeTab];
  const flatReports = section?.flatReportsByTab?.[activeTab] ?? [];

  const yearlyReportsConfig = section?.yearlyReportsByTab?.[activeTab];
  const currentYearlySubTab = yearlyReportsConfig?.subTabs?.includes(activeYearlySubTab)
    ? activeYearlySubTab
    : yearlyReportsConfig?.subTabs?.[0] ?? "";
  const yearlyReports = yearlyReportsConfig?.reportsBySubTab?.[currentYearlySubTab] ?? [];
  const yearlyReportsWithYear =
    yearlyReportsConfig?.reportsBySubTabAndYear?.[currentYearlySubTab]?.[activeYear] ?? [];

  const showYearDropdown = tabType === "reports" || tabType === "yearlyReportsWithYear";

  const handleSectionChange = (key) => {
    setActiveSection(key);
    const firstTab = investorsData[key]?.tabs?.[0]?.name ?? "";
    setActiveTab(firstTab);
    setActiveSubTab("Board");
    setActiveYearlySubTab("");
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setActiveSubTab("Board");
    setActiveYearlySubTab("");
  };

  const activeSectionLabel = sidebarItems.find((s) => s.key === activeSection)?.label;

  const subTabClass = (isActiveSub) =>
    isActiveSub
      ? "px-4 py-1.5 rounded-md text-sm font-['Open_Sans'] font-medium"
      : "px-4 py-1.5 rounded-md text-sm font-['Open_Sans'] font-medium text-gray-600 border border-gray-200";
  const subTabStyle = (isActiveSub) =>
    isActiveSub ? { backgroundColor: "#471556", color: "#FFFFFF" } : {};

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[80px] py-10 flex flex-col md:flex-row items-start gap-8">
      <div className="w-full md:w-[280px] flex-shrink-0 flex flex-col gap-1">
        {sidebarItems.map((item) => {
          const isActive = activeSection === item.key;
          const btnClass = isActive
            ? "text-left px-4 py-3 rounded-lg font-['Open_Sans'] text-sm transition-colors text-white font-semibold"
            : "text-left px-4 py-3 rounded-lg font-['Open_Sans'] text-sm transition-colors text-gray-700 hover:bg-gray-100";
          const btnStyle = isActive ? { backgroundColor: "#471556" } : {};
          return (
            <button key={item.key} onClick={() => handleSectionChange(item.key)} className={btnClass} style={btnStyle}>
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <h2 className="font-['Open_Sans'] font-bold text-2xl md:text-[28px] text-gray-900">{activeSectionLabel}</h2>

          {showYearDropdown && (
            <select value={activeYear} onChange={(e) => setActiveYear(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-['Open_Sans'] text-gray-700">
              {availableYears.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          )}
        </div>

        {tabsList.length > 0 && (
          <div className="flex flex-wrap gap-6 border-b border-gray-200 mb-6">
            {tabsList.map((tab) => {
              const isActiveTab = activeTab === tab.name;
              const tabClass = isActiveTab
                ? "pb-3 text-sm font-['Open_Sans'] transition-colors font-semibold border-b-2"
                : "pb-3 text-sm font-['Open_Sans'] transition-colors text-gray-500";
              const tabStyle = isActiveTab ? { color: "#A6266D", borderColor: "#A6266D" } : {};
              return (
                <button key={tab.name} onClick={() => handleTabChange(tab.name)} className={tabClass} style={tabStyle}>
                  {tab.name}
                </button>
              );
            })}
          </div>
        )}

        {tabType === "flatSection" && (
          <div
            className="flex flex-col divide-y divide-gray-100 overflow-y-auto pr-2"
            style={{ maxHeight: "460px", scrollbarWidth: "thin" }}
          >
            {section.flatReports.map((report) => (
              <ReportRow key={report.label} report={report} />
            ))}
          </div>
        )}

        {tabType === "boardCommittees" && boardData && (
          <>
            <div className="flex gap-2 mb-6">
              {boardData.subTabs.map((sub) => (
                <button key={sub} onClick={() => setActiveSubTab(sub)} className={subTabClass(activeSubTab === sub)} style={subTabStyle(activeSubTab === sub)}>
                  {sub}
                </button>
              ))}
            </div>

            <h3 className="font-['Open_Sans'] font-bold text-xl text-gray-900 mb-4">
              {activeSubTab === "Board" ? "Board of Directors" : "Committees"}
            </h3>

            {activeSubTab === "Committees" ? (
              boardData.membersBySubTab.Committees?.length > 0 ? (
                <CommitteesTable committees={boardData.membersBySubTab.Committees} />
              ) : (
                <EmptyMessage text="No committees added yet." />
              )
            ) : members.length > 0 ? (
              <div
                className="flex flex-wrap gap-6 overflow-y-auto pr-2"
                style={{ maxHeight: "820px", scrollbarWidth: "thin" }}
              >
                {members.map((member) => (
                  <BoardMemberCard key={member.name} member={member} />
                ))}
              </div>
            ) : (
              <EmptyMessage text="No members added yet for this tab." />
            )}

            {activeSubTab === "Board" && boardData.keyManagerialPersonnel?.length > 0 && (
              <>
                <h3 className="font-['Open_Sans'] font-bold text-xl text-gray-900 mt-10 mb-4">
                  Key Managerial Personnel
                </h3>
                <div className="flex flex-wrap gap-6">
                  {boardData.keyManagerialPersonnel.map((person) => (
                    <BoardMemberCard key={person.name} member={person} />
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {tabType === "richContent" && <RichContentPanel data={richContentData} />}

        {(tabType === "yearlyReports" || tabType === "yearlyReportsWithYear") && yearlyReportsConfig && (
          <>
            <div className="flex gap-2 mb-6">
              {yearlyReportsConfig.subTabs.map((sub) => (
                <button key={sub} onClick={() => setActiveYearlySubTab(sub)} className={subTabClass(currentYearlySubTab === sub)} style={subTabStyle(currentYearlySubTab === sub)}>
                  {sub}
                </button>
              ))}
            </div>

            <div className="flex flex-col divide-y divide-gray-100">
              {(tabType === "yearlyReportsWithYear" ? yearlyReportsWithYear : yearlyReports).length > 0 ? (
                (tabType === "yearlyReportsWithYear" ? yearlyReportsWithYear : yearlyReports).map((report) => (
                  <ReportRow key={report.label} report={report} />
                ))
              ) : (
                <EmptyMessage text="No reports available yet for this selection." />
              )}
            </div>
          </>
        )}

        {tabType === "flatReports" && (
          <div className="flex flex-col divide-y divide-gray-100">
            {flatReports.length > 0 ? (
              flatReports.map((report) => <ReportRow key={report.label} report={report} />)
            ) : (
              <EmptyMessage text="No reports available yet for this selection." />
            )}
          </div>
        )}

        {tabType === "reports" && (
          <div className="flex flex-col divide-y divide-gray-100">
            {reports.length > 0 ? (
              reports.map((report) => <ReportRow key={report.label} report={report} />)
            ) : (
              <EmptyMessage text="No reports available yet for this selection." />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default InvestorsContent;