export default function ComparisonSlide({ content }) {
  return (
    <div className="w-full max-w-3xl p-6 md:p-10 rounded-3xl bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 shadow-2xl">
      <div className="absolute top-4 right-4 text-4xl opacity-30">⚖️</div>
      <h2 className="text-white text-xl md:text-3xl font-bold mb-4 text-center">
        {content.title}
      </h2>
      <ul className="space-y-3">
        {content.bullets?.map((b, i) => (
          <li 
            key={i}
            className="text-white/90 text-base md:text-xl flex items-start gap-3"
          >
            <span className="w-2 h-2 mt-2 bg-white/60 rounded-full flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
