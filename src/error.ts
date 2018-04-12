export class ValueError extends Error 
{
    constructor(...args: any[]) 
    {
        super(...args);

        this.message = 'value';
    }
}

export class ArgsError extends Error 
{
    constructor(...args: any[]) 
    {
        super(...args);

        this.message = 'args';
    } 
}

export class NumberError extends Error 
{
    constructor(...args: any[]) 
    {
        super(...args);

        this.message = 'number';
    }
}

export class InvalidCastError extends Error 
{
    constructor(...args: any[]) 
    {
        super(...args);

        this.message = 'invalidCast';
    }
}
