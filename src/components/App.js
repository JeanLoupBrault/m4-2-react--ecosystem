import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Header from './Header';
import About from './About';
import Home from './Home';
import ItemDetails from './ItemDetails';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
//import ErrorPage from './ErrorPage';
//import { items } from './data'

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/items/:itemId">
              <ItemDetails />
            </Route>
          </Switch>
        </Main>
      </Wrapper>

      <GlobalStyles />
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
max-width: 800px;
margin: auto;
`;

const Main = styled.main`
padding-top: 32px;
padding-bottom: 32px;
`;

export default App;
