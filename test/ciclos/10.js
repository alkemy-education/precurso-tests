const chai = require("chai");
const path = require("path");
chai.use(require("chai-string"));
const stdout = require("test-console").stdout;

const rewire = require("rewire");
const fileName = path.resolve(__dirname, "..", "..", "src", "ciclos", "10.js");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Ciclos 10`;

describe(testDescription, () => {
    it("Debe mostrar los valores correctamente", () => {
        const inspect = stdout.inspect();
        rewire(fileName);
        inspect.restore();
        chai.expect(inspect.output).to.have.lengthOf(5);
        const outputMessageExpected = [];

        for (
            let inicio = 1; inicio < 11; inicio++
        ) {
            let resultado = 7 * inicio
            if (resultado % 2 == 0) {
                outputMessageExpected.push("7 x " + inicio + " = " + 7 * inicio + "\n")
            } else {
                continue
            }
        }


        chai.assert.deepEqual(inspect.output, outputMessageExpected);
    });
});