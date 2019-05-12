
const express = require("express");
const app = express();

function register(port) {

    app.use(express.static('public'));

    app.get('/', function(request, response) {
        response.sendFile(__dirname + '/views/index.html');
    });

    const listener = app.listen(port, function() {
        console.log('Your app is listening on port ' + listener.address().port);
    });

}

class Webpanel {

    constructor(client, port) {
        this.client = client;
        register(port);
    }

}

module.exports = Webpanel;