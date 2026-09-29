function CommitteesTable({ committees }) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ borderRadius: "8px", border: "1px solid #D5D5D5" }}
    >
      <table className="w-full border-collapse font-['Open_Sans']">
        <thead>
          <tr style={{ borderBottom: "1px solid #D5D5D5" }}>
            <th className="text-center text-sm font-bold text-gray-900 py-3 px-4" style={{ borderRight: "1px solid #D5D5D5" }}>
              Name of the Committee
            </th>
            <th className="text-center text-sm font-bold text-gray-900 py-3 px-4" style={{ borderRight: "1px solid #D5D5D5" }}>
              Composition
            </th>
            <th className="text-center text-sm font-bold text-gray-900 py-3 px-4">
              Designation
            </th>
          </tr>
        </thead>
        <tbody>
          {committees.map((committee) => (
            <>
              {committee.members.map((member, i) => (
                <tr key={`${committee.name}-${i}`} style={{ borderBottom: "1px solid #D5D5D5" }}>
                  {i === 0 && (
                    <td
                      rowSpan={committee.members.length}
                      className="text-sm text-gray-800 py-3 px-4 align-middle"
                      style={{ borderRight: "1px solid #D5D5D5" }}
                    >
                      {committee.name}
                    </td>
                  )}
                  <td className="text-sm text-gray-700 py-3 px-4" style={{ borderRight: "1px solid #D5D5D5" }}>
                    {member.name}
                  </td>
                  <td className="text-sm text-gray-700 py-3 px-4">
                    {member.designation}
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommitteesTable;``