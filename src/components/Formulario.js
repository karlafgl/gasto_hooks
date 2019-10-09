import React, {Fragment, useState} from 'react';
import Error from './Error';
import shortid from 'shortid';


function Formulario(props){
  
  const {guardarGasto} = props

  //state
  const [nombreGasto, guardarNombreGasto] = useState('')
  const [cantidadGasto, guardarCantidadGasto] = useState(0)
  const [error, guardarError] = useState(false)

  //cuando se agrega el gasto
  const agregarGasto = e => {
    e.preventDefault()

    //validar
    if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === ""){
      guardarError(true)
      return;
    }

    //construir objecto de gasto
    const gasto = {
      nombreGasto,
      cantidadGasto,
      id: shortid.generate()
    }

    //pasar el gasto al componente principal
    guardarGasto(gasto) 
    //Eliminar alerta
    guardarError(false)

    //resetear el form
    guardarNombreGasto('')
    guardarCantidadGasto('')
  }

  return(
    <Fragment>
      <form onSubmit={agregarGasto}>
      <h2>Agrega tus gatos Aqui</h2>

      {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/> : null}

        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej.transporte"
            onChange={e => guardarNombreGasto(e.target.value)}
            value={nombreGasto}
          />
        </div>
        <div className="campo">
          <label>Cantidad Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. 300"
            onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
            value={cantidadGasto}
          />
        </div>

        <input 
          type="submit"
          className="button-primary u-full-width"
          value="Agregar gasto"
          />

 
      </form>
    </Fragment>
  )
}

export default Formulario;