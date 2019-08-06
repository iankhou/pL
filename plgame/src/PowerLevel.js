import { Game } from "boardgame.io/core";
import { TurnOrder } from "boardgame.io/dist/core";

// check if a player has no cards left
const isGameEnd = G => (!G.active.length && !G.reserve.length) ? true : false;

const pullFromDB = () => null;

const PowerLevel = Game({
  setup: () => ({
     deck: pullFromDB(),
     active: [],
     reserve: [],
     currCard: null
   }),
  // TODO: Initialize array of Cards in G.deck
  // TODO: Initialize array of Cards in G.active
  // TODO: Initialize array of Cards in G.reserve
  // TODO: Initialize currCard

  moves: {
    draftCard: (G, Card) => {
      G.deck.pop(Card);
      G.squad.push(Card);
    },

    placeActive: (G, Card) => {
      G.squad.pop(Card);
      G.active.push(Card);
    },

    placeReserve: (G, Card) => {
      G.squad.pop(Card);
      G.reserve.push(Card);
    },

    selectCard: (G, Card) => {
      G.selectedCard = Card;
    },

    useAttack: (G, OCard, TCard) => {
      if (G.selectedCard === OCard) {
        TCard.hp -= OCard.attack;
      } else {
        return 'INVALID_MOVE';
      }
    },

    endTurn: (G) => {
      G.finished = true;
    }
  },

  flow: {
    startingPhase: 'draft',

    turnOrder: TurnOrder.DEFAULT,

    endGameIf: (G, ctx) => {
      if (isGameEnd(G)) {
        // returns the loser
        return { loser: ctx.currentPlayer };
      }
    },

    phases: {
      draft: { // players draft 8 cards into their squad
        allowedMoves: ['draftActive', 'draftReserve'],
        endPhaseIf: G => G.squad >= 8,
        next: 'organize',
      },

      organize: { // players place 5 cards into active and 3 cards into reserve
        allowedMoves: ['placeActive', 'placeReserve'],
        endPhaseIf: G => G.active >= 5 && G.reserve >= 3,
        next: 'play',
      },

      play: {
        allowedMoves: ['playCard', 'endTurn'],
        onTurnEnd: (G) => {
          G.active = G.active.filter(card => card.hp > 0);
        },
        endPhaseIf: G => G.finished === true,
        next: 'gameOver',
      },
    },
  },
});

export default PowerLevel;
