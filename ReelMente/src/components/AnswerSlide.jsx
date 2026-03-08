export default function AnswerSlide({ content }) {
  return (
    <div className="w-full max-w-3xl p-6 md:p-10 rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 shadow-2xl">
      <div className="absolute top-4 right-4 text-4xl opacity-30">✅</div>
      <h2 className="text-white text-xl md:text-3xl font-bold mb-4 text-center">
        {content.title}
      </h2>
      <p className="text-white/90 text-base md:text-xl text-center leading-relaxed">
        {content.text}
      </p>
    </div>
  );
}
