const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call spy correctly', () => {
        let spy = expect.createSpy();
        spy('Himanshu',25);
        expect(spy).toHaveBeenCalledWith('Himanshu',25);
    });

    it('should call saveUser with user object', () => {
        let email = 'himanshu@example.com';
        let password = 'letmein';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});