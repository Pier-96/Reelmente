import { motion } from "framer-motion";

export default function SlideCard({ slide }) {
  const typeStyles = {
    hook: "from-rose-500 via-red-500 to-orange-500",
    concept: "from-blue-500 via-indigo-500 to-purple-500",
    question: "from-violet-500 via-purple-500 to-fuchsia-500",
    answer: "from-emerald-500 via-teal-500 to-cyan-500",
    fact: "from-amber-500 via-yellow-500 to-orange-500",
    comparison: "from-orange-500 via-red-500 to-pink-500",
    quiz: "from-pink-500 via-rose-500 to-red-500",
    summary: "from-slate-700 via-slate-600 to-slate-800",
  };

  const typeIcons = {
    hook: "🎯",
    concept: "💡",
    question: "❓",
    answer: "✅",
    fact: "🔍",
    comparison: "⚖️",
    quiz: "🧠",
    summary: "📝",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative w-full max-w-3xl h-full flex flex-col justify-center"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${typeStyles[slide.type]} rounded-3xl shadow-2xl`} />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
      
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl shadow-lg">
        {typeIcons[slide.type]}
      </div>

      <div className="relative z-10 p-8 md:p-12 text-center">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs md:text-sm font-semibold uppercase tracking-widest mb-6"
        >
          {slide.type}
        </motion.span>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed drop-shadow-lg"
        >
          {slide.content}
        </motion.p>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-white/40 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
