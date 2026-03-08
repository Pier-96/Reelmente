export default function HookSlide({ content }) {
  return (
    <div className="w-full max-w-3xl p-6 md:p-10 rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-2xl">
      <div className="absolute top-4 right-4 text-4xl opacity-30">🎯</div>
      <h2 className="text-white text-2xl md:text-4xl font-bold leading-relaxed text-center">
        {content.text}
      </h2>
    </div>
  );
}
