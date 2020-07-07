const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "funciones", "8.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Funciones 8`;

describe(testDescription, () => {
  it("'verificarOrden' debe estar declarado", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("verificarOrden")).to.not.be.undefined;
  });
  it("'verificarOrden' debe ser una funcion", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__('verificarOrden')).to.be.a('function')
  });
  it("Debe devolver el mensaje correcto si los números son consecutivos", () => {
    const inspect = stdout.inspect();
    nodeExercise.__get__('verificarOrden')(6, 7, 8)
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(1);
    const stDoutMessageExpected = "Los números están ordenados correctamente\n";
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  });
  it("Debe devolver el mensaje correcto si los números no son consecutivos", () => {
    const inspect = stdout.inspect();
    nodeExercise.__get__('verificarOrden')(12, 7, 8)
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(1);
    const stDoutMessageExpected = "Los números no están ordenados correctamente\n";
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  });

});
