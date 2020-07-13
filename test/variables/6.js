const expect = require("chai").expect;
const path = require('path')
const fs = require('fs')
const fileName = path.resolve(__dirname, '..', '..', 'src', 'variables', '6.js')
const rewire = require("rewire");
const nodeExercise = rewire(fileName);

describe("Evaluando ejericio Variables 6", () => {
    it("La variable minutosTotales debe estar declarada y ser un número", () => {
        expect(nodeExercise.__get__('minutosTotales')).to.not.be.undefined
        expect(nodeExercise.__get__('minutosTotales')).to.be.a('number')
    })

    it("La variable mbTotales debe estar declarada y ser un número", () => {
        expect(nodeExercise.__get__('mbTotales')).to.not.be.undefined
        expect(nodeExercise.__get__('mbTotales')).to.be.a('number')
    })

    it("La variable minutosACalcular debe estar declarada y ser un número", () => {
        expect(nodeExercise.__get__('minutosACalcular')).to.not.be.undefined
        expect(nodeExercise.__get__('minutosACalcular')).to.be.a('number')
    })

    it("La variable resultado debe estar declarada y ser un número", () => {
        expect(nodeExercise.__get__('resultado')).to.not.be.undefined
        expect(nodeExercise.__get__('resultado')).to.be.a('number')
    })

    it("La variable resultado debe tener el valor correcto", () => {
        const minutosTotales = nodeExercise.__get__('minutosTotales');
        const mbTotales = nodeExercise.__get__('mbTotales');
        const minutosACalcular = nodeExercise.__get__('minutosACalcular');
        const resultado = nodeExercise.__get__('resultado');
        expect(resultado).to.equal(minutosACalcular * mbTotales / minutosTotales);
    })


    


})
