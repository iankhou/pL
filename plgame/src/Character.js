import {
  Poisoned,
  Burned,
  Stunned,
  Trapped,
  Silenced
} from "../components/Status/Effects";

class Character {
  // moves on self
  damageSelf(amount) {
    if (amount > this.shield) {
      this.hp -= amount - character.shield;
      this.shield = 0;
    } else {
      this.shield -= amount;
    }
  }

  healSelf(amount) {
    if (amount <= 0) {
      throw console.error(
        `negative or zero health applied to heal method on ${this.name}`
      );
    }
    this.hp += amount;
  }

  shieldSelf(amount) {
    if (amount <= 0) {
      throw console.error(
        `negative or zero amount applied to addShield method on ${this.name}`
      );
    }
    this.shield += amount;
  }

  reduceUltimateSelf(amount) {
    if (amount <= 0) {
      throw console.error(
        `negative or zero amount applied to reduceUltimate method on ${
          this.name
        }`
      );
    }
    if (amount > this.ultimate.charge) {
      this.ultimate.charge = 0;
    } else {
      this.ultimate.charge -= amount;
    }
  }

  poisonSelf(turnsRemaining) {
    this.status.forEach(element => {
      if (typeof element === Poisoned) {
        element = new Poisoned();
        return;
      }
    });
    this.status.add(new Poisoned(turnsRemaining));
  }

  burnSelf(turnsRemaining) {
    this.status.forEach(element => {
      if (typeof element === Burned) {
        element = new Burned(turnsRemaining);
        return;
      }
    });
    this.status.add(new Burned());
  }

  stunSelf(turnsRemaining) {
    this.status.forEach(element => {
      if (typeof element === Stunned) {
        element = new Stunned();
        return;
      }
    });
    this.status.add(new Stunned());
  }

  trapSelf(turnsRemaining) {
    this.status.forEach(element => {
      if (typeof element === Trapped) {
        element = new Trapped();
        return;
      }
    });
    this.status.add(new Trapped());
  }

  silenceSelf(turnsRemaining) {
    this.status.forEach(element => {
      if (typeof element === Silenced) {
        element = new Silenced();
        return;
      }
    });
    this.status.add(new Silenced());
  }

  // moves on other cards
  damageOther(Card, amount) {
    Card.damageSelf(amount);
  }

  healOther(Card, amount) {
    Card.healSelf(amount);
  }

  shieldOther(Card, amount) {
    Card.shieldSelf(amount);
  }

  reduceUltimateOther(Card, amount) {
    Card.reduceUltimateSelf(amount);
  }

  poisonOther(Card, turnsRemaining) {
    Card.poisonSelf(turnsRemaining);
  }

  burnOther(Card, turnsRemaining) {
    Card.burnSelf(turnsRemaining);
  }

  stunOther(Card, turnsRemaining) {
    Card.stunSelf(turnsRemaining);
  }

  trapOther(Card, turnsRemaining) {
    Card.trapSelf(turnsRemaining);
  }

  silenceOther(Card, turnsRemaining) {
    Card.silenceSelf(turnsRemaining);
  }

  // initialize instance variables such as powerLevel, hp, attack, armor in state
  constructor(attributes) {
    super(attributes);
    const {
      iq,
      eq,
      adaptability,
      social,
      cleanliness,
      income,
      type,
      shield
    } = this.attributes;

    this.powerLevel = Math.floor(
      (iq + eq + adaptability + social + cleanliness + income) * (5 / 3)
    );
    this.attack = iq + adaptability + social;
    this.health = eq + cleanliness + income;
    this.maxHp = health * 4; //TODO: Determine how much health each character gets
    this.hp = health * 4; //TODO: Determine how much health each character gets
    this.shield = shield;
    this.armor = type === "tank" ? 10 : 0;
    this.status = new Set();
    this.ultimate = {
      charge: 0,
      ability: null
    };
  }
}

export default Character;
