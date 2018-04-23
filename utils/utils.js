let add = (a, b) => a + b;

let asynAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b);
    },1000)
}

let square = (a) => a*a;

let asynSquare = (a, callback) => {
    setTimeout(() => {
        callback(a*a);
    },1000)
}

let setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};
module.exports = {
    add,
    asynAdd,
    asynSquare,
    square,
    setName
};