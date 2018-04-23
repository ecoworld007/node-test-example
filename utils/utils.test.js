const expect = require('expect');

const utils = require('./utils');

describe('Utils test cases', () => {

    it('Should add numbers', () => {
        let res = utils.add(2,5);
        expect(res).toBeA('number').toBe(7);
    });
    
    it('Should async add two number', (done) => {
        utils.asynAdd(5,2,(res) => {
            expect(res).toBeA('number').toBe(7);
            done();
        })
    });
    
    it('Should square number', () => {
        let res = utils.square(5);
        expect(res).toBeA('number').toBe(25);
    });
    
    it('Should async square number', (done) => {
        utils.asynSquare(5,(res) => {
            expect(res).toBeA('number').toBe(25);
            done();
        })
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
});