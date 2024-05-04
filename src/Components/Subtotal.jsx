import React from "react";
import "./Subtotal.css";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

export const Subtotal = () => {
  const navigate = useNavigate();
  const [{basket},dispatch] = useStateValue();
  let totalprice = 0;
  basket.forEach((item) => {
    totalprice += item.price;
  });
  return (
    <div className="subtotal">
      <NumericFormat
        renderText={() => (
          <>
            <h4>
              Subtotal ({basket.length} item): <strong>${totalprice}</strong>
            </h4>
            <small className="subtotal-gift">
                <input type="checkbox" />This order contains a gift
            </small>
            <button className="subtotal-button" onClick={(e)=> navigate('/payment')}>
                Proceed to Checkout
            </button>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};