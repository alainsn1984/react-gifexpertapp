import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setState] = useState({ counter1: 10, counter2: 20 })
    
    const { counter1, counter2 } = state;
    const handleAdd = () => {
        setState(() => ({ ...state, counter1: counter1 + 1}));
    }

    return (
      <div>
          <h3>Counter1 { counter1 }</h3>
          <h3>Counter2 { counter2 }</h3>7
          <hr />

            <button
                onClick={  handleAdd }
                className="btn btn-primary">
                +1
            </button> 
      </div>
  )
}
