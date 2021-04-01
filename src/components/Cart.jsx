import React from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/Cart.css'
const Cart = ({name, imgSrc, ratings, price}) => {
    const [{basket}] = useStateValue();
    return (
        <div className="products_cart">
            <div className='cart'>
                <img src={imgSrc} alt="Product image"/>
                <div className="product_detaild">
                <h4>{name}</h4>
                <p><small>{price}</small></p>
                <p>{ratings}</p>
                </div>
            </div>
        </div>
    )
}
export default Cart
