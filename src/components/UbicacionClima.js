/* Componente funciona (que solo tiene una funcion) */
import React from 'react';
import Ubicacion from './Ubicacion';
import DatosClima from './DatosClima';

/**Se crea constante cuyo contendio es JSX */
const UbicacionClima = () => (
    <div>
        <Ubicacion ciudad={"Madrid"}/>
        <DatosClima />
    </ div>
);

/**Se exporta el componete */
export default UbicacionClima;