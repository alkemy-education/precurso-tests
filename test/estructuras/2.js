const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "estructuras", "2.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Estructuras 2"`;

describe(testDescription, () => {
  it("Usuario debe ser instanciable", () => {
    const { expect } = chai;
    const UserClass = nodeExercise.__get__("Usuario");
    const user = new UserClass();
    expect(user).to.be.an('object');
  });
  it("El metodo agregar tema debe agregar un nuevo tema", () => {
    const { expect } = chai;
    const UserClass = nodeExercise.__get__("Usuario");
    const user = new UserClass();
    user.agregarTemaAprendido('test');
    expect(user.temasAprendidos).to.have.lengthOf(1);
  });
});
