//arreglos y .mao

const carrito = ['producto 1', 'produco 2', 'producto 3'];

console.log(carrito);

const appContenedor = document.querySelector('#app');

carrito.forEach(producto =>{

    html += `<li>${producto}</li>`;

})

appContenedor.innerHTML = html;


const carrito2 = ['producto 1', 'produco 2', 'producto 3'];

console.log(carrito2);

carrito2.map(producto => {

    return 'El producto es' + producto;

})

const persona = {

}