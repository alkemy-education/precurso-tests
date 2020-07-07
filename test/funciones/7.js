const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "funciones", "7.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Funciones 7`;

describe(testDescription, () => {
  it("'calcularDescuento' debe estar declarado", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("calcularDescuento")).to.not.be.undefined;
  });
  it("'calcularDescuento' debe ser una funcion", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__('calcularDescuento')).to.be.a('function')
  });
 
  it("Si el monto es menor a 1000, no debe aplicar descuento", () => {
    const { expect } = chai;
    const testMethod = nodeExercise.__get__('calcularDescuento');
    const tested = testMethod(500)
    const expected = "$500";
    expect(tested).to.equal(expected);
  });
  it("Si el monto es igual o mayor a 1000 y menor que 5000, debe aplicar descuento del 10%", () => {
    const ex = rewire(fileName);
    const { expect } = chai;
    const testMethod = nodeExercise.__get__('calcularDescuento');
    const tested = testMethod(1000)
    const expected =  "$900";
    expect(tested).to.equal(expected);
  });
  it("Si el monto es mayor a 5000, debe aplicar descuento del 20%", () => {
    const ex = rewire(fileName);
    const { expect } = chai;
    const testMethod = nodeExercise.__get__('calcularDescuento');
    const tested = testMethod(52900)
    const expected =  "$42320";
    expect(tested).to.equal(expected);
  });

  it("Si el monto es menor a 1000 y calcularImpuestos verdadero, debe calcular correctamente", () => {
    const { expect } = chai;
    const testMethod = nodeExercise.__get__('calcularDescuento');
    const tested = testMethod(500, true)
    const expected = "$605";
    expect(tested).to.equal(expected);
  });
  it("Si el monto es igual o mayor a 1000 y calcularImpuestos verdadero, debe calcular correctamente", () => {
    const ex = rewire(fileName);
    const { expect } = chai;
    const testMethod = nodeExercise.__get__('calcularDescuento');
    const tested = testMethod(1000, true)
    const expected =  "$1089";
    expect(tested).to.equal(expected);
  });
  it("Si el monto es mayor a 5000 y calcularImpuestos verdadero, debe calcular correctamente", () => {
    const ex = rewire(fileName);
    const { expect } = chai;
    const testMethod = nodeExercise.__get__('calcularDescuento');
    const tested = testMethod(52900, true)
    const expected =  "$51207.2";
    expect(tested).to.equal(expected);
  });


});
