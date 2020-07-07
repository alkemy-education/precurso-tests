const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "funciones", "5.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Funciones 5`;

describe(testDescription, () => {
  it("'calcularExponencial' debe estar declarado", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("calcularExponencial")).to.not.be.undefined;
  });
  it("'calcularExponencial' debe ser una funcion", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__('calcularExponencial')).to.be.a('function')
  });
 
  it("Debe calcular el exponencial correctamente", () => {
    const inspect = stdout.inspect();
    nodeExercise.__get__('calcularExponencial')(4, 12)
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(1);
    const stDoutMessageExpected = "El resultado de elevar el numero 4 a 12 es 16777216\n";
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);

  });
  

});
