import { useState } from "react";
import type { CardProps } from "../../types";
import "./Card.css";

const emptyColor = "white";
const backgroundColor1 = "cadetblue";
const backgroundColor2 = "antiquewhite";

export const Card: React.FC<CardProps> = ({ image, description }) => {
  const [cardSide, setCardSide] = useState(-1);
  const [background, setBackground] = useState(emptyColor);

  const imgStyle = {
    transform: `scaleX(${cardSide})`,
    backgroundColor: background,
  };

  const buttonLeft = {
    background: backgroundColor1,
  };

  const buttonRight = {
    background: backgroundColor2,
  };

  const changeBackground = (color: string, side: number): string => {
    setBackground(color);
    setCardSide(side);
    return background;
  };

  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          onClick={() => changeBackground(backgroundColor1, -1)}
          type="button"
          className="btn"
          style={buttonLeft}
        >
          Left
        </button>
        <button
          onClick={() => changeBackground(backgroundColor2, 1)}
          type="button"
          className="btn"
          style={buttonRight}
        >
          Right
        </button>
      </div>
      <div className="card card-content">
        <img
          src={image}
          className="card-img-top"
          style={imgStyle}
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};
