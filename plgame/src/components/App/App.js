import React from 'react';
import { Client } from "boardgame.io/react";
import { PowerLevel } from "../PowerLevel";
import { Board } from "../Board";

const PowerLevelClient = Client({
  game: PowerLevel,
  board: Board,
  multiplayer: { local: true }
});

const props = {
  currentPlayer: 'Ray',
  otherPlayer: 'Ian'
}

// const App = Client({ game: PowerLevel });
const App = () => {
  return (
    <div>
      <Board players={props}/>
    </div>
  );
}
export default App;
