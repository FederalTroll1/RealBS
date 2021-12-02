/* eslint-env es6 */
/* eslint-disable */

// app.js will act as the entry point for the project

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.argv[2] || process.env.PORT || 8082;

app.get('/', (req, res) => {
  res.send(`Hello from port ${port}`);
  console.log(`Hello from port ${port}`);
});

app.listen(port, () => console.log(`Server running on port ${port}`));


/*The following code supports CPU Profiling*/

const inspector = require('inspector');
const fs = require('fs');
const session = new inspector.Session();
session.connect();

session.post('Profiler.enable', () => {
  session.post('Profiler.start', () => {
    session.post('Profiler.stop', (err, { profile }) => {
      // Write profile to the file specified below
      //This file can then be used to view the CPU activity
      if (!err) {
        fs.writeFileSync('./profile.cpuprofile', JSON.stringify(profile));
      }
    });
  });
});