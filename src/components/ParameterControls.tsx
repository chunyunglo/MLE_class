import React from 'react';

interface ParameterControlsProps {
  trials: number;
  setTrials: (value: number) => void;
  successes: number;
  setSuccesses: (value: number) => void;
}

const ParameterControls: React.FC<ParameterControlsProps> = ({ trials, setTrials, successes, setSuccesses }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">參數設定</h2>
      <div className="space-y-2">
        <label htmlFor="trials" className="flex justify-between items-center font-medium text-gray-600">
          <span>總試驗次數 (n)</span>
          <span className="font-bold text-indigo-600 text-lg bg-indigo-100 px-2 py-1 rounded">{trials}</span>
        </label>
        <input
          id="trials"
          type="range"
          min="0"
          max="150"
          value={trials}
          onChange={(e) => setTrials(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="successes" className="flex justify-between items-center font-medium text-gray-600">
          <span>成功次數 (k)</span>
          <span className="font-bold text-indigo-600 text-lg bg-indigo-100 px-2 py-1 rounded">{successes}</span>
        </label>
        <input
          id="successes"
          type="range"
          min="0"
          max={trials}
          value={successes}
          onChange={(e) => setSuccesses(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          disabled={trials === 0}
        />
      </div>
    </div>
  );
};

export default ParameterControls;
