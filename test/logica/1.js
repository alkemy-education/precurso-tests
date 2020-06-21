const chai = require("chai");
const path = require('path')
const exercise = path.join(__dirname, 'logica', '1.js')

const testDescription = `
La lógica es el punto de partida para que un programa funcione, ya que nos permitirá que ocurra una cosa u otra de forma dinámica. 
Vamos a comenzar una verificación básica. ¿Qué debería imprimir el siguiente código?

chai.use(require('chai-string'));

--
variable estoyAprendiendo = verdadero
si (estoyAprendiendo)
	imprimir "¡Estoy aprendiendo!"
si no
	imprimir "Momento de descanso"
fin
--
`

describe(testDescription, () => {
  it("El resultado especificado por el usuario debe ser el correcto", () => {
      const validResult = "Estoy aprendiendo";
    chai.expect(exercise.result).to.equal(validResult);
  });
});
