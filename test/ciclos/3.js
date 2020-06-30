const chai = require("chai");
const path = require("path");
const fileName = path.resolve(__dirname, "..", "..", "src", "ciclos", "3.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);
const estudiantes = nodeExercise.__get__("estudiantes");

const testDescription = `
Tu siguiente desafío es trabajar con el nuevo tipo de variable que  conocimos: Array.

Disponemos de una variable ya  creada, llamada estudiantes, que tiene como valor un array vacío.

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
