const expect = require("chai").expect;
const path = require('path')
const fs = require('fs')
const fileName = path.resolve(__dirname, '..', '..', 'src', 'variables', '2.js')
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

describe("Deberás declarar tres variables llamadas nombre, apellido y edad", () => {
    it("La variable nombre debe estar declarada", () => {
        expect(nodeExercise.__get__('nombre')).to.not.be.undefined
        expect(nodeExercise.__get__('nombre')).to.have.lengthOf.above(1);
    })

    it("La variable apellido debe estar declarada", () => {
        expect(nodeExercise.__get__('apellido')).to.not.be.undefined
        expect(nodeExercise.__get__('apellido')).to.have.lengthOf.above(1);

    })

    it("La variable edad debe estar declarada", () => {
        expect(nodeExercise.__get__('edad')).to.not.be.undefined
        expect(nodeExercise.__get__('edad')).to.be.at.least(1); 
    })
})
