const utils = require('./utils');

it('Should add numbers', () => {
    let res = utils.add(2,5);
    if(res !== 7){
        throw new Error(`Expected 7 but got ${res}`);
    }
});

it('Should square number', () => {
    let res = utils.square(5);
    if(res !== 25){
        throw new Error(`Expected 25 but got ${res}`);
    }
});