
// Cambiar los Atributos de los elementos del DOM

/**
 * 1. Seleccionar el elemento h1 con querySelector
 * 2. Cambiar el titulo por "Hola Mundo"
 * 3. Ver el efecto en el navegador
 */
const h1 = document.querySelector("h1")
h1.innerHTML = "Hola Mundo" 

// Cambiar el atributo src de la imagen
/**
 * 1. Seleccionar la imagen con querySelector
 * 2. Cambiar su atributo src por "imagen/carita.png"
 * 3. Ver el efecto en el navegador
 */
let imagen1 = document.querySelector("img")
console.log(imagen1);
imagen1.src = "imagen/carita.png"
imagen1.setAttribute('src','imagen/carita.png')

// Cambiar la clase del div
/**
 * 1. Seleccionar el div main-div con querySelector
 * 2. Cambiar su clase por "new-div"
 * 3. Ver el efecto en el navegador
 */

let div = document.querySelector(".main-div")
console.log(div.className);
div.className = "new-div" 

// Cambiar el atributo href del enlace
/**
 * 1. Seleccionar el enlace con querySelector usando su id
 * 2. Mostrar su contenido en consola
 * 3. Mostrar el contenido de su atributo href por consola con getAttribute
 * 2. Cambiar su atributo href por "https://www.icesi.edu.co"
 * 3. Cambiar su texto por "Universidad Icesi"
 * 4. Cambiar su atributo target por "_blank"
 * 5. Cambiar su clase por "boton"
 * 6. Ver el efecto en el navegador
 * 7. Eliminar la clase del enlace
 * 8. Ver el efecto en el navegador
 */
let enlace = document.querySelector("#enlace")
console.log(enlace);
let atributo =enlace.getAttribute("href")
console.log(atributo);
enlace.setAttribute("href", "https://www.icesi.edu.co")
enlace.innerText = "Universidad Icesi"
enlace.setAttribute("target", "_blank")
enlace.setAttribute("class", "boton") 
enlace.removeAttribute("class")

// Cambiar el estilo del div
/**
 * 1. Seleccionar el div new-div con querySelector
 * 2. Cambiar su estilo por:
 *    - background-color: red
 *    - color: white
 *    - font-size: 30px
 *    - font-family: Arial
 *    - text-align: center
 *    - padding: 20px
 *    - border-radius: 10px
 * 3. Ver el efecto en el navegador
 */

let div1 = document.querySelector(".new-div")
div1.style.backgroundColor = "green"
div1.style.color = "white"
div1.style.fontSize = "30px"
div1.style.fontFamily = "Arial" 
div1.style.textAlign = "center"
div1.style.padding = "20px"
div1.style.borderRadius = "10px"


