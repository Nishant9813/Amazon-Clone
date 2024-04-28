import React from "react";
import "./Home.css";
import { Product } from "./Product";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2018/PVLandingPage/Header/1242x450_Mobile-Landing-Page-Header_Web.jpg"
        />

        <div className="home-row">
          <Product title="Hello" price="25" rating={4} imgLink="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" />
          <Product />
        </div>
        <div className="home-row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home-row">
          <Product />
        </div>
      </div>
    </div>
  );
};
