// Crea una página para registrar las precipitaciones registradas por meses. Para
// ello la página debe solicitar el nombre de un mes y unas precipitaciones en
// litros. A continuación la página debe mostrar un cuadro de diálogo
// preguntando si el usuario desea registrar más precipitaciones. Las
// precipitaciones asociadas a los mismos meses deben acumularse.
// Una vez que el usuario termine la página debe mostrar una tabla con todos los
// meses y el acumulado de precipitaciones correspondiente a cada uno de ellos. 

// Variables globales
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
let precipitaciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Constructor
function LluviaPorMes(meses, precipitaciones) {
    this.meses = meses;
    this.precipitaciones = precipitaciones;
}

// Función que muestra el formulario
function mostrarFormulario() {
    let mes = prompt("Introduce el mes");
    let precipitacion = prompt("Introduce las precipitaciones");
    let indice = meses.indexOf(mes); // Busca el mes en el array
    if (indice != -1) {
        precipitaciones[indice] += parseInt(precipitacion);
    } else {
        meses.push(mes);
        precipitaciones.push(parseInt(precipitacion));
    }
    let continuar = confirm("¿Desea continuar?");
    if (continuar) {
        mostrarFormulario();
    } else {
        mostrarPrecipitaciones();
    }
}

// Función que muestra las precipitaciones registradas en una tabla
function mostrarPrecipitaciones() {
    let tabla = "<table><tr><th>Mes</th><th>Precipitaciónes</th></tr>";
    let i = 0;
    while (i < meses.length) {
        tabla = tabla + "<tr><td>" + meses[i] + "</td><td>" + precipitaciones[i] + "</td></tr>";
        i++;
    }
    tabla = tabla + "</table>";
    document.write(tabla);
}

// Instanciación del objeto
let lluviaPorMes = new LluviaPorMes(meses, precipitaciones);

// Llamada a la función que muestra el formulario
mostrarFormulario();

// Llamada a la función que muestra las precipitaciones
mostrarPrecipitaciones();