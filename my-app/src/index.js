import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Index.js es el punto de entrada sobre el cual se cargan distintos componentes al DOM

//Esta es la web dinamica, identifica los elementos
const root = ReactDOM.createRoot(document.getElementById('root'));
//Renderizar es generar una instancia que se pueda mostrar en pantalla que tiene relación con el contenido dinamico ques se genera a través de los componentes.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
