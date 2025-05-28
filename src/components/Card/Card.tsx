import { useState } from "react";
import type { cardImgStyle, CardProps } from "../../types";
import "./Card.css";
import { colors } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../state/store";
import {
  incrementAsync,
  incrementByAmount,
} from "../../state/counter/counterSlice";

const buttonLeft = {
  background: colors.backgroundColor1,
};

const buttonRight = {
  background: colors.backgroundColor2,
};

const getImgStyle = (side: number, background: string): cardImgStyle => {
  return {
    transform: `scaleX(${side})`,
    backgroundColor: background,
  };
};

export const Card: React.FC<CardProps> = ({ image, description }) => {
  const [cardSide, setCardSide] = useState(-1);
  const [background, setBackground] = useState(colors.emptyColor);
  const imgStyle = getImgStyle(cardSide, background);

  const changeBackground = (color: string, side: number): string => {
    setBackground(color);
    setCardSide(side);
    return background;
  };

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          onClick={() => changeBackground(colors.backgroundColor1, -1)}
          type="button"
          className="btn"
          style={buttonLeft}
        >
          Left
        </button>
        <button
          onClick={() => changeBackground(colors.backgroundColor2, 1)}
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
            Go
          </a>
        </div>
        <span>{count}</span>
        <button
          onClick={() => dispatch(incrementByAmount(10))}
          type="button"
          className="btn btn-primary"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementAsync(5))}
          type="button"
          className="btn btn-secondary"
        >
          Decrement
        </button>
      </div>
    </>
  );
};
