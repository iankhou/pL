class Effect {
  constructor(turnsRemaining) {
    this.turnsRemaining = turnsRemaining;
  }
}

class Poisoned extends Effect {
  constructor(turnsRemaining) {
    super(turnsRemaining); // lasts 5 turns
    this.name = "poison";
  }
  action(Card) {
    Card.hp -= Card.mhp / 20; // takes 5%
  }
}

class Burned extends Effect {
  constructor(turnsRemaining = 2) {
    super(turnsRemaining); // lasts 2 turns
    this.name = "burn";
  }
  action(Card) {
    Card.hp -= 15; // takes 15 hp
  }
}

class Stunned extends Effect {
  constructor(turnsRemaining = 1) {
    super(turnsRemaining); // lasts 1 turn
    this.name = "stun";
  }
  action(Card) {
    Card.hp -= 3; // takes 3 hp
  }
}

class Trapped extends Effect {
  constructor(turnsRemaining = 3) {
    super(turnsRemaining); // lasts 3 turns
    this.name = "trap";
  }
  action(Card) {
    // can't leave the stage
  }
}

class Silenced extends Effect {
  constructor(turnsRemaining = 1) {
    super(turnsRemaining); // lasts 1 turn
    this.name = "silence";
  }
  action(Card) {
    // disables ability, ultimate
  }
}

export { Poisoned, Burned, Stunned, Trapped, Silenced };
