import { Game } from 'boardgame.io/core';
import { TurnOrder } from 'boardgame.io/dist/core';
import { PluginPlayer } from 'boardgame.io/plugins';
import { characters } from './characters';

// check if a player has no cards left
const isGameEnd = G => (!G.active.length && !G.reserve.length ? true : false);

const PowerLevel = Game({
  playerSetup: playerID => ({
    id: playerID,
    active: [],
    reserve: [],
    currCard: null,
  }),
  plugins: [PluginPlayer],

  setup: () => ({
    deck: characters,
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

    endTurn: G => {
      G.finished = true;
    },
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
      draft: {
        // players draft 8 cards into their squad
        allowedMoves: ['draftActive', 'draftReserve'],
        endPhaseIf: G => G.players[0].squad >= 8 && G.players[0].squad >= 8,
        next: 'organize',
      },

      organize: {
        // players place 5 cards into active and 3 cards into reserve
        allowedMoves: ['placeActive', 'placeReserve'],
        endPhaseIf: G =>
          G.players[0].active >= 5 &&
          G.players[0].reserve >= 3 &&
          G.players[1].active >= 5 &&
          G.players[1].reserve >= 3,
        next: 'play',
      },

      play: {
        allowedMoves: ['playCard', 'endTurn'],
        onTurnEnd: G => {
          G.active = G.active.filter(card => card.hp > 0);
        },
        endPhaseIf: G => G.finished === true,
        next: 'gameOver',
      },
    },
  },
});

export default PowerLevel;
