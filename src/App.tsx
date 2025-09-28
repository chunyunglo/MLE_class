import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import ParameterControls from './components/ParameterControls';
import LikelihoodChart from './components/LikelihoodChart';
import { calculateLikelihood } from './utils/math';

const App: React.FC = () => {
  const [trials, setTrials] = useState<number>(20);
  const [successes, setSuccesses] = useState<number>(10);

  // Ensure successes is never greater than trials
  useEffect(() => {
    if (successes > trials) {
      setSuccesses(trials);
    }
  }, [trials, successes]);

  const mle = useMemo(() => {
      return trials > 0 ? successes / trials : 0;
  }, [trials, successes]);

  const chartData = useMemo(() => {
    const data = [];
    const step = 0.005;
    // Handle edge case where trials=0 or successes=trials=0
    if (trials === 0) {
        // Flat likelihood for p when no data
        for (let p = 0; p <= 1; p += step) {
            data.push({ p: p, likelihood: 1 });
        }
        data.push({ p: 1, likelihood: 1 });
        return data;
    }
    for (let p = 0; p <= 1; p += step) {
      data.push({
        p: p,
        likelihood: calculateLikelihood(p, trials, successes),
      });
    }
    // ensure p=1 is included
    data.push({
        p: 1,
        likelihood: calculateLikelihood(1, trials, successes)
    });
    return data;
  }, [trials, successes]);

  return (
    <main className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Header />

        <LikelihoodChart
          data={chartData}
          mle={mle}
          trials={trials}
          successes={successes}
        />

        <ParameterControls
          trials={trials}
          setTrials={setTrials}
          successes={successes}
          setSuccesses={setSuccesses}
        />
        
        <footer className="text-center text-gray-500 text-sm py-4">
            <p>為互動式學習而設計。使用 React、TypeScript、Tailwind CSS 和 Recharts 構建。</p>
        </footer>
      </div>
    </main>
  );
};

export default App;
