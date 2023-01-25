// TIPOS DE DATOS PRIMITIVOS


// 1 BYTE = 8 bits
// INTEGER
let entero = 5;

//String
// regex 
let string1 = "CADENA DE CARACTERES";

//CHAR
let char1= 'c';

//BOOLEAN
let boolean1 = true;


let boolean2 = false;

//Array
let array1 = [34,35,25,22];

// longitud - 1;

console.log(array1.length)

console.log(array1[1]);

// Iteración

for( let edad of array1){
    if (edad === 22){
        console.log("LA EDAD DE ELIEZER ESTA EN LA POSICION:")
        console.log(array1.indexOf(edad))
    }
}

array1.forEach( (edad)=>{
    if (edad === 22){
        console.log("LA EDAD DE ELIEZER ESTA EN LA POSICION:")
        console.log(array1.indexOf(edad))
    }
})

// DICCIONARIOS -> JSON

let persona1 = {
    'nombre': "Eliezer", 
    'edad': 22,
    'pais': 'Venezuela'
}

let persona2 = {
    'nombre': "Yeni",
    'edad': 34,
    'pais': 'Argentina'
}


let array2 = [persona1,persona2]

array2.forEach( (persona)=>{
    if (persona.nombre === "Eliezer"){
        console.log("LA EDAD DE " + persona.nombre.toLowerCase() + " ES:")
        console.log(persona.edad)
    }
})


//CLASES


class Persona{
    constructor(nombre,edad,pais){
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }
}
