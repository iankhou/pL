import React from "react";
import { Status } from "../components/Status";

import "./Card.css";

class Card extends React.Component {
  render() {
    const { character } = this.props;
    return (
      <div
        className="content"
        onMouseEnter={this.onHover}
        onMouseLeave={this.onHover}
        onClick={this.onSelect}
        //TODO: Do some styling
      >
        <div className="card-body">
          <div className="card-header">
            <span id="name">{character.name}</span>
            <span id="hp">
              <strong>{character.hp}</strong>
            </span>
          </div>

          <Status status={character.status} />
          {/* <Stats character={character} /> */}
          <div className="image">
            <img src={character.image} />
          </div>
          <div className="description">
            <div>{character.trait}</div>
            <div>{character.ability}</div>
            <div>{character.ultimate}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
