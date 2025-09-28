
import React from 'react';

interface SummaryProps {
  trials: number;
  successes: number;
  mle: number;
}

const Summary: React.FC<SummaryProps> = ({ trials, successes, mle }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">估計結果</h2>
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="text-lg text-gray-600">最大概似估計值 (MLE)</p>
        <p className="text-4xl font-bold text-indigo-600">
          <span className="font-serif">p̂</span> = {trials > 0 ? mle.toFixed(4) : "N/A"}
        </p>
        <p className="text-md text-gray-500">
          {trials > 0 ? `( ${successes} / ${trials} )` : '(無試驗數據)'}
        </p>
        <p className="mt-4 text-sm text-gray-500 max-w-xs mx-auto pt-4 border-t">
          {trials > 0
            ? `此 p̂ 值能最大化我們在 ${trials} 次試驗中，觀察到 ${successes} 次成功的可能性。`
            : `請先設定總試驗次數(n)以進行估計。`}
        </p>
      </div>
    </div>
  );
};

export default Summary;
