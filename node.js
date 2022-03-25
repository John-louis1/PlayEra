let express = require('express');
let app = express();

app.listen(3000, function () {
    console.log("Server successfully started on port 3000");
});


app.use(express.static('homepage'))
app.use(express.static('game1'))
app.use(express.static('game2'))
app.use(express.static('game3'))

app.get("/", function (request, response) {
    response.sendFile(__dirname + '/homepage/index.html');
});

app.get("/game1", function (request, response) {
    response.sendFile(__dirname + '/game1/game1.html');
});

app.get("/game2", function (request, response) {
    response.sendFile(__dirname + '/game2/game2.html');
});

app.get("/game3", function (request, response) {
    response.sendFile(__dirname + '/game3/game3.html');
});