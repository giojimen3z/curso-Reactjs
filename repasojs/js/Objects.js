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

    version: {
        nueva: 'ES6+',
        anterior: 'E5'
    },
    frameworks: ['React','Vuejs','AngularJs']

}

//Destructuring es extraer informacion
/*console.log(aprendiendoJS);
console.log(aprendiendoJS.frameworks);*/

//Destructuring  nuevo

let {nueva} = aprendiendoJS.version;
console.log(nueva);


//Object literal enhancement


const band = 'Metallica';
const genero ='Heavy Metal'
const canciones  = ['Master of Puppets','Seek & Desroy', 'enter  sandman']

//forma anterior

/*const metallica = {

    banda:band,
    genero:genero,
    canciones:canciones

}*/

const metallica =  {band,genero,canciones};
console.log(metallica);


//Metodos e un objeto


const personas = {

    nombre: 'Gio',
    trabajo: 'Arquitecto desarrollador',
    edad:26,
    musickRock:true,
    mostrInformacion() {
        console.log(`${this.nombre} es ${this.trabajo}   su edad es ${this.edad}`);
   }
}

personas.mostrInformacion();