import { useState } from 'react';

function App() {
  const [optionA, setOptionA] = useState('Pizza');
  const [optionB, setOptionB] = useState('Tacos');
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [showBurst, setShowBurst] = useState(false);

  const handleToss = () => {
    setError('');

    if (!optionA.trim() || !optionB.trim()) {
      setError('Both options must be filled in');
      return;
    }

    if (optionA.trim().toLowerCase() === optionB.trim().toLowerCase()) {
      setError('Options must be different');
      return;
    }

    setIsFlipping(true);
    setResult(null);
    setShowBurst(true);

    setTimeout(() => {
      const winner = Math.random() < 0.5 ? optionA : optionB;
      setResult(winner);
    }, 1200);

    setTimeout(() => {
      setIsFlipping(false);
    }, 1500);

    setTimeout(() => {
      setShowBurst(false);
    }, 2100);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--on-background)] font-['Spline_Sans'] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-10">
        <span className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-400 font-['Space_Grotesk'] tracking-tight">
          DECIDR
        </span>
      </div>

      <main className="w-full max-w-7xl px-5 sm:px-10 flex flex-col items-center justify-center flex-grow py-16">
        <section className="text-center mb-12 max-w-2xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--on-surface-variant)] mb-4">
            fate engine
          </p>
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold text-[var(--primary)] mb-4">
            Fate in a Flick.
          </h1>
          <p className="text-lg sm:text-xl text-[var(--on-surface-variant)]">
            Stop overthinking. One toss, one truth.
          </p>
        </section>

        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-[var(--surface-container)] p-6 rounded-xl neon-border custom-glow transition-all hover:scale-[1.02]">
              <label className="font-['Space_Grotesk'] text-xs uppercase tracking-[0.35em] text-[var(--primary)] mb-4 block">
                Option A
              </label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-[var(--outline-variant)] focus:border-[var(--primary-container)] focus:ring-0 text-2xl sm:text-3xl font-['Space_Grotesk'] text-[var(--on-surface)] transition-all placeholder:text-[color:var(--surface-variant)]/40"
                placeholder="Pizza"
                type="text"
                maxLength={24}
                value={optionA}
                disabled={isFlipping}
                onChange={(event) => setOptionA(event.target.value)}
              />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 py-4">
            <div className="relative group">
              <div className="absolute -inset-12 bg-[var(--primary-container)]/20 rounded-full blur-3xl transition-all duration-700 group-hover:bg-[var(--primary-container)]/40"></div>

              <div
                className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full coin-gradient flex items-center justify-center relative z-10 border-4 border-white/20 shadow-2xl transition-transform duration-500 cursor-pointer ${
                  isFlipping ? 'coin-toss' : 'coin-idle'
                }`}
              >
                <span className="material-symbols-outlined text-7xl sm:text-8xl text-white" data-weight="fill">
                  token
                </span>
                <span className="absolute inset-3 rounded-full border border-white/30"></span>
                <span className="absolute inset-8 rounded-full border border-white/20"></span>
              </div>

              {showBurst && (
                <>
                  <span className="burst-ring burst-ring-lg"></span>
                  <span className="burst-ring burst-ring-md"></span>
                  <span className="burst-ring burst-ring-sm"></span>
                  <span className="burst-spark burst-spark-1"></span>
                  <span className="burst-spark burst-spark-2"></span>
                  <span className="burst-spark burst-spark-3"></span>
                </>
              )}

              <button
                onClick={handleToss}
                disabled={isFlipping}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[var(--on-background)] text-[var(--background)] px-10 py-4 rounded-full font-['Space_Grotesk'] text-xl font-black uppercase tracking-tight hover:scale-110 hover:bg-white active:scale-95 transition-all shadow-2xl z-20 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isFlipping ? 'Tossing...' : 'Toss Coin'}
              </button>
            </div>

            <div className="mt-16 min-h-[80px] flex flex-col items-center justify-center" aria-live="polite">
              {error && (
                <div className="mb-4 px-6 py-3 rounded-full border border-red-500/50 bg-red-500/10 text-red-200 text-sm">
                  {error}
                </div>
              )}

              {isFlipping && !error && (
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--on-surface-variant)]">
                  Calculating destiny...
                </p>
              )}

              {!isFlipping && result && (
                <div className="result-chip">
                  <p className="text-2xl sm:text-3xl font-bold text-white text-center font-['Space_Grotesk']">
                    {result}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70 mt-2">winner</p>
                </div>
              )}

              {!isFlipping && !result && !error && (
                <p className="text-[var(--on-surface-variant)] text-sm">
                  Enter two options to begin.
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 order-3">
            <div className="bg-[var(--surface-container)] p-6 rounded-xl neon-border custom-glow transition-all hover:scale-[1.02]">
              <label className="font-['Space_Grotesk'] text-xs uppercase tracking-[0.35em] text-[var(--secondary)] mb-4 block">
                Option B
              </label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-[var(--outline-variant)] focus:border-[var(--secondary-container)] focus:ring-0 text-2xl sm:text-3xl font-['Space_Grotesk'] text-[var(--on-surface)] transition-all placeholder:text-[color:var(--surface-variant)]/40"
                placeholder="Tacos"
                type="text"
                maxLength={24}
                value={optionB}
                disabled={isFlipping}
                onChange={(event) => setOptionB(event.target.value)}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto px-8 py-10 mt-auto border-t border-purple-900/10">
        <div className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
          <span className="font-['Space_Grotesk'] text-xs uppercase tracking-[0.2em] text-slate-500">
            © 2026 DECIDR. NO REGRETS.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
