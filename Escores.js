const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const http = require('http');
var scores = [{ name: "Edwin", score: 50 }, { name: "David", score: 39 }];
var body
var topThree = scores;


app.get('/scores', (req, res) => res.send(topThree))

app.post('/scores', (req, res) => {
    res.status(201)
    scores.push(req.body);
    var sorted = scores.sort(function (a, b) {
        return a.score - b.score
    })
    sorted.reverse();
    topThree = sorted.slice(0, 3)
    res.send(topThree);
    res.end()
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))
