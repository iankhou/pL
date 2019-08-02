import React from "react";
import { Client } from "boardgame.io/react";
import { PowerLevel } from "../PowerLevel";
import { Board } from "../Board";
import { Card } from "../Card";

const PowerLevelClient = Client({
  game: PowerLevel,
  board: Board,
  multiplayer: { local: true }
});

// EXAMPLE OBJECT
const JoWingSy = {
  name: "Jo Wing Sy",
  hp: 240,
  atk: 27,
  iq: 10,
  eq: 7,
  aby: 10,
  soc: 7,
  cln: 8,
  inc: 9,
  pow: 85,
  status: ["silenced", "poisoned"]
};

const GordenChen = {
  name: "Gorden Chen",
  hp: 220,
  atk: 27,
  iq: 9,
  eq: 9,
  aby: 10,
  soc: 8,
  cln: 6,
  inc: 7,
  pow: 81,
  status: ["trapped", "stunned", "burned"]
};

const App = () => (
  <div>
    {/* Player 0
    <PowerLevelClient playerID="0" />
    <br />
    Player 1
    <PowerLevelClient playerID="1" /> */}
    <div className="active">
      <Card person={JoWingSy} />
      <Card person={GordenChen} />
    </div>
  </div>
);

export default App;
