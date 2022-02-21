import './App.css';
import React from 'react';

class Formulario extends React.Component{

    render(){
        return(
          <body>
            <h1>Escribe algo</h1>
            <input type="text" placeholder="Escribe algo"></input>
            <button>Enviar</button>
          </body>
        );
    }

}
export default Formulario;