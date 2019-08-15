import React from 'react';

import Collection from '../Collection';

class Draft extends React.component {
  render() {
    return (
      <div>
        <Collection /> // enemy cards
        <Collection /> // availible cards
        <Collection /> // player cards
      </div>
    );
  }
}

export default Draft;
