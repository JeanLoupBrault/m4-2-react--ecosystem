import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Home from './Home';
import Header from './Header';
//import { items } from './data'
import ItemDetails from './ItemDetails';
import ErrorPage from './ErrorPage';

/* <p>Fruit emporium is founded on a very simple principle: <span>Fruit is good.</span></p>
                <p>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</p> */



function About(props) {

    return (

        <Router>
            <Header>

            </Header>
            <div>
                <Switch>
                    <div>
                        <p>Fruit emporium is founded on a very simple principle: <span>Fruit is good.</span></p>
                    </div>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/items/:itemId">
                        <ItemDetails />
                    </Route>
                    <Link path="/items">
                        Item list page
                </Link>
                    <Route path="/error">
                        <ErrorPage />
                    </Route>

                </Switch>
            </div>
        </Router>

    )
}

export default About;