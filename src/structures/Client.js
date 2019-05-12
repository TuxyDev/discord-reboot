
const {Client} = require("discord.js");
const Webpanel = require("./Webpanel");

class Reboot extends Client {

    constructor(settings = {port : 3303 }) {
        super(settings);
        this.panel = new Webpanel(this, settings.port);
    }

}

module.exports = Reboot;