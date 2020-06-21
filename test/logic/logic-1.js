const chai = require("chai");
chai.use(require('chai-string'));

const exercise = require("../../exercises/logic/logic-1");

const testDescription = `
La lógica es el punto de partida para que un programa funcione, ya que nos permitirá que ocurra una cosa u otra de forma dinámica. 
Vamos a comenzar una verificación básica. ¿Qué debería imprimir el siguiente código?

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
