import React from 'react'

const Producto = ({producto,productos, carrito, agregarProducto}) => {
    
    const {id, nombre, precio} = producto;
    //Agregar producto al carrito

    const selesccionarProducto = id =>{
        const producto  = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);

    }

    //Elimina Un  producto del carrito
    const eliminarProducto = id => {
        
        const productos = carrito.filter(producto => producto.id !== id);

        //colocar los profuctos en el stae

        agregarProducto(productos)

    }
    return ( 

        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>

            {
                productos ?( 
                <button 
                    type="button"
                    onClick={()=> selesccionarProducto(id)}
                > Comprar</button>
                ) :(
                    <button 
                    type="button"
                    onClick={()=> eliminarProducto(id)}
                >Eliminar</button>

                )
            }
        </div>

     );
}
 
export default Producto
