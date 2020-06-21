const expect = require("chai").expect;
const exercise = require("../../exercises/variables/var-1");

describe("Deberás declarar tres variables llamadas nombre, apellido y edad", () => {
  it("La variable nombre debe estar declarada", () => {
    expect(exercise.nombre).to.not.be.undefined
  });
  it("La variable apellido debe estar declarada", () => {
    expect(exercise.apellido).to.not.be.undefined
  });
  it("La variable edad debe estar declarada", () => {
    expect(exercise.edad).to.not.be.undefined
  });
});
