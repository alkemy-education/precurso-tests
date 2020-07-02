const chai = require("chai");
const path = require('path');
const stdout = require("test-console").stdout;
const fileName = path.resolve(__dirname, '..', '..', 'src', 'logica', '1.js');
chai.use(require('chai-string'));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Lógica 1`


describe(testDescription, () => {
  it("El método debe devolver el output según la variable", () => {
    const inspect = stdout.inspect();
    rewire(fileName);
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(1);
    const stDoutMessageExpected = 'Estoy aprendiendo\n';
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  });
});