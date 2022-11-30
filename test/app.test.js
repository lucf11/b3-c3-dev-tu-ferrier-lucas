const Calculatrice = require('../src/app').Calculatrice;
const expect = require('chai').expect;

describe('Tests des fonctions arithmétiques', function() {
    it('1. Addition', function(done) {
        let c1 = new Calculatrice();
        expect(c1.addition(4,8)).to.equal(12);
        done();
    });
    it('2. Addition avec un nombre négatif', function(done) {
        let c3 = new Calculatrice();
        expect(c3.addition(4, -1)).to.equal(3);
        done();
    });
    it('3. Addition avec deux nombre négatif', function(done) {
        let c2 = new Calculatrice();
        expect(c2.addition(-8, -4)).to.equal(-12);
        done();
    });
    it('4. Soustraction', function(done) {
        let c1 = new Calculatrice();
        expect(c1.soustraction(8,5)).to.equal(3);
        done();
    });
    it('5. Soustraction avec resultat negatif', function(done) {
        let c1 = new Calculatrice();
        expect(c1.soustraction(4,9)).to.equal(-5);
        done();
    });
    it('6. Multiplication', function(done) {
        let c1 = new Calculatrice();
        expect(c1.multiplication(12,2)).to.equal(24);
        done();
    });
    it('7. Multiplication avec un negatif', function(done) {
        let c1 = new Calculatrice();
        expect(c1.multiplication(-4,5)).to.equal(-20);
        done();
    });
    it('8. Multiplication avec deux negatif', function(done) {
        let c1 = new Calculatrice();
        expect(c1.multiplication(-4,-3)).to.equal(12);
        done();
    });
});