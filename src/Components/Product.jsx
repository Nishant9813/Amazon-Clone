import React from 'react';
import "./Product.css";

export const Product = ({title,price,rating,imgLink}) => {
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
        <button>Add to Cart</button>
    </div>
  )
}
