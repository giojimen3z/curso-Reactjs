//Template Strings

const nombre = 'Gio';
const trabajo = 'Arquitecto Desarrollador';

//concatenar javascript

//antes
console.log('Nombre: '+ nombre + '  Trabajo: '+ trabajo );

//ahora

console.log(`Nombre:  ${nombre},   Trabajo:  ${trabajo}`);

//concatnar con multiples lineas

//antes
const contenerdorApp = document.querySelector('#app');
/*
let html = '<ul>'+
                '<li> Nombre: '+ nombre + '</li>' +
                '<li> Trabajo: '+ trabajo + '</li>' +
            '</ul>'
contenerdorApp.innerHTML = html;
*/

//ahora


let html = `
            <ul> 
                    
                    <li>Nombre:  ${nombre}</li>
                    <li>Trabajo:  ${trabajo}</li>
            </ul>
          `

contenerdorApp.innerHTML = html;