const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "estructuras", "1.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Estructuras 1`;

describe(testDescription, () => {
  it("La clase debe ser instanciable ", () => {
    const { expect } = chai;
    const UserClass = nodeExercise.__get__("Usuario");
    const user = new UserClass();
    expect(user).to.be.an('object');
  });
 

  it("El metodo saludar debe funcionar correctamente", () => {
    const inspect = stdout.inspect();
    const UserClass = nodeExercise.__get__("Usuario");
    const user = new UserClass('Juan', 'Paillet');
    user.saludar()
    inspect.restore();
    const stDoutMessageExpected = "Hola " + user.nombre + " " + user.apellido + "\n";
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  });


 
 

});
