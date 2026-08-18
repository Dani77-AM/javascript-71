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

const birthYear = Number(prompt("Ingresa tu fecha de nacimiento"));
let age = 2026 -birthYear
console.log(age);


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


if(age >=18){
    alert("Bienvenido eres mayor de edad");
}else if(age >= 6){
    alert("Felicidades entraste a la primaria");
}else if(age >=1){
    alert("Felicidades sigues en el kinder");
}else {
    alert("estas muy bb no haz nacido");
}   

