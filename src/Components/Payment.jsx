import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CartProduct } from "./CartProduct";
import { Link, useNavigate} from "react-router-dom";

import { NumericFormat } from "react-number-format";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import axios from './Axios'

export const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded,setSucceeded] = useState(false);
  const [processing,setProcessing] = useState("");
  const [clientScreat,setClientScreat] = useState(true);

  const navigate = useNavigate();

  useEffect(()=>{
    const getclientScreat= async ()=>{
        const respone = await axios({
          method : 'post',
          url : `/payment/create?total=${totalprice *100}`
        })
        setClientScreat(respone.data.clientScreat)
    }
    getclientScreat();
  },[basket])

  const stripe = useStripe();
  const element = useElements();
  let totalprice = 0;
  basket.forEach((item) => {
    totalprice += item.price;
  });

  const handleSubmit =async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload  = await stripe.confirmCardPayment(clientScreat,{
      payment_method:{
        card : element.getElement(CardElement)
      }
    }).then(({pyamentIntent})=>{
      setSucceeded(true);
      setError(false);
      setProcessing(false);
       
      navigate('/orders');
    })

  };

  const handleChange = (e) => {
    // it listen for change in the card element
    // and display any error as their cusotmer type and their card detail
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/cart">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Rohad</p>
            <p>Nishant Ruhil CA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe use for paymetn method  */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <NumericFormat
                  renderText={() => (
                    <>
                      <h3>Order Total: {totalprice}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={0}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* error */}
              {error && <div>error</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
