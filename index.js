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


// while
// Estructura de repeticion 
// El codigo dentro del while se ejecuta siempre y cuando la condicion sea verdadera

let numero = 0
while (numero > 10) {
  console.log(numero)
  numero++ // hay que poner ++ porque si no no cambia el numero
}

//asi mostramos la tabla del nueve
let numero = 9
while (numero <= 90) {
  console.log(numero) 
  numero += 9
}

// el for y el while son parecidos. 


// do / while 
// se ejecuta siempre al menos una vez sin importar si la condicion es falsa
//ejemplo:
do {
  console.log(numero)
  numero++
}
while (numero < 3)



// EJERCITACION

// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.



// podemos recorrer un string como recorremos un array
// letra.toUpperCase() === letra
// convertir mayus a minus y vicerversa

// ahora puedo:
// 1 crear un string nuevo con mayus y minus invertidas
// 2 modificar el string que recibi

const invertirCaso = (string) => {
  let nuevoString = ''
  for (let i = 0; i < string.length; i++) {
  if (string[i].toUpperCase() === string[i]) {
    nuevoString += string[i].toLowerCase()
    // es equivalente a
    // nuevoString = nuevoString + string[i].toLowerCase()
    }
    else {
      nuevoString += string[i].toUpperCase()
    }
  }
  return nuevoString
}
// otra opcion:
const invertirCaso = string => {
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === string[i]) {
      string[i] = string[i].toLowerCase();
    } else {
      string[i] = string[i].toUpperCase();
    }
  }
  return string;
};

console.log(invertirCaso('Ada Lovelace')); // 'aDA lOVELACE'
console.log(invertirCaso('feliz cumple')); // 'FELIZ CUMPLE'
console.log(invertirCaso('jAvAsCrIpT')); // 'JaVaScRiPt'




// Crear una funci´ón contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

const contiene = (num, array) => {
    if (array.includes(num)) {
        return true;
    } else {
        return false;
    }
};

const contieneMejorado = (num, array) => {
    return (array.includes(num))
}

// contieneMejorado es igual a "contiene", pero mas avanzado

const contiene2 = (num, array) => {
    for (let i = 0; i < array.length; i++) {
        if (num === array[i]) {
            return true
            // la unica manera en la que entramos a este if es si num es igual a uno de los elementos del array
        }
        
    }
    // llegamos a este momento del codigo solo si no hay un numero === array[i]
    return false
}

// contiene y contiene2 son equivalentes
//el metodo includes equivale al for

console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])) // true
console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])) // false



// Crear una función ganar que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

const ganar = (array) => {
    if (array[0] === array[1] && array[1] === array[2] && array[2] === array[3] && array[3] === array[4]) {
        return true
    }
    else {
        return false
    }
}


console.log(ganar(['⭐️', '⭐️', '⭐️', '💫', '✨'])) // false
console.log(ganar(['💫', '💫', '💫', '💫', '💫'])) // true
console.log(ganar(['💫', '💫', '💫', '💫', '💫', '⭐️'])) // true



// Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

// sabiendo el indice de sam, fijarme si frodo esta antes o despues
// fijarme si el indice de frodo  + 1 o  - 1 es igual al de sam 

const estanJuntos = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Sam") {
      // array[i]
      // i es el lugar donde esta Sam 
      // i + 1 e i - 1
      if (array[i + 1] === "Frodo" || array[i - 1] === "Frodo") {
        return true
      }
    } 
 }
  return false
}

console.log(estanJuntos(['Sam', 'Frodo', 'Legolas'])) //true
console.log(estanJuntos(['Aragorn', 'Frodo', 'Frodo'])) //false
console.log(estanJuntos(['Sam', 'Orco', 'Frodo'])) //false






let continuarPrograma = true

while (continuarPrograma) {
  let respuestaUsuario = prompt("Diga cuanto tardo la vuelta")
  let confirmar = confirm("Hay alguna vuelta pendiente?")

  console.log(respuestaUsuario)

  if (confirmar === false) {
    continuarPrograma = false 
  }

}