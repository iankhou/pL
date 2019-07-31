import { Client } from "boardgame.io/react";
import { PowerLevel } from "./Game";
import PowerLevelBoard from "./Board";

const PowerLevelClient = Client({
  game: PowerLevel,
  board: PowerLevelBoard,
  multiplayer: { local: true }
});

const App = Client({ game: PowerLevel });

export default App;
