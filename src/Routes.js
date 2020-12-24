import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import UserList from './Users/UserList';
import Navigation from './Header/Navigation';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={UserList} />
                    <Route path="/navigate" component={Navigation} />
                    {/* <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }
}