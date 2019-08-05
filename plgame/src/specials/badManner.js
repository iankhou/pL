// pass in allied cards
export default (Card, alliedCards) => {
    alliedCards.map(card => {
        card.reduceUltimate(1);
        Card.increaseUltimate(1);
    });
}
