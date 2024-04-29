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
          <Product id={1} title="Hindi" price={62} rating={4} imgLink="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" />
          <Product id={2} title="abcd" price={26} rating={3} imgLink="https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"/>
        </div>
        <div className="home-row">
          <Product id={3} title="Math" price={16} rating={5} imgLink="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"/>
          <Product id={4} title="English" price={27} rating={2} imgLink="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"/>
          <Product id={5} title="Hinglish" price={66} rating={4} imgLink="https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"/>
        </div>
        <div className="home-row">
          <Product id={6} title="Aptitude" price={98} rating={3} imgLink="https://images.unsplash.com/photo-1634245482259-edd9f5786050?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8cExvT1VaWHlna3N8fGVufDB8fHx8fA%3D%3D"/>
        </div>
      </div>
    </div>
  );
};
