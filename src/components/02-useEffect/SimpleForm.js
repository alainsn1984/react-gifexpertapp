import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [simpleForm, setsimpleForm] = useState({
        name: '',
        email: ''
    })
    const { name, email } = simpleForm;

    useEffect(()=> {
        console.log('Me Ejecute')
    }, [])

    useEffect(()=> {
        console.log('Cambio el Formulario')
    }, [simpleForm])

    useEffect(()=> {
        console.log('Cambio email')
    }, [email])

    const handleInputChange = ({ target }) => {
        setsimpleForm({
            ...simpleForm,
            [ target.name ]: target.value
        })

    }

  return (
    <>
          <h1>Simple Form</h1>
          <hr />
          <div className='form-group'>
              <input
                  className='form-control'
                  name='name'
                  placeholder='Tu nombre'
                  autoComplete='off'
                  value={name}
                  type='text'
                  onChange={ handleInputChange }
              />
          </div><br></br>

          <div className='form-group'>
              <input
                  className='form-control'
                  name='email'
                  placeholder='email@gmail.com'
                  autoComplete='off'
                  value={email}
                  type='text'
                  onChange={ handleInputChange }
              />
          </div>

          { name === '123' && <Message /> }
    </>
  )
}
