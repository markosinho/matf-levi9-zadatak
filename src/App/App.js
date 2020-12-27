import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';
// import Link from 'react';

// import Product from '../Products/Product';
import Navigation from '../Header/Navigation';
import UserList from '../Users/UserList';
import ProductList from '../Products/ProductList';


import '../Shared/Shared.css';



function App() {

  // TODO: Fetch permissions
  const permissions = {
    canSeeProducts: true,
    canManageProducts: true,
    canManageUsers: true
  }

  // TODO: Set routes in array

  return (
    <div >
      <Router>
        <header>
          <Navigation permissions={permissions} />
        </header>

        <Switch>
          {/* <Route exact path="/" component={ProductList(permissions.canSeeProducts)}/> */}
          <Route exact path="/" render={() => <ProductList canSee={false}
                                            canManage={false} />} />


          <Route path="/products" render={() => <ProductList canSee={permissions.canSeeProducts}
                                            canManage={permissions.canManageProducts} />} />
          <Route exact path="/users" component={UserList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
