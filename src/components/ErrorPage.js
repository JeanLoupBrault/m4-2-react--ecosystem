import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './Home';
//import Header from './Header';

function ErrorPage(props) {

    return (


        <Router>

            <p>Error page</p>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>


            </Switch>
        </Router>

    )
}










export default ErrorPage;