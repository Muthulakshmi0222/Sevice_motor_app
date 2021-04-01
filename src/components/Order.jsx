import React from 'react'
import Cart from './Cart'
import '../styles/Orders.css'
import { useStateValue } from '../StateProvider'
const Order = () => {

    const [{basket}] = useStateValue();
    return (
        <div className='orders'>
        {
           basket?.length === 0 ? (
                <div className='emptyBasket'>
                    <h1>Your shopping Basket is empty</h1>
                </div>   
           ): (
               <div id='cartAddedProducts'>
                <h2>Your shopping Basket</h2>
                    <div id='productsList'>
                    {
                    basket.map(item => (
                        <Cart 
                        name = {item.name}
                        imgSrc = {item.imgSrc}
                        ratings = {item.rating}
                        price = {item.price}
                        />
                    ))
                    }
                    </div>    
               </div>
           )
        }
        
        </div>
    )
}

export default Order
