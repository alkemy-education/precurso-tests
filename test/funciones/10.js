const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "funciones", "10.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Funciones 10`;

describe(testDescription, () => {
  it("'tablaMultiplicacion' debe estar declarado", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("tablaMultiplicacion")).to.not.be.undefined;
  });
  it("'tablaMultiplicacion' debe ser una funcion", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__('tablaMultiplicacion')).to.be.a('function')
  });
  it("Debe imprimir 10 resultados", () => {
    const inspect = stdout.inspect();
    nodeExercise.__get__('tablaMultiplicacion')(5)
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(10);
  });
  it("Debe imprimir las tablas de multiplicar correctamente", () => {
    const inspect = stdout.inspect();
    nodeExercise.__get__('tablaMultiplicacion')(5)
    inspect.restore();
    const expectedResults = [];
    for (
        let i  = 1; 
        i < 11; 
        i++
    ) {

        expectedResults.push(5 + " x " + i + " = " + 5 * i+"\n")
} 


    chai.assert.deepEqual(expectedResults, inspect.output);
  });


});
