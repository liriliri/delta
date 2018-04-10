const expect = require('chai').expect;

const delta = require('../dist/delta');

let {
    ABS,
    ACOS
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
});