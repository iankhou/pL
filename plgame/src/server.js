const Server = require("boardgame.io/server").Server;
const PowerLevel = require("./game").PowerLevel;

const server = Server({ games: [PowerLevel] });
server.run(8000); // hardcode local PORT
