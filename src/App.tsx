import React from 'react';
import logo from './logo.svg';
import './App.css';
import './theme/CustomStyle.css';
import { Router } from './navigation/Router';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
