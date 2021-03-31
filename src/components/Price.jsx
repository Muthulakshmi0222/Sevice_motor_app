import React from 'react';
import '../styles/Price.css';

const Price = (props) => {

    return(
        <>
        <div id='Prices'>
            <h3>{props.priceNAme}</h3>
            <p>{props.Cost}</p>
        </div>
        </>
    );
};

export default Price;