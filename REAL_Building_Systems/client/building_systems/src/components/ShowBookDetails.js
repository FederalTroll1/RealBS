import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

/*The Show Book Details Page displays all of the data about the
* selected book into a table view to allow the user to view.
* The page supports allowing a user to edit the book details
* or alternatively removing the book from the database.*/

//create class to show book details
//this will allow multiple books to be rendered
class showBookDetails extends Component {
  constructor(props) {
    super(props);
    //get the current bool
    this.state = {
      book: {}
    };
  }

  componentDidMount(id) {
    //gets the id of the book that was posted when selected from
    //the home page
    const pathArray = window.location.pathname.split('/');
    const secondLevelLocation = pathArray[2];

    //start get request
    axios
        //use the url of the current book id
        .get('http://localhost:8082/api/books/'+secondLevelLocation)
        .then(res => {
          this.setState({
            //set the current state to the data of the selected book
            book: res.data
          })
        })
        .catch(err => {
          console.log("Error When Trying to Show Book Details");
        })
  };

  //function to handle if the user wants to remove the book
  onDeleteClick (id) {
    axios
        //get the current book page using the id
        .delete('http://localhost:8082/api/books/'+id)
        .then(res => {
          this.props.history.push("/");
        })
        .catch(err => {
          console.log("Error When Attempting to Delete Book in Show Book Details");
        })
  };

  //render the show book details webpage
  render() {
    //use the book constructor to get all the values of the current book
    const book = this.state.book;
    let SelectedBook = <div>
      <table className="table table-sm table-hover table-dark">
        {
          //Table can be called later to display the books contents to the web page
        }
        <caption className={"text-center text-light"}>The above table shows details about the {book.title} book. Please edit mistakes
        using the edit button, or alternatively remove the book from the system using the remove button.</caption>
        <tbody>
        {
          //List all of the Selected Books details
        }
        <tr>
          <td>Title:</td>
          {
            //Book Title
          }
          <td>{ book.title }</td>
        </tr>
        <tr>
          {
            //Book Author
          }
          <td>Author:</td>
          <td>{ book.author }</td>
        </tr>
        <tr>
          {
            //Book ISBN
          }
          <td>ISBN:</td>
          <td>{ book.isbn }</td>
        </tr>
        <tr>
          {
            //Book Publisher
          }
          <td>Publisher:</td>
          <td>{ book.publisher }</td>
        </tr>
        <tr>
          {
            //Book Published Date
          }
          <td>Published Date:</td>
          <td>{ book.published_date }</td>
        </tr>
        <tr>
          {
            //Book Description
          }
          <td>Description:</td>
          <td>{ book.description }</td>
        </tr>
        </tbody>
      </table>
    </div>

    //return the webpage
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
                {
                  //Setup and link buttons
                }
                <p>
                  <Link to="/" className="btn btn-outline-dark translate-middle badge badge badge-secondary"> -Home Page- </Link>
                  <Link to="/" className="btn btn-outline-dark float-right translate-middle badge badge badge-secondary"> -Back to List- </Link>
                </p>
                <hr /> <br />
              </div>
            </div>
            {
              //Call the created book table
            }
            <div>
              { SelectedBook }
            </div>
            <hr />
            <div className="row">
              {
                //Remove Book Button
              }
              <div className="col-md-6">
                <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,book._id)}>Remove Book</button><br />
              </div>
              {
                //Edit Book Button
              }
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