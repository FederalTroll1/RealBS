import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher
    };

    axios
      .post('http://localhost:8082/api/books', data)
      .then(res => {
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
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add A New Entry</h1>
              <hr />
              <Link to="/" className="btn btn-outline-dark translate-middle badge badge badge-secondary"> -Home Page- </Link>
              <Link to="/" className="btn btn-outline-dark float-right translate-middle badge badge badge-secondary"> -Back to List- </Link>
              <hr />
              <br />

              <form className='UpdateInfo' noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a value.
                  </div>
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='ISBN'
                    name='isbn'
                    className='form-control'
                    value={this.state.isbn}
                    onChange={this.onChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a value.
                  </div>
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a value.
                  </div>
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this book'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a value.
                  </div>
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a value.
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Publisher of this Book'
                    name='publisher'
                    className='form-control'
                    value={this.state.publisher}
                    onChange={this.onChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a value.
                  </div>
                </div>

                <input type="submit" className="btn btn-outline-warning btn-block mt-4"/>
              </form>

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
                }, false)};
              </script>

          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;