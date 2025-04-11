
//  Ejercicio 1 - Seleccionar elementos del DOM

/**
 * 1. Seleccionar el elemento por su id "titulo"
 * 2. Mostrar su contenido en consola
 */
let t = document.getElementById("titulo")
console.log(t.innerHTML)

/**
 * 1. Seleccionar el div por su clase main-div 
 * 2. Mostrar su contenido en consola
 * 3. Mostrar su contenido en consola con innerHTML
 * 4. Mostrar su contenido en consola con innerText
 */
const div = document.getElementsByClassName("main-div")
console.log(div);
console.log(div[0].innerHTML);
console.log(div[0].innerText);

// Por etiqueta
/**
 * 1. Seleccionar el elemento por su etiqueta "img"
 * 2. Mostrar su contenido en consola
 * 3. Mostrar el contenido de los atributos src y alt por consola
 */
const imagen = document.getElementsByTagName("img")
console.log(imagen);
console.log(imagen[0].src);
console.log(imagen[0].alt);

// Por querySelector
/**
 * 1. Seleccionar el elemento por su id "titulo"
 * 2. Mostrar su contenido en consola
 * 3. Seleccionar el div por su clase main-div 
 * 4. Mostrar su contenido en consola
 * 5. Seleccionar el elemento por su etiqueta "img"
 * 6. Mostrar su contenido en consola
 * 7. Mostrar el contenido de los atributos src y alt por consola
 */
const titulo = document.querySelector("#titulo")
console.log(titulo.innerText);

const div2 = document.querySelector(".main-div")
console.log(div2.innerText);

const imagen2 = document.querySelector("img")
console.log(imagen2.src);   
console.log(imagen2.alt);

