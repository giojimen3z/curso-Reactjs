import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4'
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear State de Citas

    const [cita, actualizarCita] = useState({
        Mascota: '',
        propietario: '',
        Fecha: '',
        Hora: '',
        sintomas: ''
    })

    const [error, actualizarError] =  useState(false)
    
    //Funcion que se ejecuta cuando un usuario escribe en un input 

    const actualizarState = e =>{

        actualizarCita({

                ...cita,
                [e.target.name]:  e.target.value 

        })
    }
    //Extraer los valores

    const {Mascota,propietario,Fecha,Hora,sintomas} = cita;

    //cuando el  ususairo presiona agregar cita
    const submitCita = e =>{

        e.preventDefault();

        //Validar

        if(Mascota.trim() === '' || propietario.trim() === '' || Fecha.trim() === '' || Hora.trim() === '' || sintomas.trim() === ''){

            actualizarError(true);
            return;
        }

        //Eliminar mensaje previo
        actualizarError(false);

        //Asignar un ID
        cita.id = uuid();

        //Crear la cita
        crearCita(cita);

        //reiniciar el Form
        actualizarCita({

            Mascota: '',
            propietario: '',
            Fecha: '',
            Hora: '',
            sintomas: ''

        })


    }


    return ( 

        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className= "alerta-error">Todos los campos son obligatorios!!</p> :null}

            <form  onSubmit = {submitCita} >
                <label>Mascota</label>
                <input 
                    type = "text"
                    name = "Mascota"
                    className = "u-full-width"
                    placeholder = "Nombre Mascota"
                    onChange = {actualizarState}
                    value = {Mascota}
                />
                <label>Nombre Dueño</label>
                <input 
                    type = "text"
                    name = "propietario"
                    className = "u-full-width"
                    placeholder = "Nombre Dueño"
                    onChange = {actualizarState}
                    value = {propietario}
                />                
                <label>Fecha</label>
                <input 
                    type = "date"
                    name = "Fecha"
                    className = "u-full-width"
                    onChange = {actualizarState}
                    value = {Fecha}

                />       
                <label>Hora</label>
                <input 
                    type = "Time"
                    name = "Hora"
                    className = "u-full-width"
                    onChange = {actualizarState}
                    value = {Hora}

                />                     
                <label>Sintomas</label>
                <textarea 
                    className ="u-full-width"
                    name = "sintomas"
                    onChange = {actualizarState}
                    value = {sintomas}
                
                ></textarea>

                <button
                    type = "submit"
                    className = "u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>

     );
}
Formulario.propTypes = {

    crearCita: PropTypes.func.isRequired
  
  }

export default Formulario;