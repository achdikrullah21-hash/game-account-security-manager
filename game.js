async function createAccount() {
    await fetch("/create", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            username: regUser.value,
            password: regPass.value
        })
    });

    alert("Account created!");
}

async function login() {
    let res = await fetch("/login", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            username: logUser.value,
            password: logPass.value
        })
    });

    let data = await res.json();

    if (data.success) {
        alert("Login success!");
    } else {
        alert("Login failed!");
    }
}

async function hack() {
    let res = await fetch("/hack", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            username: hackUser.value
        })
    });

    let data = await res.json();

    if (data.hacked) {
        alert("⚠️ ACCOUNT HACKED (SIMULATION)");
    } else {
        alert("🛡️ ACCOUNT SAFE");
    }
}
