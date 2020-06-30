const expect = require("chai").expect;
const path = require('path')
const fs = require('fs')
const fileName = path.resolve(__dirname, '..', '..', 'src', 'variables', '2.js')
const exercise = fs.readFileSync(fileName, {encoding: "utf-8"})
const tester = require('../helpers/parser')
const rewire = require("rewire");

const nodeExercise = rewire('../../src/variables/2')
let script = tester(exercise)
let variableNombre = script.declaresVariable('nombre')
let variableApellido = script.declaresVariable('apellido')
let variableEdad = script.declaresVariable('edad')

describe("Deberás declarar tres variables llamadas nombre, apellido y edad", () => {
    it("La variable nombre debe estar declarada", () => {
        expect(variableNombre).to.not.be.undefined
        expect(nodeExercise.__get__('nombre')).to.have.lengthOf.above(1);
    })

    it("La variable apellido debe estar declarada", () => {
        expect(variableApellido).to.not.be.undefined
        expect(nodeExercise.__get__('apellido')).to.have.lengthOf.above(1);

    })

    it("La variable edad debe estar declarada", () => {
        expect(variableEdad).to.not.be.undefined
        expect(nodeExercise.__get__('edad')).to.be.at.least(1); 
    })
})
