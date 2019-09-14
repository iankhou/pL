import React from 'react';

import { Card } from '../Card';

const Collection = props => {
  const { characters } = props;
  return characters ? (
    <div>
      {characters.map(character => (
        <Card character={character} />
      ))}
    </div>
  ) : (
    <div>No current cards.</div>
  );
};

export default Collection;
