import gridPattern from "../assets/grid-pattern.png";
function FinancialHighlights() {
  const row1 = [
    { value: "₹1,311.92 CR", label: "Revenue from Operations" },
    { value: "₹74.33 CR", label: "Profit after tax" },
    { value: "12+", label: "High-value projects>₹10 cr" },
    { value: "₹12.96 CR", label: "Other income" },
  ];

  const row2 = [
    { value: "₹9.17", label: "Earning per equity share" },
    { value: "50,000+", label: "Devices managed" },
    { value: "₹101.33 CR", label: "Profit before tax" },
    { value: "₹921.90 LAKH", label: "Net cash flow from operations" },
  ];

  return (
    <section
  className="relative flex flex-col items-center gap-[120px] px-[80px] py-[80px] text-center text-white overflow-hidden"
  style={{ backgroundColor: "#470C94" }}
>
  {/* Background grid pattern */}
  <img
    src={gridPattern}
    alt=""
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    style={{ opacity: 0.25 }}
  />

  {/* Content sits above the pattern */}
  <div className="relative z-10">
    <h2
  className="mb-2"
  style={{
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "160%",
    letterSpacing: "0px",
    color: "#FDFDFD",
  }}
>
  FY 2025-26
</h2>
    <p className="text-purple-200">
      Key highlights from our latest Annual Report — the numbers behind a
      decade of execution.
    </p>
  </div>

  <div className="relative z-10 bg-white/10 rounded-[16px] p-10 w-full max-w-5xl">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
      {row1.map((stat) => (
        <div key={stat.label}>
          <p
  className="mb-1"
  style={{
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "150%",
    letterSpacing: "0%",
    textTransform: "uppercase",
    color: "#FDFDFD",
  }}
>
  {stat.value}
</p>
          <p className="text-sm text-purple-200">{stat.label}</p>
        </div>
      ))}
      {row2.map((stat) => (
        <div key={stat.label}>
          <p
  className="mb-1"
  style={{
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "150%",
    letterSpacing: "0%",
    textTransform: "uppercase",
    color: "#FDFDFD",
  }}
>
  {stat.value}
</p>
          <p className="text-sm text-purple-200">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

export default FinancialHighlights;