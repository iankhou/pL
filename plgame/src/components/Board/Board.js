import React from "react";
import { Stage } from '../Stage';
import { Reserve } from '../Reserve';

class Board extends React.Component {
  onClick(id) {
    if (this.isActive(id)) {
      // Check if card is greyed out
      this.props.moves.draftCard(id); // draft a card
      this.props.events.endTurn(); // switch to other player
    }
  }
  render() {
    // render both player's active and reserve cards
    console.log(this);
    const { players } = this.props;
    return (
      <div>
        <Reserve player={players.otherPlayer} />
        <Stage currentPlayer={players.currentPlayer} otherPlayer={players.otherPlayer} />
        <Reserve player={players.currentPlayer}/>
      </div>
    );
  }
}

export default Board;
