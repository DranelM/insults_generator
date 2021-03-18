const express = require("express");
const path = require("path");


const bullies = [
    "You’re the reason God created the middle finger",
    "You’re a grey sprinkle on a rainbow cupcake",
    "If your brain was dynamite, there wouldn’t be enough to blow your hat off",
    "You are more disappointing than an unsalted pretzel",
    "Light travels faster than sound, which is why you seemed bright until you spoke",
    "We were happily married for one month, but unfortunately, we’ve been married for 10 years",
    "Your kid is so annoying he makes his Happy Meal cry",
    "You have so many gaps in your teeth it looks like your tongue is in jail"
]

function randomBully() {
    let bullyIdx = Math.floor(Math.random() * bullies.length);
    return bullies[bullyIdx];
}

const app = express()

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/bullies', function (req, res) {
    res.json({
        bully: randomBully()
    }).end()
});

app.use("/public", express.static('public'));

console.log("Running on http://localhost:3000")
app.listen(3000);

