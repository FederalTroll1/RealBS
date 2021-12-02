import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount(id) {
    //console.log("Print id: " + this.props.match.params.id);
    const pathArray = window.location.pathname.split('/');
    const secondLevelLocation = pathArray[2];

    //console.log("TEST" + secondLevelLocation);
    axios
        .get('http://localhost:8082/api/books/'+secondLevelLocation)
        .then(res => {
          //console.log("Print-showBookDetails-API-response: " + res.data);
          this.setState({
            book: res.data
          })
        })
        .catch(err => {
          console.log("Error from ShowBookDetails");
        })
  };

  onDeleteClick (id) {
    axios
        .delete('http://localhost:8082/api/books/'+id)
        .then(res => {
          this.props.history.push("/");
        })
        .catch(err => {
          console.log("Error form ShowBookDetails_deleteClick");
        })
  };


  render() {

    const book = this.state.book;
    let SelectedBook = <div>
      <table className="table table-sm table-hover table-dark">
        <caption className={"text-center text-light"}>The above table shows details about the {book.title} book. Please edit mistakes
        using the edit button, or alternatively remove the book from the system using the remove button.</caption>
        <tbody>
        <tr>
          <td>Title:</td>
          <td>{ book.title }</td>
        </tr>
        <tr>
          <td>Author:</td>
          <td>{ book.author }</td>
        </tr>
        <tr>
          <td>ISBN:</td>
          <td>{ book.isbn }</td>
        </tr>
        <tr>
          <td>Publisher:</td>
          <td>{ book.publisher }</td>
        </tr>
        <tr>
          <td>Published Date:</td>
          <td>{ book.published_date }</td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>{ book.description }</td>
        </tr>
        </tbody>
      </table>
    </div>

    return (
        <div className="ShowBookDetails">
          <div className="container">
            <div className="row">
              <div className="col-md-12 m-auto">
              </div>
              <br />
              <div className="col-md-8 m-auto">
                <h1 className="display-5 text-center"><u>{book.title}</u></h1>
                <br />
                <p>
                  <Link to="/" className="btn btn-outline-dark translate-middle badge badge badge-secondary"> -Home Page- </Link>
                  <Link to="/" className="btn btn-outline-dark float-right translate-middle badge badge badge-secondary"> -Back to List- </Link>
                </p>
                <hr /> <br />
              </div>
            </div>
            <div>
              { SelectedBook }
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,book._id)}>Remove Book</button><br />
              </div>
              <div className="col-md-6">
                <Link to={`/edit-book/${book._id}`} className="btn btn-outline-warning btn-lg btn-block">Edit Book Details</Link><br />
              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default showBookDetails;