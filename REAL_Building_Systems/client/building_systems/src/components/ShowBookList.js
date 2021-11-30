import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/books')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };


  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }

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