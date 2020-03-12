import React from 'react';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom';

//import About from './About';
//import ErrorPage from './ErrorPage';
import Paragraph from './Paragraph';
import ListingGrid from './ListingGrid';
import styled from 'styled-components';
import { items } from '../data';


function Home(props) {
    return (
        <>
            <Intro>
                <Paragraph>
                    Fruit emporium sells the finest fruits from this world and beyond.
        </Paragraph>
                <Paragraph>
                    <strong>Browse items:</strong>
                </Paragraph>
            </Intro>
            <ListingGrid itemList={Object.values(items)} />
        </>
    );
}

const Intro = styled.div`
    padding-bottom: 24px;
`;

export default Home;

//return (
    //     <Router>
    //         <Switch>
    //             <div>
    //                 <p>Fruit Emporium sells the finest fruits from this world and beyond.</p>
    //             </div>
    //             <Link exact path="/about">
    //                 <About />
    //             </Link>
    //             <Route exact path="/error">
    //                 <ErrorPage />
    //             </Route>
    //         </Switch>
    //     </Router>
    // )

/* <section>

                        {props.items.map((item) => {
                            return (
                                item.id
                            )
                        })}
                    </section> */
