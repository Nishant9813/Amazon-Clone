import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CartProduct } from "./CartProduct";
import { Link, useNavigate } from "react-router-dom";

import { NumericFormat } from "react-number-format";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import axios from "./Axios";

import { db, collection, doc, setDoc } from "../firebase";

export const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientScreat, setClientScreat] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getclientScreat = async () => {
      const respone = await axios({
        method: "post",
        url: `/payment/create?total=${totalPriceInCents}`,
      });
      setClientScreat(respone.data.clientScreat);
    };
    getclientScreat();
  }, [basket]);

  console.log("This is client secrete", clientScreat);

  const stripe = useStripe();
  const element = useElements();
  let totalPrice = 0;
  basket.forEach((item) => {
    totalPrice += item.price;
  });

  // Convert total price to cents (required by Stripe)
  const totalPriceInCents = totalPrice * 100;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientScreat, {
      payment_method: {
        card: element.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
    } else {
      try {
        await saveOrderToFirestore(payload.paymentIntent, user, basket);
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({ type: "EMPTY_BASKET" });
        navigate("/orders");
      } catch (error) {
        setError(`Error saving order: ${error.message}`);
        setProcessing(false);
      }
    }
  };

  const saveOrderToFirestore = async (paymentIntent, user, basket) => {
    console.log("User:", user);
    console.log("Basket:", basket);

    const orderRefPath = ["users", user?.uid, "orders", paymentIntent.id];
    console.log("OrderRefPath:", orderRefPath);

    const orderRef = doc(collection(db, ...orderRefPath));

    try {
      await setDoc(orderRef, {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });
      console.log("Order successfully saved to Firestore!");
    } catch (error) {
      console.error("Error saving order to Firestore:", error);
    }
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
                      <h3>Order Total: {totalPrice}</h3>
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
              {console.log(error)}
              {error && <div>error</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
