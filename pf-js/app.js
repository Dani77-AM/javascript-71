/**
 * Condicionales
 * Serie de condiciones para que algo suceda
 * 
 * En programacion para el manejo de estas condiciones tenemos
 * 
 * ! el bloque if else
 * ? bloque if pregunta por una condicion en caso de que esta condcion sea verdadera ejecuta un bloque de código , en caso de falso no ejecuta nada else maneja la ejecución de código en caso negativo  
 * 
 * Lo que se coloca dentro del if, debe ser algo que genere
 * 
 * * Un valor True o False(Tipo  de dato boolean)
 * 
 * 
 *
 * 
 */

/* Convertir de texto a numero 

!Importante

si se trata de convertir algo que no es un numero
como resultado obtendremos NaN (not a number)

*/

/*const birthYear = Number(prompt("Ingresa tu fecha de nacimiento"));
let age = 2026 -birthYear
console.log(age); */


/**
 * todo: operadors lógicos
 * sirven para hacer operaciones cuyo resultado es   verdadero o Falso
 * 
 * 
 * Mayor que >
 * == es el simbolo de igualdad en programacion
 * 2 > 1 == Verdadero
 * 1 > 2 == Falso
 * 0 > 0 == Falso
 * 
 * 
 * Menor que <
 * 2 < 1 == Falso 
 * 3 > 5 == Verdadero
 * 2 < 2 == Falso
 * 
 * Comparador de igualdad==
 * 2 == 2  == verdadero
 * 3 == 1  == Falso
 * 
 * 
 * Mayor o igual que >=
 * 2 >= 2 == verdadero
 * 2 >= 1 == verdadero
 * 2 >=3 == Falso
 *
 * Menor o igual que <=
 * 4 <= 4 == Verdadero
 * 4 <= 5 == verdadero
 * 7 <= 5 == Falso
 * 
 * 
 * Diferente de !=
 * 5 != 4 == True
 * 5 != 5 == False
 * 99!= 100 == True
 *
 * 
 * Negacion(not) ! invertir el valor de un booleano T o F
 * !verdadero == False
 * !Falso == Verdadero
 * 
 * !(4 <= 4) == false
 * 
 * AND && Es un operador que devuelve
 * ? verdadero solo si ambos lados de la ecpresión  son verdadero, 
 * ?si un lado es flaso todo el resultado se vuelve falso 
 *
 * Verdadero && verdadero == V
 * Verdadero && falso == f
 * Falso && verdadero == f
 * 
 * age >=6 && age <=12
 * age 7 == verdadero
 * age 15 == falso
 * age 5 == falso
 * 
 * 
 * 
 * OR ||| Es un operador que devuelve
 * 
 * ? Falso si ambos lados de la expresion son Falso
 * ? Si un lado de la expresion es verdadero devuelve verdadero
 * 
 * Verdadero || Falso == Verdadero
 * Falso || verdadero == Falso
 * Falso || Falso == Falso
 * 
 * 
 * 
 * Age > 20 || age <100
 * 
 * age 101 == verdadero
 * 
 * age 18 == verdadero
 * 
 *  
 *  
 * En los parenteis va la condición que se va a evaluar dentro de las llaves va el código que se va ejecutar en caso de que la condicion sea verdadero
 * 
 * ?else if 
 * Nos permite evaluar mas de una condicion va asociado a un if  
 * 
 * 
 * 
 */


/*if(age >=18){
    alert("Bienvenido eres mayor de edad");
}else if(age >= 6){
    alert("Felicidades entraste a la primaria");
}else if(age >=1){
    alert("Felicidades sigues en el kinder");
}else {
    alert("estas muy bb no haz nacido");
} */ 


/*Uso de swithc*/


