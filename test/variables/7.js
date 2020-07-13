const expect = require("chai").expect;
const assert = require("chai").assert;

const path = require('path')
const fs = require('fs')
const fileName = path.resolve(__dirname, '..', '..', 'src', 'variables', '7.js')
const rewire = require("rewire");
const nodeExercise = rewire(fileName);
const stdout = require("test-console").stdout;

describe("Evaluando ejericio Variables 7", () => {
    it("La variable edad debe estar declarada y ser un número", () => {
        expect(nodeExercise.__get__('edad')).to.not.be.undefined
        expect(nodeExercise.__get__('edad')).to.be.a('number')
    })

    it("Se debe mostrar el valor correcto en pantalla", () => {
        const inspect = stdout.inspect();
        const localScopeExercise = rewire(fileName);
        inspect.restore();
        expect(inspect.output).to.have.lengthOf(1);
        const stDoutMessageExpected = "El valor de edad es: " + localScopeExercise.__get__('edad')+ "\n";
        assert.deepEqual(inspect.output, [stDoutMessageExpected]);
    })


    


})
