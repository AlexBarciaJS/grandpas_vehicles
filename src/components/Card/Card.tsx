import type { CardProps } from "../../types";

const myStyle = {
  width: "18rem",
};

export const Card: React.FC<CardProps> = ({ image, description }) => {
  return (
    <div className="card" style={myStyle}>
      <img src={image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
