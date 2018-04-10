import {ArgsError} from './error';

export default function (fnEvaluate: Function, opts: Object = {}) 
{
    let fn = new FormulaFunction(fnEvaluate, opts);

    return function (...args: any[]) 
    {
        return fn.call(args); 
    };
}

class FormulaFunction 
{
    private evaluate: Function;
    private minArgs: number;
    private maxArgs: number;
    constructor(evaluate: Function, {
        minArgs = 0,
        maxArgs = Infinity
    } = {}) 
    {
        this.evaluate = evaluate;
        this.minArgs = minArgs;
        this.maxArgs = maxArgs;
    }
    call(args: any[]) 
    {
        let argsLen = args.length;
        if (argsLen < this.minArgs || argsLen > this.maxArgs) throw new ArgsError();

        return this.evaluate.apply(this, args);
    }
}
