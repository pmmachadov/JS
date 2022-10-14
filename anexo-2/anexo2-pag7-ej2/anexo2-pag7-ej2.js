//Utiliza Javascript para:
// Crea un tipo de objeto ApuestaPrimitiva provisto de seis propiedades que
// representan los valores de una primitiva: v1, v2, v3, v4, v5, y v6. Define además
// un método contarAciertos() que recibe como parámetros seis valores de la
// combinación ganadora y devuelve el número de aciertos.
// Muestra el resultado en pantalla con document.writeln

"use strict";

function ApuestaPrimitiva(v1, v2, v3, v4, v5, v6) {
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
    this.v4 = v4;
    this.v5 = v5;
    this.v6 = v6;
}

ApuestaPrimitiva.prototype.contarAciertos = function (v1, v2, v3, v4, v5, v6) {
    let aciertos = 0;
    if (this.v1 == v1) aciertos++;
    if (this.v2 == v2) aciertos++;
    if (this.v3 == v3) aciertos++;
    if (this.v4 == v4) aciertos++;
    if (this.v5 == v5) aciertos++;
    if (this.v6 == v6) aciertos++;
    return aciertos;
}

const apuesta = new ApuestaPrimitiva(1, 2, 3, 4, 5, 6);
const aciertos = apuesta.contarAciertos(1, 2, 3, 4, 5, 6);
document.writeln(`Aciertos: ${aciertos}`);



