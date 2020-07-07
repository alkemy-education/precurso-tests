const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "funciones", "3.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Funciones 3`;

describe(testDescription, () => {
  it("'bienvenida' debe estar declarado", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("bienvenida")).to.not.be.undefined;
  });
  it("'bienvenida' debe ser una funcion", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__('bienvenida')).to.be.a('function')
  });
  it("'respuesta' debe estar declarada", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("respuesta")).to.not.be.undefined;

  });
  it("'respuesta' debe ser un string", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__('respuesta')).to.be.a('string')

  });



  it("Al invocar al método, respuesta debe contener el valor correcto", () => {
    const { expect } = chai;

    const respuesta = nodeExercise.__get__('bienvenida')('Juan', 'Paillet', true)
    const expected = 'Bienvenido Juan Paillet';
    expect(respuesta).to.equal(expected);

  });
  

});
