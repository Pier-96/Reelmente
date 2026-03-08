import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SlideRenderer from "../utils/slideMapper";
import mockSlides from "../mockSlides.json";

function BottomNav({ activeTab = "slides" }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1c1c1e]/95 backdrop-blur-lg border-t border-white/10 safe-area-pb">
      <div className="flex items-center justify-around max-w-md mx-auto py-2">
        <Link
          to="/"
          className="flex flex-col items-center gap-1 py-2 px-6 rounded-xl hover:bg-white/10 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-[10px] text-white/70">Crear</span>
        </Link>
        
        <Link
          to="/slides"
          className="flex flex-col items-center gap-1 py-2 px-6 rounded-xl hover:bg-white/10 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span className="text-[10px] text-white/70">Todas</span>
        </Link>

        <Link
          to="/test"
          className="flex flex-col items-center gap-1 py-2 px-6 rounded-xl hover:bg-white/10 transition-colors"
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

export default function AllSlidesView() {
  const navigate = useNavigate();
  const [selectedSlide, setSelectedSlide] = useState(null);
  const slides = mockSlides.slides;

  const handleSlideClick = (slide) => {
    setSelectedSlide(slide);
  };

  const closeSlide = () => {
    setSelectedSlide(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="p-4 bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Todas las Slides
          </h1>
          <div className="w-16" />
        </div>
      </header>

      <main className="flex-1 pb-24 p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleSlideClick(slide)}
              className="aspect-[9/16] bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="h-full flex flex-col">
                <div className="bg-white/10 px-2 py-1 text-[10px] text-white/50 text-left">
                  {index + 1}
                </div>
                <div className="flex-1 p-2 overflow-hidden">
                  <div className="transform scale-50 origin-top-left w-[200%] h-[200%]">
                    <SlideRenderer slide={slide} />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>

      {selectedSlide && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeSlide}
        >
          <div 
            className="max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeSlide}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <SlideRenderer slide={selectedSlide} />
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
