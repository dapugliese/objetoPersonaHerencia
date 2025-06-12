import { Persona, Alumno } from "./Persona.js";


var parrafoPersona = document.getElementById("objetoPersona");

var parrafoMetodoPersona = document.getElementById("metodoPersona");

var miPersona = new Persona("Carrizo", "Juan Carlos");

var miAlumno = new Alumno("Hernandez","Pedro");


miAlumno.aula = "5 17"

parrafoPersona.innerText = miAlumno.apellido + ' '  + miAlumno.nombre + ' ' ;

parrafoMetodoPersona.innerText = miAlumno.correr();

miPersona.morir();
parrafoMetodoPersona.innerText += miPersona.mostrarOcupacion();

