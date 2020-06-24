const fs = require('fs')
const path = require('path')
const {parse} = require('pseudocode')

/**
 * Shortcut to exercises directory
 */
const srcDir = path.resolve(__dirname, '..', 'exercises')

/**
 * Shortcut to compiled files directory
 */
const compiledDir = path.resolve(__dirname, '..', 'src')

/**
 * Directories to lookup for student solutions
 */
const exercisesDirectories = [
    'ciclos', 
    'estructuras', 
    'funciones', 
    'logica', 
    'variables',
]

/**
 * Walk inside source directory finding files
 * Hidden or sistem files will be ignored and not parsed
 * Every file will be compiled and the result saved on compiled director
 */
exercisesDirectories.forEach(dir => {
    let fullPath = path.join(srcDir, dir)

    fs.readdirSync(fullPath)
        .forEach(file => {
            if (file.startsWith('.')) return

            let code = fs.readFileSync(path.join(fullPath, file), {
                encoding: "utf-8"
            })

            fs.writeFileSync(path.join(compiledDir, dir, file + '.js'), parse(code), {
                flag: 'w'
            })
        })
})
