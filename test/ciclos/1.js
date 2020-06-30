const chai = require("chai");
const path = require('path')
const fileName = path.resolve(__dirname, '..', '..', 'src', 'ciclos', '1.js')
chai.use(require('chai-string'));
const rewire = require("rewire");
const nodeExercise = rewire(fileName)

const testDescription = `
Analizando el siguiente bloque de código
---
	variable inicio = 1
	inicio es menor a 5
	inicio++
	comienzo
		imprimir "Hola"
	fin
---
¿Cuántas veces se imprimirá la palabra "Hola"?
`

describe(testDescription, () => {
  it("Deben especificarse la cantidad correcta de impresiones", () => {
    const validResult = 5;
    chai.expect(nodeExercise.__get__('resultado')).to.equal(validResult);
  });
});
