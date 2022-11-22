import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import ReviewPage from './Review/NavBar';
import NavBar from './Review/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <ReviewPage/>
    </div>
  );

}

export default App;
