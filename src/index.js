import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';
// import CounterApp from './components/CounterApp';
import './index.css';



ReactDOM.render( /*<CounterApp value={10} />, document.querySelector('#root')*/
   <GifExpertApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

