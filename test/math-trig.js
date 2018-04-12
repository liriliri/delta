const expect = require('chai').expect;

const delta = require('../dist/delta');

let {
    ABS,
    ACOS,
    ACOSH,
    ACOT,
    ACOTH,
    INT
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

    it('ACOT', function () 
    {
        expect(ACOT(1)).to.closeTo(0.7853981633974483, 1e-9);
        expect(ACOT('1')).to.closeTo(0.7853981633974483, 1e-9);
        expect(() => ACOT()).to.throw();
        expect(() => ACOT(1, 2)).to.throw();
    });

    it('ACOTH', function () 
    {
        expect(ACOTH(2)).to.closeTo(0.549306144, 1e-9);
        expect(ACOTH('2')).to.closeTo(0.549306144, 1e-9);
        expect(() => ACOTH(0)).to.throw();
        expect(() => ACOTH()).to.throw();
        expect(() => ACOTH(1, 2)).to.throw();
    });

    it('INT', function () 
    {
        expect(INT(2.5)).to.equal(2);
        expect(INT('2.5')).to.equal(2);
        expect(() => INT()).to.throw();
        expect(() => INT(1, 2)).to.throw();
        expect(() => INT('abc')).to.throw();
    });
});