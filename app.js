var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var retweet = function() {

var sayings = [
    "Two's company, three's a crowd",
    "Three is the magic number",
    "There were three in the bed and the little one said something",
    "Signs point to yes.",
    "Yes.",
    "Reply hazy, try again.",
    "Without a doubt.",
    "My sources say no.",
    "As I see it, yes.",
    "You may rely on it.",
    "Concentrate and ask again.",
    "Outlook not so good.",
    "It is decidedly so.",
    "Better not tell you now.",
    "Very doubtful.",
    "Yes - definitely.",
    "It is certain.",
    "Cannot predict now.",
    "Most likely.",
    "Ask again later.",
    "My reply is no.",
    "Outlook good.",
    "Don't count on it."
];

//Random Tweet Machine

var randomIndex = Math.round(Math.random() * sayings.length);
var reply = sayings[randomIndex];

T.post('statuses/update', {status: reply}, tweeted2);

function tweeted2(err, data, response) {
    if (err) {
        console.log("Something went wrong");
    }
}
};

retweet();
setInterval(retweet, 1000*60*60*24);