const chai = require("chai");
const path = require("path");
chai.use(require("chai-string"));
const stdout = require("test-console").stdout;

const rewire = require("rewire");
const fileName = path.resolve(__dirname, "..", "..", "src", "ciclos", "9.js");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Ciclos 9`;

describe(testDescription, () => {
    it("Debe mostrar los valores correctamente", () => {
        const inspect = stdout.inspect();
        rewire(fileName);
        inspect.restore();
        chai.expect(inspect.output).to.have.lengthOf(10);
        const outputMessageExpected = [];
     
        for (
            let inicio = 1; inicio < 11; inicio++
        ) {
            outputMessageExpected.push("7 x " + inicio + " = " + 7 * inicio + "\n")
        }

        chai.assert.deepEqual(inspect.output, outputMessageExpected);
    });
});