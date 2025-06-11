import { Persona, Alumno } from "./Persona.js";


var parrafoPersona = document.getElementById("objetoPersona");

var parrafoMetodoPersona = document.getElementById("metodoPersona");

var miPersona = new Persona("carrizo");

var miAlumno = new Alumno("Hernandez","Pedro");


miAlumno.aula = "5 17"

parrafoPersona.innerText = miPersona.apellido + ' '  + miPersona.nombre + ' ' + miPersona.aula;

parrafoMetodoPersona.innerText = miPersona.correr();

miPersona.morir();
parrafoMetodoPersona.innerText += miPersona.mostrarEstado(); 

