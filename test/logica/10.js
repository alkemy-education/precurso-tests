const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve(__dirname, "..", "..", "src", "logica", "10.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Lógica 10`;

describe(testDescription, () => {
  it("Debe tener el valor correcto", () => {
    const { expect } = chai;
    const validResult = "A preparar";
    expect(nodeExercise.__get__("resultado")).to.not.be.undefined;
    expect(nodeExercise.__get__('resultado')).to.equal(validResult);
  });
  
});
