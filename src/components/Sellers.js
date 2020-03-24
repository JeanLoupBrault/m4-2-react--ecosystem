import React from 'react';
import styled from 'styled-components';

import ListingGridSeller from './ListingGridSeller';
import Paragraph from './Paragraph';

import { sellers } from '../data';

function Sellers(props) {
    return (
        <>
            <Intro>
                <Paragraph>
                    Fruit emporium sells the finest fruits from this world and beyond. Here is a list of our proud sellers.
                </Paragraph>
                <Paragraph>
                    <strong>Browse sellers:</strong>
                </Paragraph>
            </Intro>
            <ListingGridSeller sellerList={Object.values(sellers)} />
        </>
    );
}

const Intro = styled.div`
    padding-bottom: 24px;
`;

export default Sellers;
