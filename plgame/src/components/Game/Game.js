import React from 'react';
import { Lobby } from '../Lobby';
import { Draft } from '../Draft';
import { Organize } from '../Organize';
import { Match } from '../Match';

class Game extends React.Component {
  state = {};
  render() {
    const { phase } = this.props.ctx;
    switch (phase) {
      case 'lobby':
        return (
          <div>
            <Lobby events={this.props.events} />
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
  }
}

export default Game;
