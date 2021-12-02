import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isbn: '',
      author: '',
      description: '',
      published_date: '',
      publisher: ''
    };
  }

  componentDidMount(id) {
    // console.log("Print id: " + this.props.match.params.id);
    const pathArray = window.location.pathname.split('/');
    const secondLevelLocation = pathArray[2];
    axios
      .get('http://localhost:8082/api/books/' + secondLevelLocation)
      .then(res => {
        // this.setState({...this.state, book: res.data})
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
        console.log("Error from UpdateBookInfo");
      })
  };

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

    const pathArray = window.location.pathname.split('/');
    const secondLevelLocation = pathArray[2];
    axios
      .put('http://localhost:8082/api/books/'+secondLevelLocation, data)
      .then(res => {
        this.props.history.push('/show-book/'+secondLevelLocation);
      })
      .catch(err => {
        console.log("Error in UpdateBookInfo!");
      })
  };

  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
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
              <div className="invalid-feedback">
                Please provide a value.
              </div>
            </div>

            <button type="submit" className="btn btn-outline-success btn-lg btn-block">Update Book</button>
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
    );
  }
}

export default UpdateBookInfo;