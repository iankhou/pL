import { Client } from "boardgame.io/react";
import { PowerLevel } from "../PowerLevel";
import { Board } from "../Board";

const PowerLevelClient = Client({
  game: PowerLevel,
  board: Board,
  multiplayer: { local: true }
});

const App = Client({ game: PowerLevel });

export default App;
