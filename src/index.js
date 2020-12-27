import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faUser, faUsers, 
  faTrash, faEuroSign, faBoxes, faBox, faHome } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faCoffee, faUser, faUsers, 
  faTrash, faEuroSign, faHome, faBox, faBoxes);

ReactDOM.render(
  <App />,
  // <React.StrictMode>
  //   <App />
  //   <Router>
  //       <div className="App">
  //           <Navigation />
  //           <Routes />
  //       </div>
  //   </Router>
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
