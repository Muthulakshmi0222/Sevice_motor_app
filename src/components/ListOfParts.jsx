import React from 'react'
import '../styles/Parts.css'
const Parts = (props) => {
    return(
        <>
        <div id='parts'>
            <img src={props.imgSorc} alt='Parts'/>
            <h5>{props.part_name}</h5>
        </div>
        </>
    );
};

export default Parts;