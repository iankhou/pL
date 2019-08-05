class Effect {
  constructor(turnsRemaining) {
    this.turnsRemaining = turnsRemaining;
  }
}

class Poisoned extends Effect {
  constructor() {
    super(5); // lasts 5 turns
    this.name = "poison";
  }
  action(G, Card) {
    Card.hp -= Card.mhp / 20; // takes 5%
  }
}

class Burned extends Effect {
  constructor() {
    super(2); // lasts 2 turns
    this.name = "burn";
  }
  action(G, Card) {
    Card.hp -= 15; // takes 15 hp
  }
}

class Stunned extends Effect {
  constructor() {
    super(1); // lasts 1 turn
    this.name = "stun";
  }
  action(G, Card) {
    Card.hp -= 3; // takes 3 hp
  }
}

class Trapped extends Effect {
  constructor() {
    super(3); // lasts 3 turns
    this.name = "trap";
  }
  action(G, Card) {
    // can't leave the stage
  }
}

class Silenced extends Effect {
  constructor() {
    super(1); // lasts 1 turn
    this.name = "silence";
  }
  action(G, Card) {
    // disables ability, ultimate
  }
}

export { Poisoned, Burned, Stunned, Trapped, Silenced };
