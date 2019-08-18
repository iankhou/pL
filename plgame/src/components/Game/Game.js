import React from 'react';
import { Lobby } from '../Lobby';
import { Draft } from '../Draft';
import { Organize } from '../Organize';
import { Match } from '../Match';

const Game = props => {
  const { phase } = props.ctx;
  switch (phase) {
    case 'lobby':
      return (
        <div>
          <Lobby />
        </div>
      );
    case 'draft':
      return (
        <div>
          <Draft />
        </div>
      );
    case 'organize':
      return (
        <div>
          <Organize />
        </div>
      );
    case 'match':
      return (
        <div>
          <Match />
        </div>
      );
  }
};

export default Game;
