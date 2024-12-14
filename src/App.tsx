import React from 'react';
import './index.css'; // 必要ならスタイルをここで読み込む
import Header from './components/Header';
import Links from './components/Links';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Links />
    </div>
  );
};

export default App;
