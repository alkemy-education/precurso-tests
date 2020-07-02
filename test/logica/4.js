const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve(__dirname, "..", "..", "src", "logica", "4.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Lógica 4`;

describe(testDescription, () => {
  it("La variable hora debe estar declarada y ser un numero positivo", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("hora")).to.not.be.undefined;
    expect(nodeExercise.__get__("hora")).to.be.at.least(1);
    expect(nodeExercise.__get__("hora")).to.be.at.below(25);
  });
  it("El método debe devolver el output según la variable", () => {
    const inspect = stdout.inspect();
    rewire(fileName);
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(1);
    let stDoutMessageExpected;

    if (nodeExercise.__get__("hora") > 8 && nodeExercise.__get__("hora") < 14) {
      stDoutMessageExpected = "Hora de estudiar\n";
    } else {
      stDoutMessageExpected = "Hora de descansar\n";
    }
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  });
});
