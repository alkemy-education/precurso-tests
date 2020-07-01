const path = require('path')
const fs = require('fs')
const cmd = require('child_process')

let testPath = path.join('mocha test')

let testCmd = (dir, file) => path.join(testPath, dir, file)

let dirs = [
    'ciclos',
    'estructuras',
    'funciones',
    'logica',
    'variables',
]

/**
 * Command syntax
 * npm test [dir]:[files]
 * 
 * Run all tests
 * npm test
 * 
 * Run test from specific directory
 * npm test variables
 * 
 * Run test for one specific exercise
 * npm test variables:1
 * 
 * Run test for many specific excercises
 * npm test variables:1,2,3
 * 
 * Run test starting at number X
 * npm test variables:3+
 * 
 * Run test between number A and B
 * npm test variables:3-6
 */

let argument = process.argv[2]

if (argument) {
    var folder
    var files

    if (argument.includes(':')) {
        [folder, files] = argument.split(':')
    }

    console.log(argument, folder, files)
}
else {
    dirs.forEach(dir => {
        console.log('Testing: ' + dir)

        let files = fs.readdirSync(path.join('exercises', dir))

        files.forEach(file => {
            console.log('    Testing exercise: ' + file)

            cmd.exec(testCmd(dir, file), (err, out) => {
                console.log(err, out)
            })
        })
    })
}
