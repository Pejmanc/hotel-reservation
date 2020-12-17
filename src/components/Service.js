import React from "react";

export default function Service({ logo, title, explanation }) {
  return (
    <div className="service">
      <span>{logo}</span>
      <h6>{title}</h6>
      <p>{explanation}</p>
    </div>
  );
}
