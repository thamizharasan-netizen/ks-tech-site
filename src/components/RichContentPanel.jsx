function RichContentPanel({ data }) {
  if (!data) return null;

  return (
    <div className="font-['Open_Sans'] text-sm text-gray-700 leading-relaxed">
      {data.intro && <p className="mb-6">{data.intro}</p>}

      {data.sections?.map((section) => (
        <div key={section.heading} className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3">{section.heading}</h4>

          {section.numberedList?.length > 0 && (
            <ol className="list-decimal pl-5 space-y-1 mb-3">
              {section.numberedList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          )}

          {section.fields?.length > 0 && (
            <div className="space-y-1">
              {section.fields.map((field) => (
                <p key={field.label}>
                  <span className="font-bold">{field.label} : </span>
                  {field.value}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default RichContentPanel;