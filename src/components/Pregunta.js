import React, {Fragment, useState} from 'react';
import Error from './Error';

function Pregunta(props){

  const {guardarPresupuesto, guardarPreguntaPresupuesto} = props

  //Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false)

  //validad el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault()

    //validar
    if(isNaN(cantidad) || cantidad < 1){
      guardarError(true)
      return
    }
    //Si se pasa la validacion
    guardarError(false)
    guardarPresupuesto(cantidad)
    guardarPreguntaPresupuesto(false)
  }

  return(
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {
        error ? <Error mensaje="Necesitas Colocar tu Presupuesto correcto"/> : null
      }
      <form onSubmit={agregarPresupuesto}>

        <input 
          type="number" 
          className="u-full-width"
          placeholder="Agrega tu presupuesto"
          onChange={(e)=> guardarCantidad(parseInt(e.target.value, 10))}        
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />

      </form>
    </Fragment>
  )
}

export default Pregunta;