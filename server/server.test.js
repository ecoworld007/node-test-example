const request = require('supertest');
const expect = require('expect'); 
const app = require('./server.js').app;

describe('Server test cases', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) =>{
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toEqual({
                    error: 'Page not found'
                });
            })
            .end(done);
        });
    });
    
    describe('GET /users', () => {
        it('should have zoro in user list response', (done) =>{
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toBeAn('array').toInclude({name: 'Zoro'});
            })
            .end(done);
        });
    });
});