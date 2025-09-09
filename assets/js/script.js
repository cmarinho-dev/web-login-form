document.getElementById("btn").addEventListener('click', function(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    tryLogin(username, password);
});

var errors = [
    "Login success",
    "Password of this login is incorrect",
    "User not found"
];

const logins = [
    { name: "adm", password: "adm" },
    { name: "user", password: "user" },
    { name: "abc", password: "123" },
    { name: "1", password: "1" }
];

function tryLogin(username, password) {
    var status = checkLogin(username, password);
    sendMessage(status);
}

function checkLogin(username, password) {
    for (var i = 0; i < logins.length; i++) {
        if (username === logins[i].name) {
            if (password === logins[i].password) {
                return 0;
            } else {
                return 1;
            }
        }
    }
    return 2;
}

function sendMessage(status) {
    switch (status) {
        case 0:
            alert(errors[0]);
            break;
        case 1:
            alert(errors[1]);
            break;
        case 2:
            alert(errors[2]);
            break;
    }
}