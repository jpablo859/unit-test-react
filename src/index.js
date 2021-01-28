import ReactDOM from 'react-dom'
//import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.getElementById('root');

ReactDOM.render(
                <CounterApp
                    value={25}
                />, 
                divRoot);

console.log(divRoot);

