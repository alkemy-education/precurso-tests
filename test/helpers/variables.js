let { Syntax } = require('esprima')

module.exports.variable = (v) => {
    var value = v.type == Syntax.Property ? v.value : v.declarations[0].init

    return {
        /**
         * Check if value is string type
         * @returns {boolean}
         */
        isString: function() {
            return typeof value.value == 'string'
        },

        /**
         * Check if value is number type
         * @returns {boolean}
         */
        isNumber: function() {
            return typeof value.value == 'number'
        },

        /**
         * Check if value is array type
         * @returns {boolean}
         */
        isArray: function() {
            return value.type == Syntax.ArrayExpression
        },

        /**
         * Check if value is object type
         * @returns {boolean}
         */
        isObject: function() {
            return value.type == Syntax.ObjectExpression
        },

        /**
         * Check if value is class instance type
         * @returns {boolean}
         */
        isInstance: function() {
            return value.type == Syntax.NewExpression
        },

        /**
         * Check if value is function type
         * @returns {boolean}
         */
        isFunction: function() {
            return value.type == Syntax.FunctionExpression
        },

        /**
         * Check if value has value assigned
         * @returns {boolean}
         */
        hasValue: function() {
            return value !== null
        },

        /**
         * Get the variable value
         * @returns {boolean}
         */
        getValue: function() {
            return value.value
        }
    }
}