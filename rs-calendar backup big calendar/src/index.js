import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// var myHeaders = new Headers();

// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'no-cors',
//                cache: 'default' };
// let response;
// fetch('http://128.199.53.150/events')
//   .then(function(response) {
//   if(response.ok) {
//     return response.json();
//   }
//   throw new Error('Network response was not ok.');
// }).then(function(myJson) {
//     console.dir(myJson);
//     response = myJson;
// }).catch(function(error) {
//   console.log('There has been a problem with your fetch operation: ' + error.message);
// });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
