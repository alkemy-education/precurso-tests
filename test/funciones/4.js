const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "funciones", "4.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Funciones 4`;

describe(testDescription, () => {
  it("'mostrarPromocion' debe estar declarado", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("mostrarPromocion")).to.not.be.undefined;
  });
  it("'mostrarPromocion' debe ser una funcion", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__('mostrarPromocion')).to.be.a('function')
  });
  it("Debe mostrar el valor correcto con impuestos", () => {
    const inspect = stdout.inspect();
    nodeExercise.__get__('mostrarPromocion')('Product', 1, true)
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(1);
    const stDoutMessageExpected = "Aprovecha esta promoción: Product a solo $ 1.21\n";
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  });
  it("Debe mostrar el valor correcto sin impuestos", () => {
    const inspect = stdout.inspect();
    nodeExercise.__get__('mostrarPromocion')('Product', 1, false)
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(1);
    const stDoutMessageExpected = "Aprovecha esta promoción: Product a solo $ 1\n";
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  });


});
