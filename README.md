# Tests para precurso

## Descargar este repositorio

```
git clone https://github.com/alkemy-education/precurso-tests 
```

## Instalación del entorno

Es necesario tener Node.js instalado en el sistema operativo.

Instalador disponible en: https://nodejs.org/es/

Posteriormente, instalar las dependencias necesarias ejecutando en el terminal

```
npm install
```

La herramienta para la ejecución de tests es Mocha, ejecutar el siguiente comando para instalarla de forma global. Para ello, ejecutar este comando por única vez.

```
npm install mocha -g 
```

## Completando ejercicios

Dentro de la carpeta exercises, hay un archivo por cada ejercicio. Los mismos deben ser compilados para poder ser testeados, por ello, cuando se quieran ejecutar tests sobre los mismos, ejecutar

```
npm run compile
```


## Ejecución de tests 

Para testear los ejercicios, utilizaremos herramienta Mocha ya creada.
Para ello, ejecutar el comando

```
mocha test/unidad/numeroEjercicio
```

Por ejemplo

```
mocha test/variables/1
mocha test/funciones/1
```


