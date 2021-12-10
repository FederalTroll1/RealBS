/* eslint-env es6 */
/* eslint-disable */

//mongoose is used to establish a connection between MongoDB
//and the Express web application
const mongooseConnection = require('mongoose');
const configuration = require('config');
//gets the MongoDB credentials from the JSON file
//uses this to establish a connection to Mongo
const dbCredentials = configuration.get('mongoURI');

//try a database connection
const connectToDatabase = async () => {
  try {
    await mongooseConnection.connect(
      dbCredentials,
      {
        useNewUrlParser: true
      }
    );

    //indicate a successful connection to the database
    console.log('MongoDB Connected Successfully...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase();