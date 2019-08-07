import React from "react";
import { Status } from "../Status";
import {
  Poisoned,
  Burned,
  Stunned,
  Trapped,
  Silenced
} from "../Status/Effects";
import "./Card.css";

class Card extends React.Component {
  damageSelf(amount) {
    const { character } = this.props;
    if (amount > character.shield) {
      character.hp -= amount - character.shield;
      character.shield = 0;
    } else {
      character.shield -= amount;
    }
  }

  healSelf(amount) {
    const { character } = this.props;
    if (amount <= 0) {
      throw console.error(
        `negative or zero health applied to heal method on ${character.name}`
      );
    }
    character.hp += amount;
  }

  sheildSelf(amount) {
    const { character } = this.props;
    if (amount <= 0) {
      throw console.error(
        `negative or zero amount applied to addShield method on ${character.name}`
      );
    }
    character.shield += amount;
  }

  reduceUltimateSelf(amount) {
    const { character } = this.props;
    if (amount <= 0) {
      throw console.error(
        `negative or zero amount applied to reduceUltimate method on ${character.name}`
      );
    }
    if (amount > character.ult) {
      character.ult = 0;
    } else {
      character.ult -= amount;
    }
  }

  poisonSelf() {
    this.props.character.Status.forEach(element => {
      if (typeof element === Poisoned) {
        element = new Poisoned();
        return;
      }
    });
    this.props.character.Status.add(new Poisoned());
  }

  burnSelf() {
    this.props.character.Status.forEach(element => {
      if (typeof element === Burned) {
        element = new Burned();
        return;
      }
    });
    this.props.character.Status.add(new Burned());
  }

  stunSelf() {
    this.props.character.Status.forEach(element => {
      if (typeof element === Stunned) {
        element = new Stunned();
        return;
      }
    });
    this.props.character.Status.add(new Stunned());
  }

  trapSelf() {
    this.props.character.Status.forEach(element => {
      if (typeof element === Trapped) {
        element = new Trapped();
        return;
      }
    });
    this.props.character.Status.add(new Trapped());
  }

  silenceSelf() {
    this.props.character.Status.forEach(element => {
      if (typeof element === Silenced) {
        element = new Silenced();
        return;
      }
    });
    this.props.character.Status.add(new Silenced());
  }

  // moves on other cards

  // initialize instance variables such as powerLevel, hp, attack, armor in state
  constructor(props) {
    super(props);
    const { character } = this.props;
    const {
      iq,
      eq,
      adaptability,
      social,
      cleanliness,
      income,
      type
    } = character;

    const powerLevel = Math.floor(
      (iq + eq + adaptability + social + cleanliness + income) * (5 / 3)
    );
    const attack = iq + adaptability + social;
    const health = eq + cleanliness + income;
    const maxHp = health * 10;
    const hp = maxHp;

    const armor = type === "tank" ? 10 : 0;

    this.state = {
      powerLevel,
      attack,
      health,
      maxHp,
      hp,
      armor
    };
  }

  componentDidMount() {}

  render() {
    const { character } = this.props;
    return (
      <div className="content">
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
            <img src={character.img} />
          </div>
          <div className="description">
            <div>{character.tt}</div>
            <div>{character.ab}</div>
            <div>{character.ult}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
