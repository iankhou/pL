// recieves array of cards
export default (cards) => {
    // loop through and trap/burn them
    cards.map(card => {
        card.trap();
        card.burn();
    });
}
