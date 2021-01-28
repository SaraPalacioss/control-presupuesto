import React, {Fragment, useState}from 'react';
import Error from "./Error"

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    //definir el state

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    //función que lee el presupuesto

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value,10))
    }

    //submit para definit el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true)
            return
        }

        //si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return (  
<Fragment>
    <h2>Registra tu presupuesto</h2>

    {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}

    <form
        onSubmit={agregarPresupuesto}
    >
        <input
            type="number"
            className="u-full-width"
            placeholder="Registra tu presupuesto"
            onChange={definirPresupuesto}
        />
        <input
            type="submit"
            className="button-primary u-full-width"
            value="Definir presupuesto"
        />
    </form>
</Fragment>
    );
}
 
export default Pregunta;
