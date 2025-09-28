
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center p-6 bg-white rounded-lg shadow-md border-b-4 border-indigo-500">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">最大概似估計視覺化工具</h1>
      <p className="text-lg text-gray-600">探索二項分配的概似函數</p>
    </header>
  );
};

export default Header;
