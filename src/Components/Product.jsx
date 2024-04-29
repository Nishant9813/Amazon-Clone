import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

export const Product = ({id,title,price,rating,imgLink}) => {
  const [state,dispatch] = useStateValue();
  // console.log("This is state basket >>> ",state)
  const addtobasket =()=>{
    dispatch({
      type : "ADD_TO_BASKET",
      item:{
        id : id,
        title: title,
        price : price,
        rating : rating,
        imgLink : imgLink,
      }
    })
  }
  return (
    <div className='product'>
        <div className="product-info">
           <p>{title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                {Array(rating).fill().map((_,i)=>(
                  <p>⭐</p>
                ))}
            </div>
        </div>

        <img src={imgLink}/>
        <button onClick={addtobasket}>Add to Cart</button>
    </div>
  )
}
