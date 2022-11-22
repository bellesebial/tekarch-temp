import React from 'react';
import './App.css';
import ReviewPage from './Review/NavBar';
import NavBar from './Review/NavBar';
import TbrList from './Tbr/TbrList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <TbrList/>
      <ReviewPage/>
    </div>
  );

}

export default App;
