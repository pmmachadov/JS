//Sea un tipo de objeto Usuario provisto de dos propiedades: usuario y clave que
// define además un método comprobarClave() que recibe dos parámetros
// (usuario y clave) y devuelve un valor cierto si ambos coinciden con el nombre
// del usuario y su contraseña:
//
//     <script>
//         function Usuario(_usuario, _clave) {
//             this.usuario = _usuario;
//             this.clave = _clave;
//             this.comprobarUsuario = function (_usu, _cla) {
//                 if (this.usuario == _usu && this.clave == _cla) {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             };
//         }
//     </script>
// Crea una página que cree a su vez un objeto Usuario con nombre “roger” y
// clave: 1234. La página debe solicitar entonces un nombre de usuario y una
// contraseña y comprobar si son correctos empleando el método
// comprobarUsuario() del objeto usuario. Si el usuario se identifica
// correctamente debe mostrársele un mensaje de bienvenida. En caso contrario
// debe mostrársele un mensaje de error y volvérsele a solicitar el usuario y la
// contraseña.  -->

"use strict";

function Usuario(_usuario, _clave) {
    this.usuario = _usuario
    this.clave = _clave
    this.comprobarUsuario = function (_usu, _cla) {
        return this.usuario == _usu && this.clave == _cla;
    }
}

let usuario = new Usuario('roger', 1234)
let usuario2 = prompt('Introduce el usuario')
let clave2 = prompt('Introduce la clave')
if (usuario.comprobarUsuario(usuario2, clave2)) {
    alert('Bienvenido')
} else {
    alert('Error')
}