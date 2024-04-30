import React from 'react';
import './Cart.css';
import { Subtotal } from './Subtotal';

import { useStateValue } from './StateProvider';
import { CartProduct } from './CartProduct';

export const Cart = () => {
  const [{ basket ,user},dispatch] = useStateValue();

  return (
    <div className="cartcheckout">
      <div className="checkout-left">
        
        <img className='checkout-ad' src='https://images.fonearena.com/blog/wp-content/uploads/2023/07/Amazon-Prime-Day-Laptop-Offers-and-Deals-1024x325.png'/>
        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout-title">Your Shopping cart</h2>
          {/* Use map to render each product in the basket */}
          {basket.map((element) => (
            <CartProduct
              key={element.id} 
              id={element.id}
              title={element.title}
              rating={element.rating}
              price={element.price}
              imgLink={element.imgLink}
            />
          ))}
        
      </div>
      <div className="checkout-right">
        <Subtotal/>
      </div>
    </div>
  );
};
