
import './App.css';
// import Link from 'react';

// import Product from '../Products/Product';
import Navigation from '../Header/Navigation';
import UserList from '../Users/UserList';
import ProductList from '../Products/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div >
      <Router>
        <header>
          <Navigation />
        </header>

        <Switch>
          <Route exact path="/" />
          <Route exact path="/users" component={UserList} />
          <Route path="/products" component={ProductList} />
          
        </Switch>



        



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

      </Router>
    </div>
  );
}

export default App;
