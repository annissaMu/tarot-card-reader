import React, { useState } from "react";
import Card from "../components/Card.tsx";
import cards from "../data/cards.json";

const Home = () => {
  //set list of chosen cards
  const [chosenCards, setChosenCards] = useState<object[]>([]);

  /**
   * card clicker handler
   * @returns void
   */
  const onClick = (card: object): void => {
    if (chosenCards.length < 3) {
      if (!chosenCards.includes(card)) {
        setChosenCards([...chosenCards, card]);
      }
    }
  };

  // NEXT STEP: add buttons when 3 cards are picked to navigate to card reading

  return (
    <div className="container">
      <div className="row">
        {cards.map((card) => {
          return (
            <div className="col-sm" onClick={() => onClick(card)}>
              <Card
                name={card.name}
                categ={card.category}
                img={card.img}
                isFlipped={chosenCards.includes(card)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
