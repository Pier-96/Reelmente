import { useState } from "react";
import { Link } from "react-router-dom";
import { useSlides } from "../hooks/useSlides";

function BottomNav() {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
          <span className="text-[10px] text-white/70">Slides</span>
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

export default function TestView() {
  const { slidesData } = useSlides();
  const quiz = slidesData?.quiz || [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const hasQuiz = quiz.length > 0;

  const handleAnswer = (index) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === quiz[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  if (!hasQuiz) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <header className="p-4 md:p-4 bg-white/5 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ReelMente - Test
            </h1>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            <p className="text-white/60 mb-4">No hay quiz disponible</p>
            <Link to="/" className="text-purple-400 hover:text-purple-300">
              Generar slides
            </Link>
          </div>
        </main>
        <BottomNav />
      </div>
    );
  }

  const question = quiz[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="p-4 md:p-4 bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Test
          </h1>
          <span className="text-white/50 text-sm">{currentQuestion + 1}/{quiz.length}</span>
        </div>
      </header>

      <main className="flex-1 p-4 flex flex-col justify-center max-w-md mx-auto w-full">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-6">
          <h2 className="text-white text-lg font-medium mb-6">{question.question}</h2>
          
          <div className="space-y-3">
            {question.options.map((option, index) => {
              let buttonClass = "w-full p-4 rounded-xl text-left transition-all duration-300 border ";
              
              if (!showResult) {
                buttonClass += selectedAnswer === index 
                  ? "bg-purple-500/30 border-purple-500 text-white" 
                  : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10";
              } else {
                if (index === question.correctAnswer) {
                  buttonClass += "bg-green-500/30 border-green-500 text-white";
                } else if (selectedAnswer === index) {
                  buttonClass += "bg-red-500/30 border-red-500 text-white";
                } else {
                  buttonClass += "bg-white/5 border-white/10 text-white/50";
                }
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={buttonClass}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <p className="text-white/80 text-sm">{question.explanation}</p>
              <button
                onClick={nextQuestion}
                className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 rounded-xl"
              >
                {currentQuestion < quiz.length - 1 ? 'Siguiente pregunta' : 'Reiniciar test'}
              </button>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
