//objects
function mostrarInformacionTarea(tarea,prioridad) {

    return `La tarea ${tarea} tiene una prioridad ${prioridad}`;
}
//Object Literal
const persona = {
    nombre: 'Gio',
    profesion: 'Arquitecto',
    edad: 27

}



console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);

//object Constructor

function Tarea(nombre, urgencia) {

    this.nombre = nombre;
    this.urgencia = urgencia;

}
//Agregar un prototype

Tarea.prototype.mostrarInformacionTarea = function()  {

    return `La tarea ${this.nombre} tiene una prioridad ${this.urgencia}`;
}
//crear una nueva tarea

const tarea1 = new Tarea('Aprender React', 'Urgente');
console.log(tarea1);

const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia)
console.log(mostrarInfo);
console.log(tarea1.mostrarInformacionTarea())

//Destructuring objects
// Destructuring es extraer la informaciond e  los objetos

const aprendiendoJS = {

    version: 'ES6+',
    frameworks: ['React','Vuejs','AngularJs']

}

console.log(aprendiendoJS);