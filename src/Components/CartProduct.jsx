import React from 'react'
import "./CartProduct.css";
import { useStateValue } from './StateProvider';

export const CartProduct = ({id,title,price,rating,imgLink}) => {
    const [state,dispatch] = useStateValue();
    const removeFormBasket =()=>{
        dispatch({
            type : "REMOVE_FROM_BASKET",
              id : id,
          })
    }
    return (
      <div className='cart-product'>
         <img src={imgLink}/>
          <div className="cartproduct-info">
             <p className='cartproduct-title'>{title}</p>
              <p className="cartproduct-price">
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className='cartproduct-rating'>
                  {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                  ))}
              </div>
          <button className='cartproduct-button' onClick={removeFormBasket}>Remove from Cart</button>
          </div>
  
         
      </div>
    )
}
