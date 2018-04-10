const expect = require('chai').expect;

const delta = require('../dist/delta');

let {
    ABS,
    ACOS,
    ACOSH
} = delta;

describe('Math & Trig', function ()
{
    it('ABS', function () 
    {
        expect(ABS(-1)).to.equal(1);
        expect(ABS('-1')).to.equal(1);
        expect(() => ABS('invalid')).to.throw();
        expect(() => ABS()).to.throw();
        expect(() => ABS(1, 2)).to.throw();
    });

    it('ACOS', function () 
    {
        expect(ACOS(1)).to.equal(0);
        expect(ACOS('1')).to.equal(0);
        expect(() => ABS('invalid')).to.throw();
        expect(() => ACOS()).to.throw();
        expect(() => ACOS(1, 2)).to.throw();
        expect(() => ACOS(100)).to.throw();
    });

    it('ACOSH', function () 
    {
        expect(ACOSH(1)).to.equal(0);
        expect(ACOSH('1')).to.equal(0);
        expect(() => ACOSH('invalid')).to.throw();
        expect(() => ACOSH()).to.throw();
        expect(() => ACOSH(1, 2)).to.throw();
        expect(() => ACOSH(-100)).to.throw();
    });
});