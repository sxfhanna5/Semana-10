
const digimones = [

    "https://digimon.shadowsmith.com/img/koromon.jpg",
    "https://digimon.shadowsmith.com/img/tsunomon.jpg",
    "https://digimon.shadowsmith.com/img/yokomon.jpg",
    "https://digimon.shadowsmith.com/img/motimon.jpg",
    "https://digimon.shadowsmith.com/img/patamon.jpg",
    "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
    "https://digimon.shadowsmith.com/img/greymon.jpg",
    "https://digimon.shadowsmith.com/img/tanemon.jpg",
];


/** PASOS:
 * 1.	Seleccionamos el contenedor “galeria” donde vamos a insertar los Digimones
 * 2.	Recorrer el arreglo que contiene la URL de cada Digimon for of
 * 3.	Crea un div para cada Digimon y adicionarle la clase “digimon” para que tome los estilos del CSS.
 * 4.	Crea una etiqueta <img> con la ruta del digimon actual, y agregarlo al ‘div’ creado en el punto anterior.
 * 5.	Creamos un botón con el texto “Eliminar Digimon” y se lo agregamos al div.
 * 6.	Agregamos todo el div completo (que contiene la imagen y el botón) al contenedor principal #galeria.
 **/

let galeria = document.querySelector('#galeria')

for (const digimon of digimones){
let div = document.createElement('div')
div.className = 'digimon'
let imagen = document.createElement('img')
imagen.setAttribute('src',digimon)
div.appendChild(imagen)
let boton = document.createElement('button')
boton.innerText = "Eliminar Digimon"
boton.addEventListener('click', function (e){
    let elemento = e.target.parentElement
    elemento.remove()
    
})
div.appendChild(boton)
galeria.appendChild(div)
}

