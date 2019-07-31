import React from "react";

class PowerLevelBoard extends React.Component {
  onClick(id) {
    if (this.isActive(id)) {
      // Check if card is greyed out
      this.props.moves.draftCard(id); // draft a card
      this.props.events.endTurn(); // switch to other player
    }
  }
}

export default PowerLevelBoard;
