import React from "react";
import { Stats } from "../Stats";
import { Status } from "../Status";
import "./Card.css";

const Card = ({ person }) => {
  return (
    <div className="card-body">
      <div className="card-header">
        <span id="name">{person.name}</span>
        <span id="hp">
          <strong>{person.hp}</strong>
        </span>
      </div>

      <Status status={person.status} />
      <Stats person={person} />
    </div>
  );
};

export default Card;
