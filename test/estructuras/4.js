const chai = require("chai");
const path = require("path");
const stdout = require("test-console").stdout;
const fileName = path.resolve( "src", "estructuras", "4.js");
chai.use(require("chai-string"));
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

const testDescription = `Evaluando resultados del ejercicio Estructuras 4"`;

describe(testDescription, () => {
  it("Producto debe ser instanciable", () => {
    const { expect } = chai;
    const ProductClass = nodeExercise.__get__("Producto");
    const product = new ProductClass();
    expect(product).to.be.an('object');
  });
  it("Debe existir la instancia de producto llamada producto1", () => {
    const { expect } = chai;
    const product = nodeExercise.__get__("producto1");
    expect(product).to.be.an('object');
  });
  it("El nombre del producto debe existir y ser del tipo string", () => {
    const { expect } = chai;
    const product = nodeExercise.__get__("producto1");
    expect(product.nombre).to.be.a('string');
  });
  it("El precio del producto debe existir y ser del tipo numérico", () => {
    const { expect } = chai;
    const product = nodeExercise.__get__("producto1");
    expect(product.precio).to.be.a('number');
  });
  it("El producto debe tener al menos una categoría", () => {
    const { expect } = chai;
    const product = nodeExercise.__get__("producto1");
    expect(product.categorias).to.have.lengthOf.above(0)
  });
  it("Las categorías deben ser del tipo string", () => {
    const { expect } = chai;
    const product = nodeExercise.__get__("producto1");
    expect(product.categorias[0]).to.be.a('string');
  });

});
