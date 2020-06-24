module.exports = function(fn) {
    // console.log(fn.body)

    for (let stmt of fn.body.body) {
        if (stmt.type == 'IfStatement') {
            console.log('if')
        }

        console.log(stmt)
    }

    return {
        isAsync: function() {
            return fn.async
        },

        hasArguments: function() {
            return fn.params.length > 0
        },

        hasNArguments: function (n) {
            return fn.params.length == n
        },

        hasReturn: function () {

        },

        hasConditional: function () {},

        hasFunction: function () {},

        usesConsoleLog: function () {

        }
    }
}
