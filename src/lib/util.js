// Built by eustia.
(function(root, factory)
{
    if (typeof define === 'function' && define.amd)
    {
        define([], factory);
    } else if (typeof module === 'object' && module.exports)
    {
        module.exports = factory();
    } else { root._ = factory(); }
}(this, function ()
{
    "use strict";

    var _ = {};

    if (typeof window === 'object' && window._) _ = window._;

    /* ------------------------------ objToStr ------------------------------ */

    var objToStr = _.objToStr = (function ()
    {
        /* Alias of Object.prototype.toString.
         *
         * |Name  |Type  |Desc                                |
         * |------|------|------------------------------------|
         * |value |*     |Source value                        |
         * |return|string|String representation of given value|
         * 
         * ```javascript
         * objToStr(5); // -> '[object Number]'
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        var ObjToStr = Object.prototype.toString;

        function exports(val)
        {
            return ObjToStr.call(val);
        }

        return exports;
    })();

    /* ------------------------------ isNum ------------------------------ */

    var isNum = _.isNum = (function ()
    {
        /* Check if value is classified as a Number primitive or object.
         *
         * |Name  |Type   |Desc                                 |
         * |------|-------|-------------------------------------|
         * |val   |*      |Value to check                       |
         * |return|boolean|True if value is correctly classified|
         * 
         * ```javascript
         * isNum(5); // -> true
         * isNum(5.1); // -> true
         * isNum({}); // -> false
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * objToStr 
         */

        function exports(val)
        {
            return objToStr(val) === '[object Number]';
        }

        return exports;
    })();

    /* ------------------------------ isNaN ------------------------------ */

    _.isNaN = (function ()
    {
        /* Check if value is an NaN.
         *
         * |Name  |Type   |Desc                   |
         * |------|-------|-----------------------|
         * |val   |*      |Value to check         |
         * |return|boolean|True if value is an NaN|
         *
         * Undefined is not an NaN, different from global isNaN function.
         *
         * ```javascript
         * isNaN(0); // -> false
         * isNaN(NaN); // -> true
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * isNum 
         */

        function exports(val)
        {
            return isNum(val) && val !== +val;
        }

        return exports;
    })();

    return _;
}));