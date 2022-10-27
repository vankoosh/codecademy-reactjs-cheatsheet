import React from "react";
import "./Card.css";

export default function Card({
  props,
  index,
  length,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div className="card">
      <p className="card__text">
        {index} of {length}
      </p>
      <img
        src={props.src}
        className="card__img"
        alt=""
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
}
