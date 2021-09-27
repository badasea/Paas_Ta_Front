import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Index from './Home';
import Login from './Login';
import withRoot from './modules/withRoot';

function App() {
    return (
        <Switch>
            <div>
                <Route path = "/Login">
                    <Login />
                </Route>
                <Route path = "/">
                    <Index />
                </Route>
            </div>
        </Switch>
    )
}

export default withRoot(App);