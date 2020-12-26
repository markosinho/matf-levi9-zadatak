
import './App.css';
// import Link from 'react';

// import Product from '../Products/Product';
import Navigation from '../Header/Navigation';
import UserList from '../Users/UserList';
import ProductList from '../Products/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  // TODO: Fetch permissions
  const permissions = {
    canSeeProducts: true,
    canSeeUsers: true
  }

  // TODO: Set routes in array

  return (
    <div >
      <Router>
        <header>
          <Navigation permissions={permissions} />
        </header>

        <Switch>
          <Route exact path="/" />
          <Route exact path="/users" component={UserList} />
          <Route path="/products" component={ProductList} />          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
