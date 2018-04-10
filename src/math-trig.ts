import createFn from './createFn';
import {ValueError} from './error';
import {isNaN} from './lib/util';
import {toDouble} from './convert';

let {
    abs
} = Math;

export let ABS = createFn(function (num: number | string) 
{
    num = toDouble(num);

    if (isNaN(num)) throw new ValueError();

    return abs(num);
}, {
    minArgs: 1,
    maxArgs: 1 
});