const chai = require("chai");
const path = require('path')
const fileName = path.resolve(__dirname, '..', '..', 'src', 'funciones', '1.js')
chai.use(require('chai-string'));
const rewire = require("rewire");
const nodeExercise = rewire(fileName)
const testDescription = `Evaluando ejercicios Funciones 1 `;

describe(testDescription, () => {
  it("El método debe devolver el output correcto", () => {
    const inspect = stdout.inspect();
    exercise.saludar("Jorge", "Gomez");
    inspect.restore();
    chai.assert.deepEqual(inspect.output, [ "Bienvenido Jorge Gomez\n" ]);
  });
});
