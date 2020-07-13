const expect = require("chai").expect;
const assert = require('chai').assert;
const path = require('path')
const fs = require('fs')
const fileName = path.resolve(__dirname, '..', '..', 'src', 'variables', '5.js')
const rewire = require("rewire");
const nodeExercise = rewire(fileName);
const stdout = require("test-console").stdout;

describe("Evaluando ejericio Variables 5", () => {
  it("La variable nombre debe estar declarada", () => {
    expect(nodeExercise.__get__('nombre')).to.not.be.undefined
    expect(nodeExercise.__get__('nombre')).to.have.lengthOf.above(1);
  })

  it("La variable apellido debe estar declarada", () => {
    expect(nodeExercise.__get__('apellido')).to.not.be.undefined
    expect(nodeExercise.__get__('apellido')).to.have.lengthOf.above(1);

  })

  it("La variable nombreCompleto debe estar declarada", () => {
    expect(nodeExercise.__get__('nombreCompleto')).to.not.be.undefined
    expect(nodeExercise.__get__('nombreCompleto')).to.be.a('string');
  })

  it("Debe mostrar el mensaje correctamente", () => {
    const inspect = stdout.inspect();
    const localScopeExercise = rewire(fileName);
    inspect.restore();
    expect(inspect.output).to.have.lengthOf(1);
    const stDoutMessageExpected = "Hola " + localScopeExercise.__get__('nombreCompleto') + "\n";
    assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  })



})