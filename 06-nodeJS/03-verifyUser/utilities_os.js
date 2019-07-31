// Adrián Navarro Gabino

const os = require('os');

function loginUser() {
    return os.userInfo().username;
}

function isUser(user) {
    return user == loginUser();
}

module.exports = {
    loginUser,
    isUser
};