
const figlet = require('figlet');
const chalk = require('chalk')
const term = require( 'terminal-kit' ).terminal 
const Mocha = require('mocha');
const exercisesData = require('./exercises');

module.exports = {
    showWelcomeMessage: () => {
        console.log(
            chalk.bgWhite.blueBright(
              figlet.textSync('Alkemy', { horizontalLayout: 'full' })
            )
          );
    },
    showResultAndFinishOptions: function (failures) {
        if(failures) {
            term.red('Ups, El ejercicio no pasó los tests')
        }else{
            term.green('FELICITACIONES! El ejercicio pasó los tests correctamente')
        }
        term.singleColumnMenu( ['Volver al inicio', 'Cerrar'], (error, response) => {
            if(response.selectedIndex) {
                return process.exit() ;

            }
            return this.showContentGroupItems()

        })

    },
    showContentGroupItems: function() {
        const self = this;
        term.bgWhite.bold.blue( 'BIENVENIDO A ALKEMY CHALLENGE\n' ) ;
        term.bgWhite.bold.blue( 'SELECCIONAR UNIDAD PARA EJECUTAR TESTS\n' ) ;
        var items = exercisesData.map((e) => e.terminalName)
        term.singleColumnMenu( items , function( error , response ) {
            if(error) {
                return process.exit()
            }
            return self.showExercisesSelectFromContentGroupItem(response.selectedText)
        } );
    },
    showExercisesSelectFromContentGroupItem: function(contentGroupItem) {
        const self = this;
        const elementToUse = exercisesData.find((e) => e.terminalName == contentGroupItem);
        const allowedExercises = [];
        term.bgWhite.bold.blue( 'Ejercicios disponibles para la unidad ' + elementToUse.terminalName + '\n' ) ;
        for (let index = 0; index < elementToUse.exercisesAmmount; index++) {
            allowedExercises[index] = "Ejercicio " + (index + 1);
        }
        term.singleColumnMenu( allowedExercises); 
        term.singleColumnMenu( allowedExercises , function( error , response ) {
            if(error) {
                return process.exit()
            }
            return self.runTestsFromSelectedSource(elementToUse.folder, (response.selectedIndex + 1))
        } );
    },
    runTestsFromSelectedSource: function (contentFolder, exerciseNumber) {
        const self = this;
        const mocha = new Mocha();
        mocha.cleanReferencesAfterRun(false);
        mocha.addFile(`test/${contentFolder}/${exerciseNumber}`);
       try {
        mocha.run(function(failures)  {
            mocha.unloadFiles();
            self.showResultAndFinishOptions(failures)
        })
       } catch (error) {
           console.log(error)
        term.red('Ocurrió un error procesando el ejercicio')
        term.singleColumnMenu( ['Volver al inicio', 'Cerrar'], (error, response) => {
            if(response.selectedIndex) {
                return process.exit() ;
            }
            return this.showContentGroupItems()
        })
       }
      
    }
    

  


}