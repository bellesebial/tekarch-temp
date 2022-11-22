import React from 'react';
import './App.css';
import ReviewPage from './Review/NavBar';
import NavBar from './Review/NavBar';
import CreateBook from './Tbr/CreateBook';
import TbrList from './Tbr/TbrList';
import UpdateBook from './Tbr/UpdateBook';
import SignUp from './UserComponent/signup';
import Welcome from './UserComponent/welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/> 
      {/* <SignUp/> */}
      {/* <Welcome/> */}
      <TbrList/>
      {/* <CreateBook/> */}
      {/* <UpdateBook/> */}
      </header>

    </div>
  );

}

export default App;
