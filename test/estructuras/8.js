const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "estructuras", "6.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Estructuras 6"`;

describe(testDescription, () => {
  it("Producto debe ser instanciable", () => {
    const { expect } = chai;
    const ProductClass = nodeExercise.__get__("Producto");
    const product = new ProductClass();
    expect(product).to.be.an('object');
  });
 
  it("Debe existir el método listarCategorias", () => {
    const { expect } = chai;
    const ProductClass = nodeExercise.__get__("Producto");
    const product = new ProductClass('test', 123);
    expect(product.listarCategorias).to.be.a('function');
  });
  it("El método listarCategorias debe devolver el output correcto", () => {
    const { expect } = chai;
    const ProductClass = nodeExercise.__get__("Producto");
    const product = new ProductClass('test', 200);
    product.categorias = ['1', '2'];

    const inspect = stdout.inspect();
    product.listarCategorias()
    inspect.restore();
    chai.expect(inspect.output).to.have.lengthOf(2);

    //const stDoutMessageExpected = ["1\n", "2\n"];
    const outputMessageExpected = [];
    for (let index = 0; index < 2; index++) {
        outputMessageExpected.push((index + 1) +"\n")
    }
    chai.assert.deepEqual(inspect.output, outputMessageExpected);
    
  });
 

});
