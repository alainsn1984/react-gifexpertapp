
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../components/CounterApp';

describe('Prueba Componente <CounterApp />', ()=>{
    
    let wrapper = shallow(<CounterApp />);

    beforeEach(()=> {
        wrapper = shallow(<CounterApp />);
    }) 
    

    test('Debe Mostrar PrimeraApp Correctamente', () => {
        
         expect( wrapper ).toMatchSnapshot();
    })

    test('Debe mostrar el valor de 100 por defecto', () => {
        
        const wrapper = shallow(<CounterApp value={ 100 }/>)

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText).toBe('100');

     })

     test('Debe incrementar el counter en el boton +1', () => { 
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');

    }) 

    test('Debe substract el counter en el boton -1', () => { 
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9');

    })
    
    test('Debe restablecer el valor por defecto en el btn reset', () => { 
        const wrapper = shallow(<CounterApp value={ 105 }/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('105');

    

    })
}); 