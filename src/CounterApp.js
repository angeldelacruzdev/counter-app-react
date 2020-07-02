import React, {useState} from 'react';
import  PropTypes  from 'prop-types';
 

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);

    const handleReset = () => setCounter(1);

    const handleSubtract = () =>{
        if(counter > 1){
            setCounter(counter - 1);
        } 
    };


    return (
        <>
            <h1>Couner App</h1>
            <p>{counter}</p>
            <button onClick={ handleAdd }>+</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-</button>
        </>
    );

}   

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;