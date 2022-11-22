import React from 'react';
import './App.css';
import ReviewPage from './Review/NavBar';
import NavBar from './Review/NavBar';
import CreateBook from './Tbr/CreateBook';
import TbrList from './Tbr/TbrList';
import UpdateBook from './Tbr/UpdateBook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/> 
      {/* <TbrList/> */}
      <CreateBook/>
      {/* <UpdateBook/> */}
      </header>
    </div>
  );

}

export default App;
