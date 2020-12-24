import logo from './logo.svg';
import './App.css';
import Route from 'react';
import Link from 'react';

import Product from './Products/Product';
import Navigation from './Header/Navigation';
import UserList from './Users/UserList';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div >
      <header>
        <Navigation />
      </header>

      <UserList />

      

      {/* <Link to="/insert/your/path/here" className="btn btn-primary">hello</Link> */}



      {/* <Product /> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
