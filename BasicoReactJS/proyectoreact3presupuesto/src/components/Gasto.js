import React from 'react'
import PropTypes from 'prop-types'

const Gasto = ({gasto}) => {
    return ( 
        <li className = "gastos">

            <p>

                {gasto.nombre}
                <span className="gasto">$ {gasto.cantidad}</span>

            </p>

        </li>

     );
}
Gasto.prototype ={

    gastos: PropTypes.array.isRequired
}
 
export default Gasto;