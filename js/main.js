/* ////////////Ejercicio; Escribir una función que tome un arreglo de números
 y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6] */

 //Developer mozilla
console.log("Ejercicio 1"
);
let min = Math.min(20,4,5,30,2,0);
let max = Math.max(20,4,5,30,2,0)
console.log(min, max); 

/* EJERCICIO 2: María llega a su entrevista de trabajo para el rol de
Desarrollador Junior y se le pide que resuelva este 
: Dada una lista de números [-1, 3, 4, 2, 6], escribe
una función en javascript para calcular el número más
   pequeño. */
console.log("Ejercicio 2");
   let MinMax = [-1,3,4,2,6].sort();
   console.log(MinMax[0]);

/* Ejercicio #3
Escribir una función que permita saber si un número 
se repite dentro de un arreglo. */
console.log("Ejercicio 3");

 // Caso 1
 console.log("Caso 1");
let repeat = [1, 22, 5, 17, 10, 5, 40, 5].sort(); //.sort es para ordenarlos
// console.log(repeat);
let arreglo = [];
for (let r = 0; r < repeat.length; r++){
    if (arreglo.includes(repeat[r])){
        console.log("TicketMaster duplicado  " + repeat[r]); //si la variable repeatR incluye algo del arreglo "r" que ya esta repetido se imprime el duplicado
    }else{
        arreglo.push(repeat[r]) //elimina los repetidos
    }
}
console.log(arreglo); // se hace un ciclo revisando de menos a mayor y revisa si un numero ya se agregó 
//si se agrego imprime la leyenda, sino lo hay, continua hasta formar uno sin numero repetidos 

//Caso 2
console.log("Caso 2");

let repeatA =  [7, 41, 5, 7, 10, 13, 2].sort(); //.sort es para ordenarlos
// console.log(repeatA);
let arregloA = [];
for (let r = 0; r < repeatA.length; r++){
    if (arregloA.includes(repeatA[r])){
        console.log("TicketMaster duplicado  " + repeatA[r]); //si la variable repeatR incluye algo del arreglo "r" que ya esta repetido se imprime el duplicado
    }else{
        arregloA.push(repeatA[r]) //elimina los repetidos
    }
}
console.log(arregloA);

// CASO 3
console.log("Caso 3");

let repeatB =  [1, 22, 5, 14, 24, 31, 27, 15, 105].sort(); //.sort es para ordenarlos
// console.log(repeatA);
let arregloB = [];
 for (let i = 0; i < repeatB.length; i++){
    if (arregloB.includes(repeatB[i])){
        console.log("TicketMaster duplicado  " + repeatB[i]); //si la variable repeatR incluye algo del arreglo "r" que ya esta repetido se imprime el duplicado
    }else{
        arregloB.push(repeatB[i]) //agrega solo los no repetidos
    } 
}
console.log(arregloB); 

// Ejercicio 4




// Así queda

const array1 = ["a", "b", "c"];
array1.forEach(element => 
    console.log(element));
    
