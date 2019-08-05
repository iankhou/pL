import React from "react";
import { Stats } from "../Stats";
import { Status } from "../Status";
import "./Card.css";

class Card extends React.Component {
  render() {
    const { person } = this.props;
    return (
      <div className="content">
        <div className="card-body">
          <div className="card-header">
            <span id="name">{person.name}</span>
            <span id="hp">
              <strong>{person.hp}</strong>
            </span>
          </div>

          <Status status={person.status} />
          {/* <Stats person={person} /> */}
          <div className="image">
            <img src={person.img} />
          </div>
          <div className="description">
            <div>{person.tt}</div>
            <div>{person.ab}</div>
            <div>{person.ult}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
