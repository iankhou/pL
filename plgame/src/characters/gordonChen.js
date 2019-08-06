import leadershipAbility from '../abilities/leadership';
import groundedUltimate from '../ultimates/grounded';

const gordonChen = {
    name: "Gorden Chen",
    maxHp: 220,
    attack: 27,
    iq: 9,
    eq: 9,
    adaptability: 10,
    social: 8,
    cleanliness: 6,
    income: 7,
    image: "https://i.ytimg.com/vi/rWHZpciCnzk/maxresdefault.jpg",
    trait: {
        description: "Manager: Has charge and is immune to traps"
    },
    ability: {
      description: "Leadership: Boost attack of friendly cards by 25% until the end of your turn",
      move: leadershipAbility
    },
    ultimate: {
      description: "Safety Regulations: All friendly active cards recieve a shield worth 20% of his current HP until the end of your next turn",
      move: groundedUltimate
    }
}

export default gordonChen;
