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

    /* ------------------------------ isBool ------------------------------ */

    _.isBool = (function ()
    {
        /* Check if value is a boolean primitive.
         *
         * |Name  |Type   |Desc                      |
         * |------|-------|--------------------------|
         * |val   |*      |Value to check            |
         * |return|boolean|True if value is a boolean|
         *
         * ```javascript
         * isBool(true); // -> true
         * isBool(false); // -> true
         * isBool(1); // -> false
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports(val)
        {
            return val === true || val === false;
        }

        return exports;
    })();

    /* ------------------------------ isBrowser ------------------------------ */

    var isBrowser = _.isBrowser = (function (exports)
    {
        /* Check if running in a browser.
         *
         * ```javascript
         * console.log(isBrowser); // -> true if running in a browser
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        exports = typeof window === 'object' &&
                  typeof document === 'object' &&
                  document.nodeType === 9;

        return exports;
    })({});

    /* ------------------------------ root ------------------------------ */

    var root = _.root = (function (exports)
    {
        /* Root object reference, `global` in nodeJs, `window` in browser. */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * isBrowser 
         */

        exports = isBrowser ? window : global;

        return exports;
    })({});

    /* ------------------------------ isFinite ------------------------------ */

    _.isFinite = (function ()
    {
        /* Check if value is a finite primitive number.
         *
         * |Name  |Type   |Desc                            |
         * |------|-------|--------------------------------|
         * |val   |*      |Value to check                  |
         * |return|boolean|True if value is a finite number|
         *
         * ```javascript
         * isFinite(3); // -> true
         * isFinite(Infinity); // -> false
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * root 
         */

        var nativeIsFinite = root.isFinite,
            nativeIsNaN = root.isNaN;

        function exports(val)
        {
            return nativeIsFinite(val) && !nativeIsNaN(parseFloat(val));
        }

        return exports;
    })();

    /* ------------------------------ isNil ------------------------------ */

    _.isNil = (function ()
    {
        /* Check if value is null or undefined, the same as value == null.
         * 
         * |Name  |Type   |Desc                              |
         * |------|-------|----------------------------------|
         * |val   |*      |Value to check                    |
         * |return|boolean|True if value is null or undefined|
         * 
         * ```javascript
         * isNil(null); // -> true
         * isNil(void 0); // -> true
         * isNil(undefined); // -> true
         * isNil(false); // -> false
         * isNil(0); // -> false
         * isNil([]); // -> false
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports(val) 
        {
            return val == null;
        }

        return exports;
    })();

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

    /* ------------------------------ isStr ------------------------------ */

    _.isStr = (function ()
    {
        /* Check if value is a string primitive.
         *
         * |Name  |Type   |Desc                               |
         * |------|-------|-----------------------------------|
         * |val   |*      |Value to check                     |
         * |return|boolean|True if value is a string primitive|
         *
         * ```javascript
         * isStr('eris'); // -> true
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
            return objToStr(val) === '[object String]';
        }

        return exports;
    })();

    /* ------------------------------ isUndef ------------------------------ */

    _.isUndef = (function ()
    {
        /* Check if value is undefined.
         *
         * |Name  |Type   |Desc                      |
         * |------|-------|--------------------------|
         * |val   |*      |Value to check            |
         * |return|boolean|True if value is undefined|
         *
         * ```javascript
         * isUndef(void 0); // -> true
         * isUndef(null); // -> false
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports(val)
        {
            return val === void 0;
        }

        return exports;
    })();

    /* ------------------------------ last ------------------------------ */

    _.last = (function ()
    {
        /* Get the last element of array.
         *
         * |Name  |Type |Desc                     |
         * |------|-----|-------------------------|
         * |arr   |array|The array to query       |
         * |return|*    |The last element of array|
         *
         * ```javascript
         * last([1, 2]); // -> 2
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports(arr)
        {
            var len = arr ? arr.length : 0;

            if (len) return arr[len - 1];
        }

        return exports;
    })();

    /* ------------------------------ ltrim ------------------------------ */

    var ltrim = _.ltrim = (function ()
    {
        /* Remove chars or white-spaces from beginning of string.
         *
         * |Name  |Type        |Desc              |
         * |------|------------|------------------|
         * |str   |string      |String to trim    |
         * |chars |string array|Characters to trim|
         * |return|string      |Trimmed string    |
         *
         * ```javascript
         * ltrim(' abc  '); // -> 'abc  '
         * ltrim('_abc_', '_'); // -> 'abc_'
         * ltrim('_abc_', ['a', '_']); // -> 'bc_'
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        var regSpace = /^\s+/;

        function exports(str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            var start = 0,
                len = str.length,
                charLen = chars.length,
                found = true,
                i, c;

            while (found && start < len)
            {
                found = false;
                i = -1;
                c = str.charAt(start);

                while (++i < charLen)
                {
                    if (c === chars[i])
                    {
                        found = true;
                        start++;
                        break;
                    }
                }
            }

            return start >= len ? '' : str.substr(start, len);
        }

        return exports;
    })();

    /* ------------------------------ rtrim ------------------------------ */

    var rtrim = _.rtrim = (function ()
    {
        /* Remove chars or white-spaces from end of string.
         *
         * |Name  |Type        |Desc              |
         * |------|------------|------------------|
         * |str   |string      |String to trim    |
         * |chars |string array|Characters to trim|
         * |return|string      |Trimmed string    |
         *
         * ```javascript
         * rtrim(' abc  '); // -> ' abc'
         * rtrim('_abc_', '_'); // -> '_abc'
         * rtrim('_abc_', ['c', '_']); // -> '_ab'
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        var regSpace = /\s+$/;

        function exports(str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            var end = str.length - 1,
                charLen = chars.length,
                found = true,
                i, c;

            while (found && end >= 0)
            {
                found = false;
                i = -1;
                c = str.charAt(end);

                while (++i < charLen)
                {
                    if (c === chars[i])
                    {
                        found = true;
                        end--;
                        break;
                    }
                }
            }

            return (end >= 0) ? str.substring(0, end + 1) : '';
        }

        return exports;
    })();

    /* ------------------------------ trim ------------------------------ */

    _.trim = (function ()
    {
        /* Remove chars or white-spaces from beginning end of string.
         *
         * |Name  |Type        |Desc              |
         * |------|------------|------------------|
         * |str   |string      |String to trim    |
         * |chars |string array|Characters to trim|
         * |return|string      |Trimmed string    |
         *
         * ```javascript
         * trim(' abc  '); // -> 'abc'
         * trim('_abc_', '_'); // -> 'abc'
         * trim('_abc_', ['a', 'c', '_']); // -> 'b'
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * ltrim rtrim 
         */

        var regSpace = /^\s+|\s+$/g;

        function exports(str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            return ltrim(rtrim(str, chars), chars);
        }

        return exports;
    })();

    return _;
}));