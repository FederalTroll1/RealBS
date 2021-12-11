import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

/*The Create Book Page allows a user to create a new book entry
* that will then be stored in the MongoDB Atlas database. There
* is use of form validation to ensure data integrity and make sure
* that no book is able to have data missing about it.*/

//constructor for a book
//includes all of the field values needed
//in the database
class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      isbn:'',
      author:'',
      description:'',
      published_date:'',
      publisher:''
    };
  }

  //change the current value of the named element
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //when submitting to the database
  onSubmit = e => {
    e.preventDefault();

    //set the current field values to the empty
    //constructor values that can be posted to th database
    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher
    };

    //begin post request to the database with the data structure
    axios
      .post('http://localhost:8082/api/books', data)
      .then(res => {
        //set the values for the post request
        this.setState({
          title: '',
          isbn:'',
          author:'',
          description:'',
          published_date:'',
          publisher:''
        })
        this.props.history.push('/');
      })
        //if error
      .catch(err => {
        console.log("Error in Creating Book, please enter values");
      })
  };

  //visual website render
  render() {
    return (
      //basic formatting of functionality using bootstrap
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add A New Entry</h1>
              <hr />
              {
                //button links
              }
              <Link to="/" className="btn btn-outline-dark translate-middle badge badge badge-secondary"> -Home Page- </Link>
              <Link to="/" className="btn btn-outline-dark float-right translate-middle badge badge badge-secondary"> -Back to List- </Link>
              <hr />
              <br />

              {
                //create the form for users to enter new book information
              }
              <form className='UpdateInfo' noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  {
                    //Details for field in the form
                  }
                  <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                    required
                  />
                  {
                    //class for form validation for system security
                  }
                  <div className="invalid-feedback">
                    Please provide a value.
                  </div>
                </div>

                <div className='form-group'>
                  {
                    //Details for field in the form
                  }
                  <input
                    type='text'
                    placeholder='ISBN'
                    name='isbn'
                    className='form-control'
                    value={this.state.isbn}
                    onChange={this.onChange}
                    required
                  />
                  {
                    //class for form validation for system security
                  }
                  <div className="invalid-feedback">
                    Please provide a value.
                  </div>
                </div>

                <div className='form-group'>
                  {
                    //Details for field in the form
                  }
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                    required
                  />
                  {
                    //class for form validation for system security
                  }
                  <div className="invalid-feedback">
                    Please provide a value.
                  </div>
                </div>

                <div className='form-group'>
                  {
                    //Details for field in the form
                  }
                  <input
                    type='text'
                    placeholder='Describe this book'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                    required
                  />
                  {
                    //class for form validation for system security
                  }
                  <div className="invalid-feedback">
                    Please provide a value.
                  </div>
                </div>

                <div className='form-group'>
                  {
                    //Details for field in the form
                  }
                  <input
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                    required
                  />
                  {
                    //class for form validation for system security
                  }
                  <div className="invalid-feedback">
                    Please provide a value.
                  </div>
                </div>
                <div className='form-group'>
                  {
                    //Details for field in the form
                  }
                  <input
                    type='text'
                    placeholder='Publisher of this Book'
                    name='publisher'
                    className='form-control'
                    value={this.state.publisher}
                    onChange={this.onChange}
                    required
                  />
                  {
                    //class for form validation for system security
                  }
                  <div className="invalid-feedback">
                    Please provide a value.
                  </div>
                </div>
                <input type="submit" className="btn btn-outline-success btn-block mt-4"/>
              </form>

              {
                //function to support form validation when creating a book
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
      </div>
    );
  }
}

export default CreateBook;