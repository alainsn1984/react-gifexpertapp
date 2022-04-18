import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CouterWhithCustomHook = () => {
  
    const { state, increment, decrement, reset } = useCounter(100);

    return (
      <>
            <h1>Counter with Hook: {state}</h1>
            <hr />

            <button
                onClick={ increment }
                className='btn btn-primary'>
                +1
            </button>

            <button
                onClick={ reset }
                className='btn btn-success'>
                Reset
            </button>

            <button
                onClick={ decrement }
                className='btn btn-primary'>
                -1
            </button>
      </>
  )
}
