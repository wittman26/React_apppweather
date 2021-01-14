/* Componente funciona (que solo tiene una funcion) */
import React from 'react';
import PropTypes from 'prop-types';

/**Se crea constante cuyo contendio es JSX */
const Ubicacion = ({ ciudad }) => (
    <div>
        <h1>{ciudad}</h1>
    </ div>
)

/* Notación alterna */
// const Ubicacion = ({ciudad}) => {
//     // const ciudad = props.ciudad;
//     // const {ciudad} = props; //destructuring
//     // debugger; //Esto coloca breakpoint en el navegador
//     return (
//         <div>
//             <h1>{ciudad}</h1>
//         </ div>);
// }
Ubicacion.propTypes = {
    ciudad: PropTypes.string.isRequired
}


/**Se exporta el componete */
export default Ubicacion;