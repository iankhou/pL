import React from 'react';
import PowerLevel from '../../PowerLevel';
import { Game } from '../Game';
import { Client } from 'boardgame.io/react';

const App = Client({ game: PowerLevel, board: Game });

export default App;
