import { Game } from "boardgame.io/core";

export const PowerLevel = Game({
  setup: () => ({ cells: Array(5).fill(null) })
});
