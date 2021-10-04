import React from "react";
import "./card.css";
import CardImg1 from "./images/card-img-1.png";
import CardImg2 from "./images/card-img-2.png";
import CardImg3 from "./images/card-img-3.png";
const Card = () => {
  return (
    <section className="section-2">
      <h1 className="section-heading">Popular Meals</h1>
      <div className="cards-container">
        <div className="card">
          <img src={CardImg1} alt="" className="card-img" />
          <h3 className="card-name">Fish</h3>
          <button className="card-btn">Order now</button>
        </div>
        <div className="card">
          <img src={CardImg2} alt="" className="card-img" />
          <h3 className="card-name">Cake</h3>
          <button className="card-btn">Order now</button>
        </div>
        <div className="card">
          <img src={CardImg3} alt="" className="card-img" />
          <h3 className="card-name">Lobster</h3>
          <button className="card-btn">Order now</button>
        </div>
      </div>
    </section>
  );
};
export default Card;