/*let pais = prompt("Ingresa un país:");

// 1. Limpiamos el texto antes de evaluar
pais = pais
  .toLowerCase()                             // Todo a minúsculas
  .trim()                                    // Quita espacios vacíos al inicio/final
  .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // ¡Quita los acentos automáticamente!

switch (pais) {
  case "mexico": // Ya no lleva acento en el "case"
    alert("¡Viva México! Capital: Ciudad de México.");
    break;

  case "espana": // "españa" se convierte en "espana" por la limpieza
    alert("¡Hola! Capital: Madrid.");
    break;

  case "argentina":
    alert("¡Che! Capital: Buenos Aires.");
    break;

  case "colombia":
    alert("¡Qué más! Capital: Bogotá.");
    break;

  case "chile":
    alert("¡Sipo! Capital: Santiago.");
    break;

  default:
    alert("Ese país no está en la lista de los 5 permitidos.");
    break;
}*/

/** Loops */

/** While */

/**
 * While
 * Es loop que se ejecuta mientras una condicion sea verdadera
 * En cuanto esta condicion se vuelve falsa para
 * !Importante
 * ! Necesita un contador externo o una forma de parar
 * ! No olvidar actualizar el contador
 * ! Puedes Generar un bucle infinito
 */

/*
//1. Contador
let counter = 0;

//2. Iniciamos el bucle

while(counter  <=100){
    console.log(counter);
    counter = counter +1; 

} */
/*
counter = 1;

while(counter <200){
    if (counter % 2 == 0){
        console.log(`El numero  ${counter} es par`);  
    } else {
     console.log(`El numero ${counter}  es impar`);
    }

//operador de incremento suma 1 a el valor de la variable 
    counter ++;
} */


/**
 * do while
 * !El bucle do while, siempre se ejecuta por lo menos una vez
 * al ejecutar primero y luego evaluar
 * Te permite tener una ejecucion garantizada
 * 
 * !necesita un contador externo
 * !no debemos olvidar actualizar dicho contador
 */


 /*let counter  = 200;
 do{
    console.log("Hola");
    console.log(counter);
    // operador de suma y asignación
    counter +=1;

 } while (counter <=100);
*/

/*counter = 1;

do{
    if(counter % 2 == 0){
    console.log(`El numero ${counter} es par`);   
} else {
    console.log(`El numero ${counter} es impar`);
}
counter++;
} while(counter <200);
*/

/*

let numero = parseInt(prompt("Ingresa un numero positivo:"));

while(numero <=0  || isNaN(numero)){
    alert(`El numero ingresado no es positivo`);

numero = parseInt(prompt("Intentalo de nuevo: Ingresa un numero positivo"));


}

document.write(`<h1>El numero ingresado es: ${numero}</h1>`);
*/


/**
 * For Loop
 * Estructura de datos Array
 * 
 * 
 * Son estructuras que nos ayudan a agrupar y/o ordenar datos
 * Dato no representa nada por si solo 
 * Datos juntos y dandoles contexto se vuelve información  
 * Para manipular estos datos de manera mas eficiente
 * 
 * * Array
 * Estructura de datos ordenada
 * 
 * 
 *!importante
 * Los datos se identifican pir un idnce empiezar a contar desde 0 
 * el tamaño real se cuenta desde el 1 
 *
 * !importate pero particular de js
 * Podemos guardar culaquier tipo de dato dentro del array, incuso combibinaciones 
 * 
 *  Tiene tamaño dinamico
 * 
 * 
 * */
 
/*
//DEFINICION DE UN ARRAY 
const arrayVacio= [];

const arrayContendido = ["Daniel", 31, true];*/


// function expression

/*const getTriangleArea = function(base, height){
    return (base * height) / 2;
};

let area = getTriangleArea(20, 24);
console.log(`El area del triangulo de base 20 y altura 24 es: ${area}`);*/

//function expression

/*const muestraparoimpar = function(numeromaximo){
    for (let i = 1; i <= numeromaximo; i++){
    if(i % 5 == 0){
        console.log(`El numero ${i} es divisible entre cinco`);
    } else {
        console.log(`El numero ${i} no es divisible entre cinco`);
    }        
 } 

};

muestraparoimpar(90);*/


