const expect = require("chai").expect;
const assert = require('chai').assert;
const path = require('path')
const fs = require('fs')
const fileName = path.resolve(__dirname, '..', '..', 'src', 'variables', '9.js')
const rewire = require("rewire");
const nodeExercise = rewire(fileName);
const stdout = require("test-console").stdout;
const radioDelCirculo = nodeExercise.__get__('radioDelCirculo');
const pi = nodeExercise.__get__('pi');
const area = nodeExercise.__get__('area');

describe("Evaluando ejericio Variables 9", () => {
    it("La variable radioDelCirculo debe estar declarada y ser un número", () => {
        expect(radioDelCirculo).to.not.be.undefined
    })
    it("La constante pi debe estar declarada y tener el valor 3.14", () => {
        expect(pi).to.not.be.undefined
        expect(pi).to.equal(3.14)
    })
    it("Debe mostrar el resultado correcto", () => {
        const inspect = stdout.inspect();
        rewire(fileName);
        inspect.restore();
        expect(inspect.output).to.have.lengthOf(1);
        const stDoutMessageExpected = "El area de un círculo de " + radioDelCirculo + " es " + area + "\n";
        assert.deepEqual(inspect.output, [stDoutMessageExpected]);
    })



})