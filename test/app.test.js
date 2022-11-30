const Calculatrice = require('../src/app').Calculatrice;
const expect = require('chai').expect;

describe('Tests des fonctions arithmétiques', function() {
    it('1. Addition', function(done) {
        let c1 = new Calculatrice();
        expect(c1.addition(4,8)).to.equal(12);
        done();
    });
});