const db = require('./db.js');

let handleSignup = (email, password) => {
    let user = {
        email,
        password
    };
    db.saveUser(user);
};

module.exports = {
    handleSignup
};