import React from 'react';
import './Cart.css';

export const Cart = () => {
  return (
    
    <div className="cartcheckout">
        <div className="checkout-left">
            <img className='checkout-ad' src='https://images.fonearena.com/blog/wp-content/uploads/2023/07/Amazon-Prime-Day-Laptop-Offers-and-Deals-1024x325.png'/>

            <div className="checkout-title">
                <h1>Shooping Cart</h1>
            </div>
        </div>
        <div className="checkout-right">
            <h1>Subtotal will give here</h1>
        </div>
    </div>
  )
}
