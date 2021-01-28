import {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const [valor, setValor] = useState(value);

    const sumar = () => setValor(valor+1);

    const restar = () => setValor(valor-1);

    const reset = () => setValor(value);

    return ( 
        <>
            <h1>CounterApp</h1>
            <h2> { valor } </h2>
            <button onClick={sumar}>Sumar</button>
            <button onClick={reset}>Reset</button>
            <button onClick={restar}>Restar</button>

        </>
     );
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}
 
export default CounterApp;