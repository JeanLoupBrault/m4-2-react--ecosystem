import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ListingSellerItem from './ListingSellerItem';

const ListingGridSeller = ({ sellerList, itemList }) => {
    return (
        <Wrapper>
            {sellerList.map(seller => (
                <ListingSellerItem key={seller.id} seller={seller} />
            ))}
            {/* {itemList.map(item => (
                <ListingSellerItem key={item.id} item={item} />

            ))} */}

        </Wrapper>
    );
};

ListingGridSeller.propTypes = {
    // itemList: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         id: PropTypes.string.isRequired,
    //         name: PropTypes.string.isRequired,
    //         latinName: PropTypes.string.isRequired,
    //         description: PropTypes.string.isRequired,
    //         imageSrc: PropTypes.string.isRequired,
    //         countryOfOrigin: PropTypes.string.isRequired,
    //         sellerId: PropTypes.string.isRequired,
    //     })
    // ).isRequired,
    sellerList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            storeName: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            avatarSrc: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 32px;
    margin: 32px 0;
`;

export default ListingGridSeller;
