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
  damage(amount) {
    const { person } = this.props;
    if (amount > person.shield) {
      person.hp -= amount - person.shield;
      person.shield = 0;
    } else {
      person.shield -= amount;
    }
  }

  heal(amount) {
    const { person } = this.props;
    if (amount <= 0) {
      throw console.error(
        `negative or zero health applied to heal method on ${person.name}`
      );
    }
    person.hp += amount;
  }

  addShield(amount) {
    const { person } = this.props;
    if (amount <= 0) {
      throw console.error(
        `negative or zero amount applied to addShield method on ${person.name}`
      );
    }
    person.shield += amount;
  }

  reduceUltimate(amount) {
    const { person } = this.props;
    if (amount <= 0) {
      throw console.error(
        `negative or zero amount applied to reduceUltimate method on ${
          person.name
        }`
      );
    }
    if (amount > person.ult) {
      person.ult = 0;
    } else {
      person.ult -= amount;
    }
  }

  poison() {
    this.props.person.Status.forEach(element => {
      if (typeof element === Poisoned) {
        element = new Poisoned();
        return;
      }
    });
    this.props.person.Status.add(new Poisoned());
  }

  burn() {
    this.props.person.Status.forEach(element => {
      if (typeof element === Burned) {
        element = new Burned();
        return;
      }
    });
    this.props.person.Status.add(new Burned());
  }

  stun() {
    this.props.person.Status.forEach(element => {
      if (typeof element === Stunned) {
        element = new Stunned();
        return;
      }
    });
    this.props.person.Status.add(new Stunned());
  }

  trap() {
    this.props.person.Status.forEach(element => {
      if (typeof element === Trapped) {
        element = new Trapped();
        return;
      }
    });
    this.props.person.Status.add(new Trapped());
  }

  silence() {
    this.props.person.Status.forEach(element => {
      if (typeof element === Silenced) {
        element = new Silenced();
        return;
      }
    });
    this.props.person.Status.add(new Silenced());
  }

  componentDidMount() {}

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
