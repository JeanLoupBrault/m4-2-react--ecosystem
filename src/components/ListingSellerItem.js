import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//import Button from './Button';

const ListingSellerItem = ({ item, seller }) => {
    return (
        <CardLink to={`/sellers/${seller.id}`}>
            <Wrapper>
                <SellerPic src={seller.avatarSrc} />
                <Name>{seller.name}</Name>
                <Decoration />
                <StoreName>{seller.storeName}</StoreName>
            </Wrapper>
        </CardLink>
    );
};

const CardLink = styled(Link)`
    text-decoration: none;
    transition: transform 250ms;

    &:hover {
        transform: scale(1.05);
        transform-origin: center center;
    }
`;

const Wrapper = styled.div`
    padding: 36px;
    border-radius: 16px;
    box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const SellerPic = styled.img`
    border-radius: 12px;
    margin-top: -48px;
    width: 80%;
`;

const Name = styled.h3`
    font-size: 24px;
    color: #333;
    margin-top: 12px;
`;

const StoreName = styled.h5`
    color: #999;
    font-style: italic;
    font-size: 16px;
    font-weight: 300;
`;

const Decoration = styled.div`
    width: 50px;
    height: 5px;
    border-radius: 0 0 50% 50%;
    background: #000;
    opacity: 0.1;
    margin: 12px auto;
`;

export default ListingSellerItem;