const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve(__dirname, "..", "..", "src", "logica", "8.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Lógica 8`;

describe(testDescription, () => {
  it("La variable hayLimones debe estar declarada y contener un valor booleano", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("hayLimones")).to.not.be.undefined;
    expect(nodeExercise.__get__('hayLimones')).to.be.a('boolean')
  });

  it("La variable hayManzanas debe estar declarada y contener un valor booleano", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("hayManzanas")).to.not.be.undefined;
    expect(nodeExercise.__get__('hayManzanas')).to.be.a('boolean')
  });

  it("La variable hayPeras debe estar declarada y contener un valor booleano", () => {
    const { expect } = chai;
    expect(nodeExercise.__get__("hayPeras")).to.not.be.undefined;
    expect(nodeExercise.__get__('hayPeras')).to.be.a('boolean')
  });

  it("Debe cumplir la consigna", () => {
    const { expect } = chai;
    const hayLimones = nodeExercise.__get__("hayLimones");
    const hayManzanas = nodeExercise.__get__("hayManzanas")
    const hayPeras = nodeExercise.__get__("hayPeras");


    const inspect = stdout.inspect();
    rewire(fileName);
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(1);
    let stDoutMessageExpected;

    if (hayLimones && hayManzanas && hayPeras) {
      stDoutMessageExpected = "A preparar!\n";
    }else{
        stDoutMessageExpected = "La próxima!\n";
    }
    chai.assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  });

});
