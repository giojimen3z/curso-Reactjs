//crear variables

var aprendiendo99 = true;

aprendendo99 = false;
console.log(aprendiendo99);
// Variables con Const

const aprendiendo =10;

console.log(aprendiendo);

//Variables con let

let aprender;

console.log(aprender);

//scope con var

/*var musica = 'Rock'

if (musica){

    var musica = 'Grunge'
    console.log('dentro del if', musica);
}

console.log('fuera del if', musica);
*/
//scope con let

let musica = 'Rock';

if (musica){

    let musica = 'Grunge'
    console.log('dentro del if', musica);
}

console.log('fuera del if', musica);
