import React from 'react';



import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    // `useParams` is the hook.
    // Hooks always start with `use`.
    const { itemId } = useParams();

    return <h3>Item ID: {itemId}</h3>
};



export default ItemDetails;





