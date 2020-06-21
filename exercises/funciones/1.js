/*

Vamos a comenzar por lo más sencillo. 
Tu objetivo será crear una función llamada bienvenida para saludar al usuario luego de 
ingresar al sistema. Deberá recibir como parámetros un nombre y un apellido, 
y mostrar en pantalla "Bienvenido ", seguido del nombre y apellido 
(Cuidado con los espacios entre nombre y apellido)

*/

module.exports = {
    saludar: function(nombre, apellido) {
        return console.log('Bienvenido ' + nombre + " " + apellido)
    }
}