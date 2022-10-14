// Crea un tipo de objeto Triángulo provisto de tres propiedades: lado1, lado2 y
// lado3. Define además tres métodos:
// a. esEquilatero()  devuelve un valor cierto si todos los lados son iguales.
// b. esIsosceles()  devuelve un valor cierto si dos de los lados son iguales.
// c. esEscaleno()  devuelve un valor cierto si todos los lados son distintos.
// Crea una página que solicite los tres lados de un triángulo, cree un objeto
// triángulo, y después indique si es equilátero, isósceles o escaleno llamando a
// sus métodos. Introduce los datos con <input> y <button> y haz que el botón llame a una función que cree el objeto y muestre el resultado en pantalla.

"use strict";


function Triangulo(lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
    this.esEquilatero = function() {
        return this.lado1 == this.lado2 && this.lado2 == this.lado3;
    }
    this.esIsosceles = function() {
        return this.lado1 == this.lado2 || this.lado2 == this.lado3 || this.lado1 == this.lado3;
    }
    this.esEscaleno = function() {
        return this.lado1 != this.lado2 && this.lado2 != this.lado3 && this.lado1 != this.lado3;
    }
}

function comprobar() {
    let l1 = document.getElementById("lado1").value;
    let l2 = document.getElementById("lado2").value;
    let l3 = document.getElementById("lado3").value;
    let triangulo = new Triangulo(l1, l2, l3);
    if (triangulo.esEquilatero()) {
        alert("El triángulo es equilátero");
    } else if (triangulo.esIsosceles()) {
        alert("El triángulo es isósceles");
    } else if (triangulo.esEscaleno()) {
        alert("El triángulo es escaleno");
    }
}