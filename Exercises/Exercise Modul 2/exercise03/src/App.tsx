import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Capabilities from './components/Capabilities';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Capabilities />
    </div>
  );
}

export default App;
