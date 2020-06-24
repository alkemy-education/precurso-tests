const {Syntax} = require('esprima')

module.exports = function(obj) {
    var init = obj.declarations[0].init

    return {
        hasProperties: function() {
            return init.properties.length > 0
        },

        hasProperty: function(name) {
            return this.getProperty(name) != "undefined"
        },

        getProperty: function(name) {
            return init.properties.find(prop => {
                return prop.key.name == name 
                    && (prop.value != Syntax.FunctionExpression 
                    && prop.value != Syntax.FunctionExpression)
            })
        },

        hasMethods: function() {
            return init.properties.filter(prop => {
                return prop.value == Syntax.FunctionExpression 
                    || prop.value == Syntax.FunctionExpression
            })
        },

        hasMethod: function(name) {
            return this.getMethod(name) != "undefined"
        },

        getMethod: function(name) {
            return init.properties.find(prop => {
                return (prop.value == Syntax.FunctionExpression 
                    || prop.value == Syntax.FunctionExpression)
                    && prop.key.name == name
            })
        },
    }
}