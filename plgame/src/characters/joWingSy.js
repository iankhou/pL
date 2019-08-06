import lectureAbility from '../abilities/lecture';
import groundedUltimate from '../ultimates/grounded';

const joWingSy = {
    name: "Jo Wing Sy",
    maxHp: 240,
    attack: 27,
    iq: 10,
    eq: 7,
    adaptability: 10,
    social: 7,
    cleanliness: 8,
    income: 9,
    maxUltimateCharge: 6,
    image: "https://vignette.wikia.nocookie.net/insideout/images/d/d6/ANGER_Fullbody_Render.png/revision/latest?cb=20150730191555",
    trait: {
        description: "Berserker: Attack is calculated using this formula: attack * (1 + (HP lost / Base HP)). Damage taken is multiplied by 1+(HP lost/Base HP)",
    },
    ability: {
        description: "Lecture: Traps one target and poison it for 3 turns",
        move: lectureAbility
    },
    ultimate: {
        description: "Grounded: Traps all active enemy cards for 3 turns and poison them for 5 turns",
        move: groundedUltimate
    }
}

export default joWingSy;
