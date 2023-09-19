import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <img src={props.image} />
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button className="button">Visit</button>
      </a>
    </div>
  );
};

export default Card;
