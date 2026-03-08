import { useNavigate, Link } from "react-router-dom";
import SlideRenderer from "../utils/slideMapper";
import mockSlides from "../mockSlides.json";

function BottomNav({ activeTab = "slides" }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1c1c1e]/95 backdrop-blur-lg border-t border-white/10 safe-area-pb">
      <div className="flex items-center justify-around max-w-md mx-auto py-2">
        <Link
          to="/"
          className="flex flex-col items-center gap-1 py-2 px-4 rounded-xl hover:bg-white/10 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-[10px] text-white/70">Crear</span>
        </Link>
        
        <Link
          to="/slides"
          className="flex flex-col items-center gap-1 py-2 px-4 rounded-xl hover:bg-white/10 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[10px] text-white/70">Ver</span>
        </Link>

        <Link
          to="/slides/grid"
          className="flex flex-col items-center gap-1 py-2 px-4 rounded-xl hover:bg-white/10 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span className="text-[10px] text-white/70">Todas</span>
        </Link>

        <Link
          to="/test"
          className="flex flex-col items-center gap-1 py-2 px-4 rounded-xl hover:bg-white/10 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          <span className="text-[10px] text-white/70">Test</span>
        </Link>
      </div>
    </div>
  );
}

export default function SlidesView() {
  const navigate = useNavigate();
  const slides = mockSlides.slides;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="p-4 bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ReelMente
          </h1>
          <div className="w-16" />
        </div>
      </header>

      <main className="flex-1 pb-24 p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4 px-2">
            <h2 className="text-white/80 text-sm font-medium">Tus Slides</h2>
            <span className="text-white/50 text-xs">{slides.length} slides</span>
          </div>
          
          <div className="h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent snap-y snap-mandatory rounded-2xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="snap-start h-[75vh] flex items-center justify-center p-2"
              >
                <div className="w-full h-[60vh]">
                  <div className="text-white/30 text-xs mb-2">{index + 1} / {slides.length}</div>
                  <SlideRenderer slide={slide} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
