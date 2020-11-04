// los arrays no son primitivos, o sea no guardan su lugar en la memoria

// Manera larga de hacer una copia segura para un array
// const numeros = [10, 5, 2, 8]

// const copiaDeNumeros = []

// console.log(numeros)
// console.log(copiaDeNumeros)

// for (let numero of numeros) {
//     copiaDeNumeros.push(numero)  // push sirve para agregar algo a un array al final
// }

// console.log(numeros)
// console.log(copiaDeNumeros)

// copiaDeNumeros[0] = 88888

// console.log(numeros)
// console.log(copiaDeNumeros)


// // Manera corta de hacer una copia segura para un array

const numeros = [10, 5, 2, 8]
const copiaDeNumeros = [ ...numeros ] // los tres puntos es lo mismo que hacer el for anterior

copiaDeNumeros[0] = 88888

console.log(numeros)
console.log(copiaDeNumeros)


// ejemplo de acumuladora

const original = document.querySelector("#original")
const mayusculas = document.querySelector("#mayusculas")

const nombre1 = prompt("decime un nombre")
const nombre2 = prompt("decime otro nombre")
const nombre3 = prompt("decime otro nombre mas")

const nombres = []
nombres.push(nombre1)
nombres.push(nombre2)
nombres.push(nombre3)

console.log(nombres)

let acumuladora = ""
for (let i = 0; i < nombres.length; i++) {
    acumuladora += `<li>${nombres[i]}</li>`    
}

original.innerHTML = acumuladora


// para hacer copia segura:

const nombresEnMay = [...nombres]

for (let i = 0; i < nombresEnMay.length; i++) {
    nombresEnMay[i] = nombresEnMay[i].toUpperCase()
    
}

acumuladora = ""
for (let i = 0; i < nombresEnMay.length; i++) {
    acumuladora += `<li>${nombresEnMay[i]}</li>`    
}

mayusculas.innerHTML = acumuladora



// METODOS DE ARRAYS 

const nombresDiv = document.getElementById("nombres")

// const primeraLetra = string.charAt(0)
// sintaxis de metodos
// nombreDeLaVariable.nombreDelMetodo(parametroOptativo)

const nombresArray = ["Appa", "Ana", "Elsa", "Olaf"]

//push 
nombresArray.push("Steven")
console.log(nombresArray)


//unshift   // Agrega al principio del array

nombresArray.unshift("Steven")
console.log(nombresArray)

// shift   // saca el primer elemento del array

nombresArray.shift()  // no lleva parametro
console.log(nombresArray)

// pop   // saca el ultimo elemento del array

nombresArray.pop()  // no lleva parametro
console.log(nombresArray)

// slice   // retorna elementos seleccionados de un array como un nuevo array, NO modifica el array
 
nombresArray.slice(0, 2) // solo retorna lo que hay en el medio de estos dos, no inclusivo, si no pongo el numero de finalizacion, muestra todo desde el numero de inicio No inclusivo hasta el final
console.log(nombresArray)

// splice 

nombresArray.splice(2, 2) // es como decirle: en la posicion 2, borra los 2 que sigan, si no le pasamos cuantos hay que borrar, borra hasta el final
nombresArray.splice(2, 2, "hola") // es como decirle que desde la posicion 2, borre 2 y agregue "hola"
console.log(nombresArray)

// join
const arrayUnido = nombresArray.join(", ") // pongo la coma o lo q sea de parametro para separarlos / recibe un array y retorna un string 
console.log(arrayUnido)

// para hacer una lista de html a partir de un array
nombresDiv.innerHTML = `<ul class="rojo"><li>` + nombresArray.join("</li><li>") + `</li></ul>`

// concat 
// no modifica los arrays originales, retorna un nuevo array
const numeros1 = [1, 2, 3, 4]
const numeros2 = [1, 2, 3, 4]

const arraysUnidos = numeros1.concat(numeros2)
console.log(arraysUnidos)

// includes 
// busca si el elemento pasado como parametro esta dentro del array, pero no modifica el original, retorna true o false

console.log(nombresArray.includes("Steven"))

//sort 
// modifica el array original, los ordena alfabeticamente, NO SIRVE PARA NUMEROS
nombresArray.sort()
console.log(nombresArray)



// EJERCITACION

// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
// invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
// invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'


const invertirCaso = (string) => {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i])
    }
} 

invertirCaso("Ada Lovelace")