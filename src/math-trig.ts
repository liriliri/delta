import createFn from './createFn';
import {
    ValueError,
    NumberError
} from './error';
import {isNaN} from './lib/util';
import {toDouble} from './convertor';

let {
    abs,
    acos,
    log,
    sqrt,
    atan
} = Math;

export let ABS = createFn(function (num: number | string): number
{
    num = toDouble(num);

    if (isNaN(num)) throw new ValueError();

    return abs(num);
}, {
    minArgs: 1,
    maxArgs: 1 
});

export let ACOS = createFn(function (num: number | string): number
{
    num = toDouble(num);

    if (isNaN(num)) throw new ValueError();

    if (num < -1.0 || num > 1.0) throw new NumberError();

    return acos(num);
}, {
    minArgs: 1,
    maxArgs: 1
});

export let ACOSH = createFn(function (num: number | string): number
{
    num = toDouble(num);

    if (isNaN(num)) throw new ValueError();

    if (num < 1.0) throw new NumberError();

    return log(num + sqrt(num * num - 1.0));
}, {
    minArgs: 1,
    maxArgs: 1
});

export let ACOT = createFn(function (num: number | string): number 
{
    num = toDouble(num);

    if (isNaN(num)) throw new ValueError();

    return atan(1 / num);
}, {
    minArgs: 1,
    maxArgs: 1
});

export let ACOTH = createFn(function (num: number | string): number 
{
    num = toDouble(num);

    if (isNaN(num)) throw new ValueError();
    if (num >= -1 && num <= 1) throw new NumberError();

    return 0.5 * log((num + 1) / (num - 1));
}, {
    minArgs: 1,
    maxArgs: 1
});

export let AGGREGATE = createFn(function () 
{

});

export let ARABIC = createFn(function () 
{

});

export let ASIN = createFn(function () 
{

});

export let ASINH = createFn(function ()
{

});

export let ATAN = createFn(function () 
{

});

export let ATAN2 = createFn(function ()
{

});

export let ATANH = createFn(function () 
{

});

export let BASE = createFn(function () 
{

});

export let COMBIN = createFn(function () 
{

});

export let COMBINA = createFn(function () 
{

});

export let COS = createFn(function () 
{

});

export let COSH = createFn(function () 
{

});

export let COT = createFn(function () 
{

});

export let COTH = createFn(function ()
{

});

export let CSC = createFn(function () 
{

});

export let CSCH = createFn(function () 
{

});

export let DECIMAL = createFn(function () 
{

});

export let DEGREES = createFn(function () 
{

});

export let EVEN = createFn(function ()
{

});

export let EXP = createFn(function () 
{

});

export let FACT = createFn(function () 
{

});

export let FACTDOUBLE = createFn(function () 
{

});

export let GCD = createFn(function () 
{

});

export let INT = createFn(function () 
{

});

export let LCM = createFn(function () 
{

});

export let LN = createFn(function () 
{

});

export let LOG = createFn(function () 
{

});

export let LOG10 = createFn(function () 
{

});

export let MDETERM = createFn(function () 
{

});

export let MINVERSE = createFn(function () 
{

});

export let MMULT = createFn(function () 
{

});

export let MOD = createFn(function () 
{

});

export let MROUND = createFn(function () 
{

});

export let MULTINOMIAL = createFn(function () 
{

});

export let MUNIT = createFn(function () 
{

});

export let ODD = createFn(function () 
{

});

export let PI = createFn(function () 
{

});

export let POWER = createFn(function () 
{

});

export let PRODUCT = createFn(function () 
{

});

export let QUOTIENT = createFn(function () 
{

});

export let PADIANS = createFn(function () 
{

});

export let RAND = createFn(function () 
{

});

export let RANDBETWEEN = createFn(function () 
{

});

export let ROMAN = createFn(function () 
{

});

export let ROUND = createFn(function () 
{

});

export let ROUNDDOWN = createFn(function () 
{

});

export let ROUNDUP = createFn(function () 
{

});

export let SEC = createFn(function () 
{

});

export let SECH = createFn(function () 
{

});

export let SERIESSUM = createFn(function () 
{

});

export let SIGN = createFn(function () 
{

});

export let SIN = createFn(function () 
{

});

export let SINH = createFn(function () 
{

});

export let SQRT = createFn(function () 
{

});

export let SQRTPI = createFn(function () 
{

});

export let SUBTOTAL = createFn(function () 
{

});

export let SUM = createFn(function () 
{

});

export let SUMIF = createFn(function () 
{

});

export let SUMIFS = createFn(function () 
{

});

export let SUMPRODUCT = createFn(function () 
{

});

export let SUMSQ = createFn(function () 
{

});

export let SUMX2MY2 = createFn(function () 
{

});

export let SUMX2PY2 = createFn(function () 
{

});

export let SUMXMY2 = createFn(function () 
{

});

export let TAN = createFn(function () 
{

});

export let TANH = createFn(function () 
{

});

export let TRUNC = createFn(function () 
{

});