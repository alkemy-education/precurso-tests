const {parseScript, Syntax} = require('esprima')

module.exports = function(code) {
    let parsed = parseScript(code, { comment: false, tokens: true })

    // console.log(
    //     parsed.body[7].declarations[0].init.properties
    // )

    // console.log(
    //     parsed.body[9].declarations[0].init.body,

    //     Array.from(
    //         parsed.body[9].declarations[0].init.body
    //     ).find(value => {
    //         console.log(value)
    //         value.type == 'ReturnStatement'
    //     }))

    /**
     * Check if variable for given name exists in the given code
     * @param {string} name 
     * @param {string} code 
     */
    function declaresVariable(name) {
        return parsed.body.find(value => {
            return value.type == Syntax.VariableDeclaration 
                && value.declarations[0].id.name == name 
                && (value.kind == 'let' || value.kind == 'var')
        })
    }

    /**
     * Check if constante is defined
     * @param {string} name 
     */
    function declaresConstant(name) {
        return parsed.body.find(value => {
            return value.type == Syntax.VariableDeclaration 
                && value.declarations[0].id.name == name 
                && value.kind == 'const'
        })
    }

    /**
     * Check if variable for given name exists in the given code
     * @param {string} name 
     * @param {string} code 
     */
    function declaresFunction(name) {
        return parsed.body.find(value => {
            return value.type == Syntax.FunctionDeclaration &&
                value.id.name == name
        })
    }

    /**
     * Return all declared variables in the code
     * @returns {Array}
     */
    function getDeclaredVariables() {
        return code.body.filter((value, index) => index == Syntax.VariableDeclaration)
    }

    return {
        declaresVariable,
        declaresConstant,
        declaresFunction,
        getDeclaredVariables,
         parsed
    }
}
