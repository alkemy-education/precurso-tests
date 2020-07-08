const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "estructuras", "3.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Estructuras 3"`;

describe(testDescription, () => {
  it("Usuario debe ser instanciable", () => {
    const { expect } = chai;
    const UserClass = nodeExercise.__get__("Usuario");
    const user = new UserClass();
    expect(user).to.be.an('object');
  });
  it("El usuario debe tener al menos un interés aprendido", () => {
    const { expect } = chai;
    const UserClass = nodeExercise.__get__("Usuario");
    const user = new UserClass();
    expect(user.temasAprendidos).to.have.lengthOf.above(1)
  });
  it("El método sobre mí debe mostrar el mensaje correctamente", () => {
    const { expect } = chai;
    const UserClass = nodeExercise.__get__("Usuario");
    const user = new UserClass();

    const inspect = stdout.inspect();
    user.sobreMi()
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(1);

    const stDoutMessageExpected = "Mi nombre es " + user.nombre + " y aprendí " + user.temasAprendidos.length + "\n";
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  });
});
