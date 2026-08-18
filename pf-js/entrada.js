/**
 * Prompt:
 * 1.Hay que asignar su uso a una variable para luego poder usar el valor que ingreso el usuario
 *  1.2 Usar el valor inmediatamente
 * ! Importante
 * 1. No se recomienda su uso en aplicaciones en produccion
 * 2. Bloque el codigo,esto quiere decir que el codigo que este debajo de donde escribimos el uso de prompt no se va a ejecutar, hasta que el usuario ingrese algo
 *3. No se puede personalizar 
 *4. todo lo que ingresa como prompt siemore es string
 * 
* Nota \n es un caracter que nos inserta un salto de linea
 * 
 * 
 */

 /**const edad = prompt("Ingresa tu edad",31);
 const nombre = prompt("Ingresa tu nombre");
 console.log(edad);
 console.log("Hola soy " + nombre + "\ny tengo " + edad + " años");
 alert("Hola soy" + nombre + " y tengo " + edad + "años");*/

const serie = prompt("¿Cuál es tu serie o película favorita?");
const personaje = prompt("¿Cuál es tu personaje favorito de " + serie + "?");
const razon = prompt("¿Por qué " + personaje + " es tu favorito?");

console.log(serie);
console.log(personaje);
console.log(razon);

alert("En la serie " + serie + " sale el personaje " + personaje + " y es mi favorito por " + razon);



