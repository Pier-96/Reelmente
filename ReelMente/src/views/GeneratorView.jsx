import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function GeneratorView() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const generateSlides = () => {
    if (!text.trim()) return;
    navigate(`/slides?content=${encodeURIComponent(text)}`);
  };
 

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="p-4 md:p-6 bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ReelMente
          </h1>
          <span className="text-xs md:text-sm text-white/50">Transforma texto en aprendizaje visual</span>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-4 md:p-8 shadow-2xl">
          <label className="block text-white/80 text-sm font-medium mb-3">
            Pegá tu contenido educativo
          </label>
          <textarea
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 resize-none text-base md:text-lg"
            rows={8}
            placeholder="Escribe o pega el texto que querés convertir en slides..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:opacity-90"
            onClick={generateSlides}
            disabled={!text}
          >
            Generar Slides
          </button>
          <Link
            className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:opacity-90"
            to="/slides?content="
          >
            Prueba
          </Link>
        </div>
      </main>
    </div>
  );
}
