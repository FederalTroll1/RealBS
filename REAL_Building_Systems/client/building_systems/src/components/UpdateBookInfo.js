import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

/*The Update Book Information Page Takes the Selected Book from
* the Book List Page and allows users to make modifications to the entry.
* There is form validation to ensure that a book cannot be updated to have
* no values for its fields to maintain data integrity.*/

//create update book info class that uses the book constructor
class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    //set the values of the current book in the constructor
    this.state = {
      title: '',
      isbn: '',
      author: '',
      description: '',
      published_date: '',
      publisher: ''
    };
  }

  //fetch the book using it's id to render on screen
  componentDidMount(id) {
    //split the url to get just the book id stored in the database
    const pathArray = window.location.pathname.split('/');
    const secondLevelLocation = pathArray[2];

    //begin get request using the book id
    axios
      .get('http://localhost:8082/api/books/' + secondLevelLocation)
      .then(res => {
        //get all of the current values stored in the database for the book
        this.setState({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher
        })
      })
      .catch(err => {
        console.log("Error In Update Book Information");
      })
  };

  //on change of state, set the new value when done so by the user
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    //get the data of the current book and set its values to the corresponding key
    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher
    };

    //get the id of the book from the url
    const pathArray = window.location.pathname.split('/');
    const secondLevelLocation = pathArray[2];
    //get and send the data from atlas
    axios
      .put('http://localhost:8082/api/books/'+secondLevelLocation, data)
      .then(res => {
        this.props.history.push('/show-book/'+secondLevelLocation);
      })
      .catch(err => {
        console.log("Error In Update Book Information");
      })
  };

  //Webpage HTML
  //render in all components for the webpage
  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              {
                //Home and Back buttons
              }
              <Link to="/" className="btn btn-outline-dark float-left translate-middle badge badge badge-secondary">-Home Page-</Link>
              <Link to="/" className="btn btn-outline-dark float-right translate-middle badge badge badge-secondary">-Back To List-</Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">{this.state.title}</h1>
              <hr />
              <p className="lead text-center">Update Book's Info</p>
              <hr />
            </div>
          </div>

          <div className="col-md-8 m-auto">

          <form className='UpdateInfo' noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title"><u>Title:</u></label>
              <input
                type='text'
                id='title'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
                required
              />
              {
                //for validation to maintain security
              }
              <div className="invalid-feedback">
                Please provide a value.
              </div>
            </div>

            <div className='form-group'>
            <label htmlFor="isbn"><u>ISBN:</u></label>
              <input
                type='text'
                id='isbn'
                placeholder='ISBN'
                name='isbn'
                className='form-control'
                value={this.state.isbn}
                onChange={this.onChange}
                required
              />
              {
                //for validation to maintain security
              }
              <div className="invalid-feedback">
                Please provide a value.
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor="author"><u>Author:</u></label>
              <input
                type='text'
                id='author'
                placeholder='Author'
                name='author'
                className='form-control'
                value={this.state.author}
                onChange={this.onChange}
                required
                />
              {
                //for validation to maintain security
              }
              <div className="invalid-feedback">
                Please provide a value.
              </div>
            </div>

            <div className='form-group'>
            <label htmlFor="description"><u>Description:</u></label>
              <input
                type='text'
                id='description'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
                required
              />
              {
                //for validation to maintain security
              }
              <div className="invalid-feedback">
                Please provide a value.
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor="published_date"><u>Published Date:</u></label>
              <input
                type='date'
                id='published_date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                value={this.state.published_date}
                onChange={this.onChange}
                required
              />
              {
                //for validation to maintain security
              }
              <div className="invalid-feedback">
                Please provide a value.
              </div>
            </div>
            <div className='form-group'>
            <label htmlFor="publisher"><u>Publisher:</u></label>
              <input
                type='text'
                id='publisher'
                placeholder='Publisher of this Book'
                name='publisher'
                className='form-control'
                value={this.state.publisher}
                onChange={this.onChange}
                required
              />
              {
                //for validation to maintain security
              }
              <div className="invalid-feedback">
                Please provide a value.
              </div>
            </div>

            {
              //Submit Button
            }
            <button type="submit" className="btn btn-outline-success btn-lg btn-block">Update Book</button>
            </form>

            {
              //Function for the form validation
              //This ensures that each field has an entry and cannot be submitted empty
            }
            <script>
              (function() {
              window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                const forms = document.getElementsByClassName('UpdateInfo');
                // Loop over them and prevent submission
                const validation = Array.prototype.filter.call(forms, function (form) {
                  form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                  }, false);
                });
              }, false)});
            </script>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateBookInfo;