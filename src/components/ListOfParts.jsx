import React from 'react'
import '../styles/Parts.css'
import { useStateValue } from '../StateProvider'

const Parts = ({imgSorc , part_name, ratings, price}) => {

    const [{basket}, dispatch] = useStateValue();
    const handleDispatch = () => {
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                name : part_name,
                imgSrc : imgSorc,
                rating : ratings,
                price : price,
                
            },
        });
    }
    return(
        <>
        <div id='parts'>
            <img src={imgSorc} alt='Parts'/>
            <h5>{part_name}<p>{price}</p></h5>
        </div>
        <button id='cartBtn' onClick={handleDispatch} variant="contained">Addtocart</button>  
        </>
    );
};

export default Parts;