// Arrow Functions

/**
 *Funciones flecha
 * !IMPORTANTE
 * Return  implicito
 * Quiere decir que si la funcion se puede escribir en una sola linea sin
 * necesidad de llaves, no es necesario poner la palabra
 * return, la expresion a la que apunte la flecha sera retornada de manera implicita
 *
 * Expresiones lambda
 *    */ 

 /*const addTwoNumbers = (a, b) => a + b;
 let result = addTwoNumbers(5, 10);
 console.log(`El resultado de la suma es: ${result}`);  
 
const evenorOdd = (limit) => {
    let total = 0;
    for (let i = 1; i <= limit; i++){
        if(i % 2 == 0){
            console.log(`El numero ${i} es par`);
        } else {
            console.log(`El numero ${i} es impar`);
        }
        total+=i;
    }
    return total;
}

console.log(evenorOdd(100)); */


/**
 * 
 * Diferencias
 * Hoisting 
 * Es un proceso por el cual las function declaration
 * y las variables con var, pasan a estar hasta arriba
 * en el proceso de ejecución
 * Function Expression y Arrow Functions no pasan por este proceso
 */


/*console.log("Function declaration" + multiplyNumbers(5, 10));// Esto funciona porque multiplyNumber es una function declaration

const addNumber = function(a, b){
    return a + b;
};

const divideNumberArrow = (a, b) => a / b;

function multiplyNumbers(a, b){
    return a * b;
}   

console.log(divideNumberArrow(10,2)); // Esto no funciona porque divideNumbers es una arrow function y no pasa por el proceso de hoisting
*/


/*const jugarAdivinanza = function() {
    // Definimos el número secreto (por ejemplo, el 7)
    const numeroSecreto = 7;
    
    // El usuario tiene un máximo de 3 intentos
    const maxIntentos = 3;
    
    let intentoActual = 1;
    let adivino = false;

    // Usamos un bucle while para controlar los intentos
    while (intentoActual <= maxIntentos) {
        // Pedimos el número al usuario y lo convertimos a entero
        let suposicion = parseInt(prompt(`Intento ${intentoActual} de ${maxIntentos}: Adivina el número secreto:`));

        // Condicionales para evaluar la respuesta
        if (suposicion === numeroSecreto) {
            console.log("🎉 ¡Felicidades! Has adivinado el número secreto.");
            adivino = true;
            break; // Rompe el bucle de inmediato porque ya ganó
        } else {
            console.log(`❌ Número incorrecto.`);
            
            // Pistas: si es mayor o menor (solo si le quedan intentos)
            if (intentoActual < maxIntentos) {
                if (numeroSecreto > suposicion) {
                    console.log("💡 Pista: El número secreto es mayor.");
                } else {
                    console.log("💡 Pista: El número secreto es menor.");
                }
            }
        }

        intentoActual++; // Sumamos un intento usado
    }

    // Si gastó los 3 intentos y no adivinó
    if (!adivino) {
        console.log(`💀 Game Over. El número secreto era el ${numeroSecreto}.`);
    }
};

// Ejecutamos la función (no requiere parámetros ni retorna nada)
jugarAdivinanza(); */


/**
 * Callbacks 
 * Es una funcion que se pasa como argumento a otra funcion
 * para ser ejecutada en el momento que la funcion que la recibe el callback lo decida.
 * 
 * 
 * ? funciones ciudadanos de primera clase
 * 
 * todas las funciones son tratadas como si fueran un valor.
 *  
 * 
 * 
 * 
 */


/*function procesarPago(nombreCliente,callback, cuenta) {
   const saldoAPagar = callback(cuenta);
   console.log(`El cliente ${nombreCliente} debe pagar: 
    ${saldoAPagar} 
    despues de impuestos`);
} 

/**
 * Opciones para la funcion de callback 
 * 1 . crear una funcion aprte y luego mandarla como argumento
 * 2. crear una funcion anonima dentro de los parentesis de la funcion y tro con arrow function
 * 
 * 
 */

