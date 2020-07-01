const expect = require("chai").expect;
const path = require('path')
const fs = require('fs')
const fileName = path.resolve(__dirname, '..', '..', 'src', 'variables', '1.js')
const exercise = fs.readFileSync(fileName, {encoding: "utf-8"})
const tester = require('../helpers/parser')
const varTester = require('../helpers/variables')

let script = tester(exercise)
let variableNombre = script.declaresVariable('nombre')
let variableApellido = script.declaresVariable('apellido')
let variableEdad = script.declaresVariable('edad')

describe("Deberás declarar tres variables llamadas nombre, apellido y edad", () => {
    it("La variable nombre debe estar declarada", () => {
        expect(variableNombre).to.not.be.false
    })

    it("La variable apellido debe estar declarada", () => {
        expect(variableApellido).to.not.be.undefined
    })

    it("La variable edad debe estar declarada", () => {
        expect(variableEdad).to.not.be.undefined
    })
})
