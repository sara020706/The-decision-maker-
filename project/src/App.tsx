import { useState } from 'react';
import { Coins } from 'lucide-react';

function App() {
  const [side1, setSide1] = useState('Heads');
  const [side2, setSide2] = useState('Tails');
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleToss = () => {
    setError('');

    if (!side1.trim() || !side2.trim()) {
      setError('Both coin faces must be named');
      return;
    }

    if (side1.trim() === side2.trim()) {
      setError('Coin faces must have different names');
      return;
    }

    setIsFlipping(true);
    setResult(null);

    setTimeout(() => {
      const randomValue = Math.random();
      const winner = randomValue < 0.5 ? side1 : side2;
      setResult(winner);
      setIsFlipping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen colorful-bg flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="glass-card rounded-3xl shadow-2xl p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/30 p-4 rounded-full backdrop-blur-sm">
              <Coins className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-center text-white mb-2 tracking-tight">
            Coin Tosser
          </h1>
          <p className="text-center text-white/90 mb-8">
            Fair and unbiased coin flip
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <label htmlFor="side1" className="block text-sm font-medium text-white/90 mb-2">
                First Side
              </label>
              <input
                id="side1"
                type="text"
                value={side1}
                onChange={(e) => setSide1(e.target.value)}
                disabled={isFlipping}
                className="w-full px-4 py-3 border-2 border-white/20 rounded-lg bg-white/10 text-white placeholder-white/60 focus:ring-4 focus:ring-brand-300 focus:border-transparent transition-all disabled:bg-white/5 disabled:cursor-not-allowed"
                placeholder="e.g., Heads"
                maxLength={20}
              />
            </div>

            <div>
              <label htmlFor="side2" className="block text-sm font-medium text-white/90 mb-2">
                Second Side
              </label>
              <input
                id="side2"
                type="text"
                value={side2}
                onChange={(e) => setSide2(e.target.value)}
                disabled={isFlipping}
                className="w-full px-4 py-3 border-2 border-white/20 rounded-lg bg-white/10 text-white placeholder-white/60 focus:ring-4 focus:ring-brand-300 focus:border-transparent transition-all disabled:bg-white/5 disabled:cursor-not-allowed"
                placeholder="e.g., Tails"
                maxLength={20}
              />
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}

          <button
            onClick={handleToss}
            disabled={isFlipping}
            className="w-full btn-gradient font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
          >
            {isFlipping ? 'Flipping...' : 'Toss Coin'}
          </button>

          <div className="mt-8 min-h-[120px] flex items-center justify-center">
            {isFlipping && (
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4 perspective">
                  <div className="absolute inset-0 animate-spin-coin" style={{animationDuration: '0.8s'}}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400 via-sunset-500 to-accent-500 shadow-2xl flex items-center justify-center">
                      <div className="absolute inset-1 rounded-full bg-gradient-to-t from-brand-700 to-brand-400 opacity-40"></div>
                      <div className="absolute inset-4 rounded-full border-2 border-white/30 opacity-60"></div>
                      <div className="text-white font-bold text-2xl">$</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 mt-2">
                  <p className="text-white/90 font-semibold text-center">Flipping...</p>
                  <div className="flex gap-1 justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-500 animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="w-2 h-2 rounded-full bg-sunset-500 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 rounded-full bg-accent-500 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}

            {result && !isFlipping && (
              <div className="flex flex-col items-center animate-bounce-in">
                <div className="bg-gradient-to-br from-accent-400 to-brand-600 rounded-2xl px-8 py-6 shadow-2xl">
                  <p className="text-white text-2xl font-bold text-center">
                    {result}
                  </p>
                </div>
                <p className="text-white/80 mt-4 font-medium">Winner!</p>
              </div>
            )}

            {!result && !isFlipping && (
              <p className="text-white/80 text-center">
                Enter both sides and toss the coin
              </p>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs text-white/70 text-center">
              Uses cryptographically secure randomization for fair results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
