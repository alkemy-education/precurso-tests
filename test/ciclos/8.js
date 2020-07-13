const chai = require("chai");
const path = require("path");
chai.use(require("chai-string"));
const stdout = require("test-console").stdout;

const rewire = require("rewire");
const fileName = path.resolve(__dirname, "..", "..", "src", "ciclos", "8.js");
const nodeExercise = rewire(fileName);

const estudiantes = nodeExercise.__get__("estudiantes");
const totalDeEstudiantes = nodeExercise.__get__("totalDeEstudiantes");
const testDescription = `Evaluando resultados del ejercicio Ciclos 8`;

describe(testDescription, () => {
    it("Debe existir la variable estudiantes", () => {
        chai.expect(estudiantes).to.not.be.undefined;
    });
    it("La variable estudiantes debe tener un total de 4 elementos", () => {
        chai.expect(estudiantes).to.have.lengthOf(4);
    });
    it("La variable estudiantes debe contener el nombre 'Juan'", () => {
        chai.expect(estudiantes).to.include("Juan");
    });
    it("La variable estudiantes debe contener el nombre 'Jorge'", () => {
        chai.expect(estudiantes).to.include("Jorge");
    });
    it("La variable estudiantes debe contener el nombre 'Agustina'", () => {
        chai.expect(estudiantes).to.include("Agustina");
    });
    it("La variable estudiantes debe contener el nombre 'Adriana'", () => {
        chai.expect(estudiantes).to.include("Adriana");
    });
    it("Debe existir la variable totalDeEstudiantes", () => {
        chai.expect(totalDeEstudiantes).to.not.be.undefined;
    });
    it("Debe saludar a los estudiantes, pero saltar el mensaje si el nombre es Agustina", () => {
        const inspect = stdout.inspect();
        const exercise = rewire(fileName);
        inspect.restore();
        chai.expect(inspect.output).to.have.lengthOf(3);
        const outputMessageExpected = [];
        for (let contador = 0; contador < exercise.__get__('totalDeEstudiantes'); contador++) {
            if (estudiantes[contador] == "Agustina") {
                continue
             } 
            outputMessageExpected.push("Hola " + estudiantes[contador] + '\n')
        }
        chai.assert.deepEqual(inspect.output, outputMessageExpected);
    });
});