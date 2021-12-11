import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

/*The Show Book List Page acts as the entry for point the application.
* This file fetches all entries from the MongoDB Atlas database and shows
* basic book information in containers of the screen. The page supports the
* user selecting a specific book which will then navigate them to that specific page.*/

//create a show book class that uses the book constructor
class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  //setup get request
  componentDidMount() {
    axios
        //get all books and then bind their data to the constructor
      .get('http://localhost:8082/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error Getting Books In Show Book List');
      })
  };

  //handles rendering the books on screen
  render() {
    //use the current book and bind its data to the constructor
    const books = this.state.books;
    let bookList;

    if(!books) {
      bookList = "There are no Books to Display";
    } else {
      //map each book to a key number to display its container
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }

    //Webpage HTML
    //render in the components of the website
    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-left"> Library Inventory </h2>
            </div>
                <div className="col-md-12 col-md-6">
                    <hr />
                    {
                        //New Book Button
                    }
                    <Link to="/create-book" className="btn btn-outline-dark float-left translate-middle badge badge badge-secondary"> + New Book Entry</Link>
                    <br />
                    <hr />
                </div>
            </div>
            <div className="list">
                {bookList}
            </div>
        </div>
      </div>
    );
  }
}
export default ShowBookList;