const fs = require("fs");
const { encrypt, decrypt } = require("./crypto");

const DB = "users.json";

function loadUsers() {
    if (!fs.existsSync(DB)) return [];
    return JSON.parse(fs.readFileSync(DB));
}

function saveUsers(data) {
    fs.writeFileSync(DB, JSON.stringify(data, null, 2));
}

function createAccount(username, password) {
    let users = loadUsers();

    users.push({
        username,
        password: encrypt(password),
        hacked: false
    });

    saveUsers(users);
}

function login(username, password) {
    let users = loadUsers();

    let user = users.find(u => u.username === username);
    if (!user) return false;

    return decrypt(user.password) === password;
}

function hackAttempt(username) {
    let users = loadUsers();

    let user = users.find(u => u.username === username);
    if (!user) return false;

    user.hacked = Math.random() < 0.3;

    saveUsers(users);
    return user.hacked;
}

module.exports = { createAccount, login, hackAttempt };
