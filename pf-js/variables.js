/**
 * En javascript hay 3 formas de declarar variables
 * !Existe una forma que ya no se recomienda su uso
 * !var
 * Al proceso de crear una variable y darle un valor se le llama asignacion
 * 
 * Las variables que pueden ser reasignadas (pueden cambiar en un futuro el valor que tienen) se declaran:
 * 
 * ? let nombreVariable = valor;
 * 
 *  *el operador = se conoce como operador de asignación
 * Una vez creada una variable podemo usarla en otros lugares del código utilizando su nombre. Las variables al ser utlizadas no van entre ""
 * 
 * Las variables que no pueden ser reasignadas su valor no puede cambiar 
 * 
 * se declaran:
 * 
 * ?
 * 
 * Palabras reservadas: Son palabras que utliza lp y si intentamos usarlas en otros lados pueden generar errores.
 */


let nombre ="Daniel";//tipo string
let name  = "Alejandro"
console.log(nombre);
console.log(name);
const birthYear =1993; //tipo numero 
console.log(birthYear)

/* Reasignando una variable (cambiando el valor que tiene cuando reasignamos una variable (una variable ya creada))
! Ya no es necesatio poner let
*/

nombre = "Brenfer"
console.log(nombre);
console.log(name);

/**Seccion prueba 
 *
 *  
 * birthYear = 1995;
 */
/**
 *  Concatenar
 *  Nos permite el valor de una variable a un texto 
 * 
 */

console.log(
    "Hola soy " +
    nombre +
    " y estoy en gen con " +
    name +
    " naci en el año " +
    birthYear

)






