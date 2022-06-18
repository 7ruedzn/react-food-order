import React from "react";
import classes from "./Card.module.scss";

interface PropTypes {
  img: string,
  alt: string,
  text: string,
  description: string
}

const Card = (props: PropTypes) => {
  return (
    <div className={classes.card}>
      <img src={props.img} alt={props.alt} />
      <h1>{props.text}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
