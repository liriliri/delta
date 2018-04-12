const expect = require('chai').expect;

const delta = require('../dist/delta');

let {
    toDouble
} = delta;

describe('convertor', function () 
{
    it('toDouble', function () 
    {
        expect(toDouble()).to.equal(0);
        expect(toDouble(null)).to.equal(0);
        expect(toDouble(1)).to.equal(1);
        expect(() => toDouble(Infinity)).to.throw();
        expect(() => toDouble(NaN)).to.throw();
        expect(toDouble('  ')).to.equal(0);
        expect(toDouble('25%')).to.equal(0.25);
        expect(toDouble('25.5')).to.equal(25.5);
        expect(toDouble(true)).to.equal(1);
        expect(toDouble(false)).to.equal(0);
        expect(() => toDouble('abcd')).to.throw();
    });
});