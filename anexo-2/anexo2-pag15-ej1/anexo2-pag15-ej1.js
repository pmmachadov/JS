// Utiliza javascript para:
// Crear una página que solicite el nombre de los socios de una peña. Para ello, la
// página solicitará cada nombre y a continuación mostrará un cuadro de diálogo
// preguntando si se desea continuar. Una vez que el usuario haya finalizado de
// introducir todos los nombres la página debe mostrar los siguientes datos en pantalla:
// a. Una tabla con los nombres de los socios en el orden en que se han
// introducido.
// b. Una tabla con los nombres de los socios ordenados alfabéticamente.
// c. El total de socios introducidos. 
// Nota: Utiliza un array para almacenar los nombres de los socios.



// Variables globales
let socios = new Array();
let nombre = "";
let continuar = true;

// Función principal
function main() {
    // Solicita el nombre de los socios
    solicitarNombre();
    // Muestra los datos
    mostrarDatos();
}

// Solicita el nombre de los socios
function solicitarNombre() {
    // Solicita el nombre de los socios
    while (continuar) {
        nombre = prompt("Introduzca el nombre del socio: ");
        if (nombre != null) {
            socios.push(nombre); // Añade el nombre al array
        }
        continuar = confirm("¿Desea continuar?");
    }
}

// Muestra los datos
function mostrarDatos() {
    // Muestra los datos
    document.write("<h3>Tabla de socios</h3>");
    document.write("<table border='1'>");
    document.write("<tr><th>Nombre</th></tr>");
    for (const element of socios) {
        document.write("<tr><td>" + element + "</td></tr>");
    }
    document.write("</table>");
    document.write("<h3>Tabla de socios ordenados</h3>");
    document.write("<table border='1'>");
    document.write("<tr><th>Nombre</th></tr>");
    socios.sort(); // Ordena alfabéticamente
    for (const element of socios) {
        document.write("<tr><td>" + element + "</td></tr>");  
    }
    document.write("</table>"); 
    document.write(`<h3>Total de socios: ${socios.length}</h3>`); 
}

// Llamada a la función principal
main();