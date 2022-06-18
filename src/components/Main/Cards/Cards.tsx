import React from "react";
import Card from "../Card/Card";
import classes from "./Cards.module.scss";

const Cards = (props: any) => {
  const cards = [
    {
      id: 1,
      icon: "../../../src/components/assets/images/card1.png",
      text: "Easy to order",
      description: 'You only need a few steps in ordering food'
    },
    {
      id: 2,
      icon: "../../../src/components/assets/images/card2.png",
      text: "Fastest delivery",
      description: 'Delivery that is always ontime even faster'
    },
    {
      id: 3,
      icon: "../../../src/components/assets/images/card3.png",
      text: "Best Quality",
      description: 'Not only fast for us quality is also number one'
    },
  ];
  return (
    <>
      <div className={classes.titles}>
        <h3>WHAT WE SERVE</h3>
        <h2>Your favorite food <br/>delivery partner</h2>
      </div>
      <div className={classes.cards}>
        {cards.map((card: any) => (
          <Card
            key={card.id}
            img={card.icon}
            text={card.text}
            alt={card.text}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
