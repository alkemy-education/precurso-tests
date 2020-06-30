const chai = require("chai");
const path = require("path");
const fileName = path.resolve(__dirname, "..", "..", "src", "ciclos", "4.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);
const estudiantes = nodeExercise.__get__("estudiantes");

const testDescription = `
A la hora de determinar los datos de un Array, podemos ahorrar líneas de código inicializando el mismo con los datos requeridos.

Siguiendo el ejercicio anterior, deberás declarar la variable estudiantes, y asignarle como valor un Array que contenga los nombre Juan, Jorge y Lucas.
`;

describe(testDescription, () => {
  it("Debe existir la variable estudiantes", () => {
    chai.expect(estudiantes).to.not.be.undefined;
  });
  it("La variable estudiantes debe tener un total de 3 elementos", () => {
    chai.expect(estudiantes).to.have.lengthOf(3);
  });
  it("La variable estudiantes debe contener el nombre 'Juan'", () => {
    chai.expect(estudiantes).to.include('Juan')
  });
  it("La variable estudiantes debe contener el nombre 'Jorge'", () => {
    chai.expect(estudiantes).to.include('Jorge')
  });
  it("La variable estudiantes debe contener el nombre 'Lucas'", () => {
    chai.expect(estudiantes).to.include('Lucas')
  });
});
