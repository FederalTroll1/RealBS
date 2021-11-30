/* eslint-env es6 */
/* eslint-disable */

//mongoose is used to establish a connection between MongoDB
//and the Express web application
const mongooseConnection = require('mongoose');

//create a new connection using the fields that exist in my MongoDB
//Atlas database
const BookSchematic = new mongooseConnection.Schema({

  /*The following Schema connects to Mongo with the relevant
  * table names and types for each field in the table*/

  //title db field
  title: {
    type: String,
    required: true
  },
  //isbn db field
  isbn: {
    type: String,
    required: true
  },
  //author db field
  author: {
    type: String,
    required: true
  },
  //description db field
  description: {
    type: String
  },
  //published date db field
  published_date: {
    type: Date
  },
  //publisher db field
  publisher: {
    type: String
  },
  //updated data db field
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongooseConnection.model('book', BookSchematic);