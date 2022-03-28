import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';

const CounterApp = ({value=10}) => {

    const [ counter, setCounter] = useState(value);

    const handleAdd = () =>{
        setCounter(counter + 1);
       
    }
    const handLess = () =>{
        setCounter( counter - 1)
        
    }
    const handReset = () =>{
        setCounter(value)
        
    }

    return  (<>
                <h1>CounterApp</h1>
                <h2> { counter } </h2>
                <button onClick={ handleAdd }>+1</button>
                <button onClick={ handReset }>Reset</button>
                <button onClick={ handLess }>-1</button>
            </>);
}


CounterApp.propTypes = {
    value: PropTypes.number

}

export default CounterApp;