//Clickable Cards (Show Room)

import React from "react";
import defaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
export default function Room({ room }) {
  const { name, images, price, slug } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt={name} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per nght</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          See Room
        </Link>
        <p className="room-info">{name}</p>
      </div>
    </article>
  );
}
