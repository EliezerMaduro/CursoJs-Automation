let variable1;


variable1 = 0;


let variable2 = 1;


let variable3 = 56498748748541;


const CONSTANT1 = "Esta es mi constante :)))))";


let par = 6;

let impar = 5;

if (impar%2==0){
    console.log("ESTE ES UN NUMERO PAR");
    console.log(Math.pow(par,2));
}else {
    console.log("ESTE NO ES UN NUMERO PAR")
}

function hola(){
    console.log("ENTRE EN LA FUNCION")
    return 5;
}

hola();

let sumad = hola();

let fruta = "FRESA";

if (fruta.toLowerCase() === "pera"){

    console.log("HAS JUGO DE PERA");

}else if (fruta.toLowerCase() === "manzana") {
    
    console.log("HAS JUGO DE MANZANA");

}else if (fruta.toLowerCase() === "durazno"){
    
    console.log("HAS JUGO DE DURAZNO");

}else{
    
    console.log("SOY CUALQUIER OTRA FRUTA MENOS LAS QUE ESTAN ARRIBA");

}


function suma(a,b){
    console.log("VOY A HACER UNA SUMA");
    return a + b;
}

console.log("EL RESULTADO DE LA SUMA ES:");
console.log(suma(5,10));