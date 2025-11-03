interface CardProps {
  title: string;
  description: string;
  icon?: string;
  tags?: string[];
}

export default function Card({ title, description, icon, tags }: CardProps) {
  return (
    <div className="bg-gray-800 min-h-[300px] flex flex-col justify-center rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:scale-105 hover:bg-gray-700">
      {icon && (
        <div className="text-5xl mb-4">{icon}</div>
      )}
      <h3 className="text-xl font-bold mb-3 text-gray-600">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
      {tags && (
          <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-gray-500 text-gray-50 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
      )}
    </div>
  );
}
