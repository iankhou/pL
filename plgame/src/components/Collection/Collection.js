import React from 'react';

import Card from '../Card';

const Collection = props => {
  const { characters } = props;
  return (
    <div>
      {characters.map(character => (
        <Card
          name={character.name}
          description={character.description}
          hp={character.hp}
          attack={character.attack}
          armor={character.armor}
          trait={character.trait}
          ability={character.ability}
          ultimate={character.ultimate}
          image={character.image}
        />
      ))}
    </div>
  );
};

export default Collection;
