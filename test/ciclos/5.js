const chai = require("chai");
const path = require("path");
chai.use(require("chai-string"));
const stdout = require("test-console").stdout;


const rewire = require("rewire");
const fileName = path.resolve(__dirname, "..", "..", "src", "ciclos", "5.js");
const nodeExercise = rewire(fileName);
const estudiantes = nodeExercise.__get__("estudiantes");
const totalDeEstudiantes = nodeExercise.__get__("totalDeEstudiantes")
const testDescription = `
Partiendo de la variable estudiantes , con sus valores ya de } idos,
deberás crear una nueva variable llamada  totalDeEstudiantes,
que contenga el total de los elementos contenidos en el Array,
e console.log(en pantalla el mensaje:
"El total de estudiantes es: ", seguido del total de estudiantes
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
  it("La variable estudiantes debe contener el nombre 'Lucas'", () => {
    chai.expect(estudiantes).to.include('Lucas')
  });
  it("Debe mostrarse el mensaje correctamente", () => {
    const inspect = stdout.inspect();

    eval(fileName)

    inspect.restore();
    chai.assert.deepEqual(inspect.output, ["El total de estudiantes es: " + totalDeEstudiantes + "\n" ]);
  });


});
