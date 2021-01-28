import PropTypes from 'prop-types';

const PrimeraApp = ({titulo, mensaje, edad}) => {

    return (
        <>
            <h1>{titulo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <h2>{mensaje}</h2>
            {edad 
            ? 
                <h3>{edad}</h3> 
            : 
                null}
        </>
    );
 
}

PrimeraApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    mensaje: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    edad: 25
}

export default PrimeraApp;

