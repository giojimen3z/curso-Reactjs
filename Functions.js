//parametros por default en una function

function  actividad(nombre = 'Walter white', actividad = 'Enseñar quimica') {
    console.log(`La persona ${nombre}, esta realizando  la actividad ${actividad}`);
}

actividad('Gio','Aprender javascript');
actividad('Juan','Creando un sitio web');
actividad()
actividad('juan')

//arrow functions
//cuando solamente es un parametro se peude dejar sin parentecis si son mas d euno se deben usar
let viajando =  destino => `Viajando a la  ciudad: ${destino}`;


let viaje;

viaje = viajando('Paris');
viaje = viajando('Londres');
viaje = viajando('Madrid');

console.log(viaje);