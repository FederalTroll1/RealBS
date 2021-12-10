import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import the css file
import './App.css';

//import all of the web pages
import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

//creates a render class
//when navigating to a different page it will use the path
//specified by the button and match to the corresponding .js file
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Routes>
          <Route exact path='/' element={<ShowBookList />} />
        </Routes>
        <Routes>
          <Route path='/create-book' element={<CreateBook />} />
        </Routes>
        <Routes>
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
        </Routes>
        <Routes>
          <Route path='/show-book/:id' element={<ShowBookDetails />} />
        </Routes>
        </div>
      </Router>
    );
  }
}
export default App;