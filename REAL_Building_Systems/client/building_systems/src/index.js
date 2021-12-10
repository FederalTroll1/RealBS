import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//render web pages
//use the root file for entry when the application first runs
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//calls the web vitals function created to measure performance
//in the application. Results are logged in the browser console
reportWebVitals(console.log);
