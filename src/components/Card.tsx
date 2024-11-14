import React from "react";
import "./css/Card.css";

const Card = ({
  name,
  categ,
  img,
  isFlipped,
}: {
  name: string;
  categ: string;
  img: string;
  isFlipped: boolean;
}) => {
  // background styling passed by props
  const backCardImg: React.CSSProperties = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="flip-card">
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front"></div>
        <div id="flip-card-back" className="flip-card-back" style={backCardImg}>
          {name} <br />
          {categ}
        </div>
      </div>
    </div>
  );
};

export default Card;
