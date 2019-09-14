import React from 'react';

class Lobby extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Lobby</h1>
        <h3>Welcome to pL Game! Press continue to play.</h3>
        <button onClick={() => this.props.events.endPhase()}>Continue</button>
      </div>
    );
  }
}

export default Lobby;
