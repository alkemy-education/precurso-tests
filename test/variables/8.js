const expect = require("chai").expect;
const assert = require('chai').assert;
const path = require('path')
const fs = require('fs')
const fileName = path.resolve(__dirname, '..', '..', 'src', 'variables', '8.js')
const rewire = require("rewire");
const nodeExercise = rewire(fileName);
const stdout = require("test-console").stdout;

describe("Evaluando ejericio Variables 8", () => {
  it("La variable resultado debe estar declarada", () => {
    expect(nodeExercise.__get__('resultado')).to.not.be.undefined
  })
  it("Debe mostrar el resultado correcto", () => {
    const inspect = stdout.inspect();
    rewire(fileName);
    inspect.restore();
    expect(inspect.output).to.have.lengthOf(1);
    const stDoutMessageExpected = "El resultado es 745\n";
    assert.deepEqual(inspect.output, [stDoutMessageExpected]);
  })



})