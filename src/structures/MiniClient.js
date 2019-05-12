
const {Collection, Client} = require("discord.js");
const EventEmitter = require('events');

const client = new Client();

function setup(client) {
    client.guilds = client.guilds.filter(g => g.available);
}

class MiniClient {

    constructor(token) {
        this.token = token;
        client.login(token).then(client => setup(client))
    }

}