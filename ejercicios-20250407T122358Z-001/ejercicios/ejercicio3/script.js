
/** Ejercicio 3
 * Captura el valor de los inputs del form con querySelector y
 * al hacer click en el boton se guardan los datos en un arreglo
 * y se muestra por consola el nombre completo y la edad del usuario
 * Ejemplo:
 *  Nombre: Juan  Apellido: Perez   Email: pepe@gmail.com
 *  Alert: Tu Nombre completo es: Juan Perez, y tu Email es: pepe@gmail.com
 *  usuario = ["Juan", "Perez", "pepe@gmail.com"]
 *
 *  Pasos:
    * 1. Captura los inputs del form con querySelector
    * 2. Captura el boton con querySelector
    * 3. Agrega un evento Listener que escuche el click del boton    
    * 4. Captura el valor de los inputs y guardalos en variables
    * 5. Valida que los inputs no esten vacios y si lo estan muestra un alerta
    * 6. Si los inputs no estan vacios, guarda los valores en el arreglo usuario
    * 8. Muestra por consola el arreglo usuario
 */

let nombre = document.querySelector('#nombre')
let apellido = document.querySelector('#apellido')
let email = document.querySelector('#email')
let boton = document.querySelector('#boton')

function procesarUsuario (e) {

   e.preventDefault();

   let usuario = []

   let nombreValor = nombre.value ;
   let apellidoValor = apellido.value ;
   let nombreCompleto = nombreValor + "" + apellidoValor;
   let emailValor = email.value ;

   if ( (nombreValor === "") || (apellidoValor === "") || (emailValor === "") ){
   alert ("Ingresa todos los campos")  
   }

   else {
      usuario.push (nombreValor, apellidoValor, emailValor)
      console.log("Arreglo de Usuario", usuario);
      alert ("Nombre completo "+nombreCompleto+" y el Email es:" +emailValor)
   }
}

boton.addEventListener('click', procesarUsuario)
