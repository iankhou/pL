import React from 'react';

import { Card } from '../Card';

const Collection = props => {
  const { characters } = props;
  return characters ? (
    <div>
      {characters.map(character => (
        <Card
          name={character.name}
          description={character.description}
          hp={character.hp}
          attack={character.attack}
          armor={character.armor}
          shiled={character.shield}
          trait={character.trait}
          ability={character.ability}
          ultimate={character.ultimate}
          image={character.image}
        />
      ))}
    </div>
  ) : (
    <div>No current cards.</div>
  );
};

export default Collection;
