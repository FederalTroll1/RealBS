// app.js will act as the entry point for the project

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