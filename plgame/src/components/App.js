import { Client } from "boardgame.io/react";
import { PowerLevel } from "./Game";

const PowerLevelClient = Client({
  game: PowerLevel,
  board: null,
  multiplayer: { local: true }
});

const App = Client({ game: PowerLevel });

export default App;
