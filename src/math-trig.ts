import createFn from './createFn';
import {
    ValueError,
    NumberError
} from './error';
import {isNaN} from './lib/util';
import {toDouble} from './convert';

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
