import { Persona } from "./Persona.js";

var parrafoPersona = document.getElementById("objetoPersona");

var parrafoMetodoPersona = document.getElementById("metodoPersona");

var miPersona = new Persona("carrizo")

parrafoPersona.innerText = miPersona.apellido + ' '  + miPersona.nombre

parrafoMetodoPersona.innerText = miPersona.correr();

//miPersona.morir();
parrafoMetodoPersona.innerText += miPersona.mostrarEstado(); 

