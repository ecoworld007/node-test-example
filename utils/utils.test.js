const expect = require('expect');

const utils = require('./utils');

it('Should add numbers', () => {
    let res = utils.add(2,5);
    expect(res).toBeA('number').toBe(7);
});

it('Should square number', () => {
    let res = utils.square(5);
    expect(res).toBeA('number').toBe(25);
});

it('Should set proper name for user', () => {
    let user = {
        age: 25
    };
    let res = utils.setName({},'Himanshu Negi');
    expect(res).toBeA('object').toIncludeKeys(['firstName', 'lastName']).toInclude({
        firstName: 'Himanshu',
        lastName: 'Negi'
    });
});