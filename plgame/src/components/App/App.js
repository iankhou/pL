import React from "react";

import { Client } from "boardgame.io/react";
import { PowerLevel } from "../PowerLevel";
import { Board } from "../Board";
import { Card } from "../Card";
import { Active } from "../Active";
import { Stage } from "../Stage";

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
  img:
    "https://vignette.wikia.nocookie.net/insideout/images/d/d6/ANGER_Fullbody_Render.png/revision/latest?cb=20150730191555",
  tt:
    "Berserker: Attack is calculated using this formula: attack * (1 + (HP lost / Base HP)). Damage taken is multiplied by 1+(HP lost/Base HP)",
  ab: "Lecture: Traps one target and poison it for 3 turns",
  ult:
    "Grounded: Traps all active enemy cards for 3 turns and poison them for 5 turns",
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
  img: "https://i.ytimg.com/vi/rWHZpciCnzk/maxresdefault.jpg",
  tt: "Manager: Has charge and is immune to traps",
  ab:
    "Leadership: Boost attack of friendly cards by 25% until the end of your turn",
  ult:
    "Safety Regulations: All friendly active cards recieve a shield worth 20% of his current HP until the end of your next turn",

  status: ["trapped", "stunned", "burned"]
};

const friendly = [GordenChen, GordenChen, GordenChen, GordenChen, GordenChen];
const enemy = [JoWingSy, JoWingSy, JoWingSy, JoWingSy, JoWingSy];

const App = () => (
  <div>
    {/* Player 0
    <PowerLevelClient playerID="0" />
    <br />
    Player 1
    <PowerLevelClient playerID="1" /> */}
    {/* <div className="active">
      <Card person={JoWingSy} />
      <Card person={GordenChen} />
    </div> */}
    <Stage friendly={friendly} enemy={enemy} />
  </div>
);

// const App = Client({ game: PowerLevel });

export default App;
