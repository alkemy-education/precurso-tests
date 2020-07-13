const chai = require("chai");
const path = require("path");
chai.use(require("chai-string"));
const stdout = require("test-console").stdout;

const rewire = require("rewire");
const fileName = path.resolve(__dirname, "..", "..", "src", "ciclos", "7.js");
const nodeExercise = rewire(fileName);

const estudiantes = nodeExercise.__get__("estudiantes");
const totalDeEstudiantes = nodeExercise.__get__("totalDeEstudiantes");
const testDescription = `Evaluando resultados del ejercicio Ciclos 7`;

describe(testDescription, () => {
    it("Debe existir la variable estudiantes", () => {
        chai.expect(estudiantes).to.not.be.undefined;
    });
    it("La variable estudiantes debe tener un total de 3 elementos", () => {
        chai.expect(estudiantes).to.have.lengthOf(3);
    });
    it("La variable estudiantes debe contener el nombre 'Juan'", () => {
        chai.expect(estudiantes).to.include("Juan");
    });
    it("La variable estudiantes debe contener el nombre 'Jorge'", () => {
        chai.expect(estudiantes).to.include("Jorge");
    });
    it("La variable estudiantes debe contener el nombre 'Lucas'", () => {
        chai.expect(estudiantes).to.include("Lucas");
    });
    it("Debe existir la variable totalDeEstudiantes", () => {
        chai.expect(totalDeEstudiantes).to.not.be.undefined;
    });
    it("Debe saludar a los estudiantes", () => {
        const inspect = stdout.inspect();
        const exercise = rewire(fileName);
        inspect.restore();
        chai.expect(inspect.output).to.have.lengthOf(3);
        const outputMessageExpected = [];
        for (let inicio = 0; inicio < exercise.__get__('totalDeEstudiantes'); inicio++) {
            outputMessageExpected.push("Hola " + estudiantes[inicio] + '\n')
        }
        chai.assert.deepEqual(inspect.output, outputMessageExpected);
    });
});