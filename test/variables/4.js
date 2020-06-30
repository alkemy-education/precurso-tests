const stdout = require("test-console").stdout;
const path = require('path')

const chai = require("chai");
chai.use(require("chai-string"));
const fileName = path.resolve(__dirname, '..', '..', 'src', 'variables', '4.js')
const rewire = require("rewire");
const nodeExercise = rewire(fileName)
const exercise = path.join(__dirname, 'functions', '1.js')

const testDescription = `
Ahora que disponemos de nuestras variables, queremos mostrarlas en pantalla. 

Deberás imprimir un mensaje con el siguiente contenido.

> Hola **nombre** **apellido**
`;

describe(testDescription, () => {
  it("El método debe devolver el output correcto", () => {
    const inspect = stdout.inspect();
    nodeExercise.__get__('saludar')("Jorge", "Gomez");
    inspect.restore();
    chai.assert.deepEqual(inspect.output, [ "Bienvenido Jorge Gomez\n" ]);
  });
});
