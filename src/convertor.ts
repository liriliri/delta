import {
    isUndef, 
    isNaN, 
    isFinite, 
    isNil,
    isNum,
    isStr,
    trim,
    last,
    isBool
} from './lib/util';
import {InvalidCastError} from './error';

export function toDouble(val: any): number
{
    let ret = null;

    if (isNil(val)) return 0;

    if (isNum(val)) 
    {
        ret = val;
        if (isNaNOrInfinite(val)) throw new InvalidCastError();
    } else if (isStr(val)) 
    {
        val = trim(val);
        if (val.length === 0) return 0;

        let isPercent = false;
        if (last(val) === '%') 
        {
            isPercent = true;
            val = val.substr(0, val.length - 1);
        }

        ret = +val;
        if (isNaNOrInfinite(val)) throw new InvalidCastError();
        if (isPercent) ret /= 100;
    } else if (isBool(val)) 
    {
        ret = val ? 1 : 0;
    } else 
    {
        throw new InvalidCastError();
    }

    return ret;
}

function isNaNOrInfinite(val: any): boolean 
{
    return isNaN(val) || !isFinite(val);
}
