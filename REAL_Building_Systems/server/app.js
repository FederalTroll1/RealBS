/* eslint-env es6 */
/* eslint-disable */

// app.js will act as the entry point for the project
//Initial CPU Profiling for Observability is setup

//Initialises database Atlas DB Connections
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.argv[2] || process.env.PORT || 8082;

//ensures that all hosting servers are running for load balancing
app.get('/', (req, res) => {
  res.send(`Hello from port ${port}`);
  console.log(`Hello from port ${port}`);
});

//Checks expected ports are being used for load balancing
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