/*function addIVA(cuenta) {
    return cuenta * 1.16;
}

procesarPago("Daniel", addIVA, 1000); // El cliente Daniel debe pagar: 1160 despues de impuestos


//procesar pago con function anonima, 2 ejemplos uno con funcion y otro con arrow function

console.log("--------- Callback con funcion anonima ---------");
procesarPago(
    "Carlos",
    function(cuenta) {
      return cuenta * 1.2;
  }, 
 2000,);

console.log("--------- Callback con arrow function ---------");
procesarPago(
    "Ana",
    (cuenta) => cuenta * 1.3, 
    2000);
*/

const numeros = [ 42, 7, 91, 18, 63, 25, 84, 3, 56, 71, 12, 97, 34, 68, 9, 45, 77, 21, 60, 5,
                 88, 31, 14, 73, 49, 2, 95, 38, 66, 27, 81, 10, 54, 92, 16, 69, 33, 76, 24, 58,
                1, 87, 40, 65, 19, 99, 52, 29, 74, 6, 83, 35, 11, 57, 90, 23, 47, 79, 4, 61, 
                98, 26, 70, 13, 85, 32, 55, 8, 93, 41, 64, 17, 72, 28, 50, 96, 20, 67, 36, 82,
                15, 59, 94, 30, 75, 22, 48, 86, 39, 62, 100, 44, 78, 53, 89, 37, 51, 80, 43, 
                46, 132, 107, 191, 118, 163, 125, 184, 103, 156, 171, 112, 197, 134, 168, 109,
                145, 177, 121, 160, 105, 188, 131, 114, 173, 149, 102, 195, 138, 166, 127, 181, 
                110, 154, 192, 116, 169, 133, 176, 124, 158, 101, 187, 140, 165, 119, 199, 152,
                129, 174, 106, 183, 135, 111, 157, 190, 123, 147, 179, 104, 161, 198, 126, 170,
                113, 185, 130, 155, 108, 193, 141, 164, 117, 172, 128, 150, 196, 120, 167, 136,
                182, 115, 159, 194, 122, 175, 142, 148, 186, 139, 162, 200, 144, 178, 153, 189,
                137, 151, 180, 143, 146 
            ];

            for (const numero of numeros) {
                console.log(`El numero es ${numero}`);
            }


            //for each

            /*numeros.forEach (function(numero,index,array){
                console.log(
                    `El numero es ${numero} y su indice es ${index} mas dos  es ${numero + 2}`,
                );
                console.log("El array original es" + array);
                return numero + 2;
            });  */


        // maps ejecuta una funcion sobre cada elemento de un array
        // y devuelve un nuevo array con el 
        // para este ejemplo se usa la matriz de arriaba        
        /*function multiplyby3(numero){
            return numero * 3;
        }

        const numeroxTres = numeros.map(multiplyby3);
        console.log(numeroxTres);
        
        const numeroxCuatro = numeros.map((numero) => numero * 4);
        console.log(numeroxCuatro); */

//filter sirve para filtar elementos de un array
// recibe una funcion de callback donde lo que retornemos debe 
// ser una expresión boolean. y los elementos del arrayque cumplan
// con la condición se agregaran a un nuevo array que es el que devuelve filter
// se utliza la matriz de arriba


const pares = numeros.filter(function(numero){
    return numero % 2 == 0;
});

console.log(pares);

const multiplosde3 = numeros.filter(function(numero){
    return numero % 3 == 0;
});

console.log(multiplosde3);


// agregar iva a cada elemento del array de numeros
// usando map
// pero con una funcion externa


const agregarIVA = function(numero){
    return numero * 1.16;
}

const preciosConIVA = numeros.map(agregarIVA);
console.log(preciosConIVA);



