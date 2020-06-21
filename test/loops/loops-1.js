const chai = require("chai");
chai.use(require('chai-string'));

const exercise = require("../../exercises/loops/loops-1");

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
    chai.expect(exercise.result).to.equal(validResult);
  });
});
