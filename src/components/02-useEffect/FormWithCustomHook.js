import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [valuesForm, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = valuesForm;

    useEffect(()=>{
        console.log('Email cambio')
    }, [email])

    const handleOnsubmit = (e)=> {
        e.preventDefault();
        console.log(valuesForm)
    }
    

  return (
    <form onSubmit={ handleOnsubmit }>
          <h1>FormWithCustomHook</h1>
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

          <div className='form-group'>
              <input
                  className='form-control'
                  name='password'
                  placeholder='*****'
                  autoComplete='off'
                  value={password}
                  type='password'
                  onChange={ handleInputChange }
              />
          </div>

          <button type='submi' className='btn btn-primary'>Aceptar</button>

        
    </form>
  )
}
