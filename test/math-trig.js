const expect = require('chai').expect;

const delta = require('../dist/delta');

let {
    ABS
} = delta;

describe('Math & Trig', function ()
{
    it('ABS', function () 
    {
        expect(ABS(-1)).to.equal(1);
        expect(ABS('-1')).to.equal(1);
        expect(() => ABS('a')).to.throw();
        expect(() => ABS()).to.throw();
        expect(() => ABS(1, 2)).to.throw();
    });
});