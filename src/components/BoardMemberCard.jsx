function BoardMemberCard({ member }) {
  return (
    <div
      className="flex flex-col"
      style={{
        width: "374.5px",
        borderRadius: "16px",
        border: "1px solid #E0E2FF",
        padding: "24px",
        gap: "32px",
      }}
    >
      <img
        src={member.image}
        alt={member.name}
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
      <div>
        <h4 className="font-['Open_Sans'] font-bold text-base text-gray-900">
          {member.name}
        </h4>
        <p className="font-['Open_Sans'] text-sm font-medium text-gray-500 mb-2">
          {member.title}
        </p>
        <p className="font-['Open_Sans'] text-xs text-gray-600 leading-relaxed">
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export default BoardMemberCard;