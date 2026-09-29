function DetailSection({ heading, content }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 md:gap-10 py-8 border-b border-gray-200">
      <h3 className="font-['Open_Sans'] font-bold text-lg md:text-xl text-gray-900">
        {heading}
      </h3>
      <div className="font-['Open_Sans'] text-sm md:text-base text-gray-600 leading-relaxed">
        {Array.isArray(content) ? (
          <ul className="list-disc pl-5 space-y-2">
            {content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default DetailSection;