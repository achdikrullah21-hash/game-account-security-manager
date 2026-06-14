const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const { createAccount, login, hackAttempt } = require("./auth");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

// main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// create account
app.post("/create", (req, res) => {
    const { username, password } = req.body;
    createAccount(username, password);
    res.json({ message: "created" });
});

// login
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const success = login(username, password);
    res.json({ success });
});

// hack simulation
app.post("/hack", (req, res) => {
    const { username } = req.body;
    const result = hackAttempt(username);
    res.json({ hacked: result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
