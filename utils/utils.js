let add = (a, b) => a + b;

let square = (a) => a*a;

let setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};
module.exports = {
    add,
    square,
    setName
};