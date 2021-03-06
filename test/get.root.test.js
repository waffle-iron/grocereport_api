// Set the NODE_ENV environmental variable to test
process.env.NODE_ENV = 'test';

var app = require('../app');
var request = require('supertest');
var should = require('should');

describe('GET / (the root route)', function() {
    it('should respond with the JSON object { message: "hello" }', function(done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({ message: 'hello' })
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
});