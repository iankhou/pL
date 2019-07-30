import { Game } from "boardgame.io/core";
import { TurnOrder } from "boardgame.io/dist/core";

export const PowerLevel = Game({
  setup: () => ({ deck: 5, hand: 0 }),

  moves: {
    draftCard: (G, Card) => {
      G.deck.pop(Card);
      G.active.push(Card);
    },

    draftReserve: (G, Card) => {
      G.deck.pop(Card);
      G.reserve.push(Card);
    }

    playCard: G => {
      // TODO: This move will allow a player to select a card.
      // Thereafter, the player will be able to activate attacks,
      // abilities, or switch with reserve card
    },
  },

  flow: {
    startingPhase: 'draft',

    turnOrder: TurnOrder.DEFAULT,

    phases: {
      draft: { // players draft 5 active cards, 3 reserve
        allowedMoves: ['draftActive', 'draftReserve'],
        endPhaseIf: G => G.active >= 5 && G.reserve >= 3,
        next: 'play',
      },

      play: {
        allowedMoves: ['playCard', 'skipTurn'],
        endPhaseIf: G => G.active <=0,
        next: 'gameOver',
      },
    },
  },
});
