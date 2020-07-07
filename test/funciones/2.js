const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "funciones", "2.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Funciones 2`;

describe(testDescription, () => {
  it("'bienvenida' debe estar declarado", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("bienvenida")).to.not.be.undefined;
  });
  it("'bienvenida' debe ser una funcion", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__('bienvenida')).to.be.a('function')
  });
  it("Debe saludar al usuario al enviárseles los parámetros nombre y apellido, y estaHabilitado es cierto", () => {
    const inspect = stdout.inspect();
    nodeExercise.__get__('bienvenida')('Juan', 'Paillet', true)
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(1);
    const stDoutMessageExpected = "Bienvenido Juan Paillet\n";
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  });
  it("No debe saludar al usuario si estaHabilitado es falso", () => {
    const inspect = stdout.inspect();
    
    nodeExercise.__get__('bienvenida')('Juan', 'Paillet', false)
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(1);
    const stDoutMessageExpected = "No estás habilitado para ingresar\n";
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  });

});
