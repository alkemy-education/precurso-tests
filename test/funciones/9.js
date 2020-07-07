const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "funciones", "9.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Funciones 9`;

describe(testDescription, () => {
  it("'calcularCantidadDePasos' debe estar declarado", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("calcularCantidadDePasos")).to.not.be.undefined;
  });
  it("'calcularCantidadDePasos' debe ser una funcion", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__('calcularCantidadDePasos')).to.be.a('function')
  });
  it("Debe calcular correctamente la cantidad de pasos", () => {
    const inspect = stdout.inspect();
    nodeExercise.__get__('calcularCantidadDePasos')(2920, 32)
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(1);
    const stDoutMessageExpected = "A una media de 32 metros por paso, se deberán dar 89 pasos para recorrer 2920 metros\n";
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  });
 

});
