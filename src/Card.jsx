// import React from 'react'
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <img src="https://i.stack.imgur.com/kyKz5.png" alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
