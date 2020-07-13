const expect = require("chai").expect;
const assert = require('chai').assert;
const path = require('path')
const fs = require('fs')
const fileName = path.resolve(__dirname, '..', '..', 'src', 'variables', '10.js')
const rewire = require("rewire");
const nodeExercise = rewire(fileName);
const stdout = require("test-console").stdout;
const ladoA = nodeExercise.__get__('ladoA');
const ladoB = nodeExercise.__get__('ladoB');
const resultado = nodeExercise.__get__('resultado');

describe("Evaluando ejericio Variables 10", () => {
    it("La variable ladoA debe estar declarada y ser un número", () => {
        expect(ladoA).to.not.be.undefined
        expect(ladoA).to.be.a('number')
    })
    it("La variable ladoB debe estar declarada y ser un número", () => {
        expect(ladoB).to.not.be.undefined
        expect(ladoB).to.be.a('number')

    })
    it("La variable resultado debe estar declarada y ser un número", () => {
        expect(resultado).to.not.be.undefined
        expect(resultado).to.be.a('number')

    })
    it("Debe mostrar el resultado correcto", () => {
        const inspect = stdout.inspect();
        rewire(fileName);
        inspect.restore();
        expect(inspect.output).to.have.lengthOf(1);
        const messageExpected = "El perímetro de un rectángulo de " + ladoA + " x " + ladoB + " es de " + resultado+"\n";
        assert.deepEqual(inspect.output, [messageExpected]);
    })



})