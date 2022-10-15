function Alumno (nombre, nota) { // Constructor de objetos Alumno
  this.nombre = nombre // Propiedad nombre
  this.nota = nota // Propiedad nota
}

function Aula (alumnos) { // Constructor de objetos Aula
  this.alumnos = alumnos // Propiedad alumnos
  this.promedio = function () { // Método promedio
    let suma = 0 // Variable local
    for (const element of this.alumnos) { // Recorrido del array
      suma += element.nota // Suma de las notas
    }
    return suma / this.alumnos.length // Devuelve la promedio segun el largo del array
  }
  this.mejorAlumno = function () { // Devuelve el mejor alumno
    let mejorAlumno = this.alumnos[0] // Alumno con mejor nota
    for (let i = 1; i < this.alumnos.length; i++) { // Recorremos el array
      if (this.alumnos[i].nota > mejorAlumno.nota) { // Si la nota es mayor que la del mejor alumno
        mejorAlumno = this.alumnos[i] // Actualizamos el mejor alumno
      }
    }
    return mejorAlumno // Devolvemos el mejor alumno
  }
}

let alumnos = [] // Array de alumnos
const numeroAlumnos = parseInt(prompt('Introduce el numero de alumnos')) // Número de alumnos
for (let i = 0; i < numeroAlumnos; i++) { // Recorrido del array
  const nombre = prompt('Introduce el nombre del alumno') // Nombre del alumno
  const nota = parseInt(prompt('Introduce la nota del alumno')) // Nota del alumno
  alumnos.push(new Alumno(nombre, nota)) // Añadimos el alumno al array
}

const aula = new Aula(alumnos) // Creamos el objeto aula
document.getElementById('resultado').innerHTML = `El promedio del aula es de ${aula.promedio()} y el mejor alumno es ${aula.mejorAlumno().nombre}` // Mostramos el resultado