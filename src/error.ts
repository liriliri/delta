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
