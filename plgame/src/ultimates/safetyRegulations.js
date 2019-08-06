export default (Card, alliedCards) => {
    const shieldAmount = Card.hp * 0.3;
    // loop through the cards and give them a shield worth 25HP
    alliedCards.map(card => {
        card.addShield(shieldAmount);
    });
}
