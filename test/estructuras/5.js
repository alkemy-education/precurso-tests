const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "estructuras", "5.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Estructuras 5"`;

describe(testDescription, () => {
  it("Producto debe ser instanciable", () => {
    const { expect } = chai;
    const ProductClass = nodeExercise.__get__("Producto");
    const product = new ProductClass();
    expect(product).to.be.an('object');
  });
 
  it("Debe existir el método mostrarPrecio", () => {
    const { expect } = chai;
    const ProductClass = nodeExercise.__get__("Producto");
    const product = new ProductClass('test', 123);
    expect(product.mostrarPrecio).to.be.a('function');
  });
  it("El método mostrarPrecio debe devolver el output correcto sin impuestos", () => {
    const { expect } = chai;
    const ProductClass = nodeExercise.__get__("Producto");
    const product = new ProductClass('test', 200);
    product.precio = 200;
    const result = product.mostrarPrecio(false);
    expect(result).to.equal("$200");
  });
  it("El método mostrarPrecio debe devolver el output correcto con impuestos", () => {
    const { expect } = chai;
    const ProductClass = nodeExercise.__get__("Producto");
    const product = new ProductClass('test');
    product.precio = 200;
    const result = product.mostrarPrecio(true);
    expect(result).to.equal("$242");
  });

});
