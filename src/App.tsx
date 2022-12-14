import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import './App.css';
import ReviewPage from './Review/NavBar';
import NavBar from './Review/NavBar';
import CreateBook from './Tbr/CreateBook';
import MyCard, { CardDetails } from './Tbr/TbrList';
import UpdateBook from './Tbr/UpdateBook';
import SignUp from './UserComponent/signup';
import Welcome from './UserComponent/welcome';
import WriteAReview from './Review/WriteAReview';
import UpdateAReview from './Review/UpdateAReview';


const Cards:CardDetails[] = [
  {title:'The Imperfections of Memor', author: 'Angelina Aludo', synopsis: 'scscscsecscscs', cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564'},
  {title:'The Imperfections of Memory', author: 'Angie Aludio', synopsis: 'dczxcxccb', cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564'},
  {title:'The Imperfections of Memor', author: 'Angelina Aludo', synopsis: 'scscscsecscscs', cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564'},
  {title:'The Imperfections of Memory', author: 'Angie Aludio', synopsis: 'dczxcxccb', cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564'},
  {title:'The Imperfections of Memory', author: 'Angie Aludio', synopsis: 'dczxcxccb', cover: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564'},
  
]

function App() {
  return (
    <div className="App">

      <NavBar/>
      <header className="App-header">
      {/* <SignUp/> */}
      {/* <Welcome/> */}
      {/* <ReviewPage/> */}
      {/* <CreateBook/> */}
      {/* <UpdateBook/> */}

      {Cards.map((item,i)=>
          <MyCard key={i} title={item.title} author={item.author} cover={item.cover} synopsis={item.synopsis}/>
        )} 

      </header>
      <Fab size="large" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
    </div>
  );

}

export default App;
