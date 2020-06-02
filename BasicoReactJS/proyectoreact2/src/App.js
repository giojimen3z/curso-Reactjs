import React, { Fragment,useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Citas from './components/Citas';


function App() {
  //Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales = [];

  }
  //Arreglo de citas
  const [citas,guardarCitas] = useState(citasIniciales);
  
  //useEffect para realizar cirtas operaciones cuando el state cambia
    useEffect(() => {
      if(citasIniciales){

        localStorage.setItem('citas', JSON.stringify(citas));
      }else {

        localStorage.setItem('citas', JSON.stringify([]));

      }

    }, [citas, citasIniciales] );

  //Funcion que toma las citas actuales y agrega la nueva

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])

    console.log(citas);
  }
  //FUncion que elimina una cita por su id
  const eliminarCita = id =>{

    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas)

  }

//Mensaje COndicional
const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas '
  return (
      <Fragment>
            <h1>Administrador de Pacientes</h1>
            <div className="container">
              <div className="row">
                <div className="one-half column">
                      <Formulario 
                        crearCita = {crearCita}
                      />
                </div>
                <div className="one-half column">
                          <h2>{titulo}</h2>
                          {citas.map( cita =>(
                            <Citas
                              key={cita.id}
                              cita={cita}
                              eliminarCita = {eliminarCita}
                            />
                          ))}
                </div>                
              </div>
            </div>
      </Fragment>
  );
}

export default App;