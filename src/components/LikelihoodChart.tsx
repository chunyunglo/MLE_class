import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Label
} from 'recharts';

interface ChartDataPoint {
  p: number;
  likelihood: number;
}

interface LikelihoodChartProps {
  data: ChartDataPoint[];
  mle: number;
  trials: number;
  successes: number;
}

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
        <p className="font-bold text-gray-700">{`p = ${label.toFixed(3)}`}</p>
        <p className="text-indigo-600">{`概似度: ${payload[0].value.toExponential(4)}`}</p>
      </div>
    );
  }
  return null;
};


const LikelihoodChart: React.FC<LikelihoodChartProps> = ({ data, mle, trials, successes }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col" style={{height: '24rem'}}>
      <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">概似函數 L(p | n, k)</h2>
          {trials > 0 ? (
            <div className="text-gray-600 mt-2">
                <span className="text-lg">
                    最大概似估計 (MLE): <span className="font-bold text-indigo-600"><span className="font-serif">p̂</span> = {mle.toFixed(4)}</span>
                </span>
                <span className="text-sm text-gray-500 ml-2">
                    ({successes} / {trials})
                </span>
            </div>
          ) : (
            <div className="text-gray-500 mt-2 text-sm">
                請設定總試驗次數以進行估計。
            </div>
          )}
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 40,
                    bottom: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="p" type="number" domain={[0, 1]}>
                    <Label value="成功機率 (p)" offset={-15} position="insideBottom" />
                </XAxis>
                <YAxis
                    tickFormatter={(tick) => tick.toExponential(1)}
                    domain={['auto', 'auto']}
                    allowDataOverflow={true}
                >
                    <Label value="概似度 L(p)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
                </YAxis>
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} wrapperStyle={{top: -10}} />
                <Line
                    type="monotone"
                    dataKey="likelihood"
                    name={`L(p | n=${trials}, k=${successes})`}
                    stroke="#4f46e5"
                    strokeWidth={2.5}
                    dot={false}
                />
                {isFinite(mle) && trials > 0 && (
                     <ReferenceLine x={mle} stroke="#e11d48" strokeWidth={2} strokeDasharray="5 5">
                        <Label value={`MLE p̂ = ${mle.toFixed(3)}`} position="insideTop" fill="#e11d48" fontSize={14} dy={-10} />
                    </ReferenceLine>
                )}
            </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LikelihoodChart;
