const stdout = require("test-console").stdout;
const chai = require("chai");
chai.use(require("chai-string"));

const exercise = require("../../exercises/functions/functions-1");

const testDescription = `
Vamos a comenzar por lo más sencillo. 
Tu objetivo será crear una función llamada bienvenida para saludar al usuario luego de 
ingresar al sistema. Deberá recibir como parámetros un nombre y un apellido, 
y mostrar en pantalla "Bienvenido ", seguido del nombre y apellido 
(Cuidado con los espacios entre nombre y apellido)
`;

describe(testDescription, () => {
  it("El método debe devolver el output correcto", () => {
    const inspect = stdout.inspect();
    exercise.saludar("Jorge", "Gomez");
    inspect.restore();
    chai.assert.deepEqual(inspect.output, [ "Bienvenido Jorge Gomez\n" ]);
  });
});
