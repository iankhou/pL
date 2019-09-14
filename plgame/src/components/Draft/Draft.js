import React from 'react';

import { Collection } from '../Collection';

class Draft extends React.Component {
  render() {
    return (
      <div>
        {/* enemy cards */}
        <Collection characters={this.props.enemyCharacters} />
        {/* undrafted cards */}
        <Collection characters={this.props.availibleCharacters} />
        {/* player cards */}
        <Collection characters={this.props.playerCharacters} />
      </div>
    );
  }
}

export default Draft;
