
import './chat.css';
import React from 'react';
import flecha from './flecha.png';

 

class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state={value:"", valor : "", valor_usuario : "", comentarios:[]}
 
    this.cambio=this.cambio.bind(this);
    this.insertar=this.insertar.bind(this);
    this.componentDidMount=this.componentDidMount.bind(this);
    this.cambioUsuario=this.cambioUsuario.bind(this);
  }
  cambio(event){
    this.setState({valor:event.target.value});
 
  }
  cambioUsuario(event){
    this.setState({valor_usuario:event.target.value});
    
 
  }
  componentDidMount(){
    fetch("http://localhost/Chat/mostrar.php",{
 
    }
    ).then(
      res =>
      res.json()
      
    )
    .then(
      (result)=>{
        this.setState({valor : ""});
        this.setState({valor_usuario : ""});
        this.setState({comentarios: result});
        
 
      }
    )
  }
  insertar(){
    var datos = new FormData;
    datos.append('mensaje', this.state.valor)
    datos.append('usuario', this.state.valor_usuario)
 
    fetch("http://localhost/Chat/escribir.php",{
    method:'POST',
    body: datos
  })
  .then(response =>
    console.log(response.ok)
    
    )
    .then(
      (result)=>{
        this.componentDidMount()
      }
    )
 
  }
  render(){
    return(
      <div className='App'>
        <header id='cabecera'>
            <div >
                <h1 id='titulo'>Hola</h1>
            </div>
        </header>
        <body>
            <div id='estructura'>
                
                <div id='cuerpo'>
                {this.state.comentarios.map(mostrar=>(<li id='quitarpunto' key={mostrar.num_mensaje}>{mostrar.usuario}:{mostrar.mensaje}</li>))}
                </div>
                <div id='abajo'>
                <a href='/Login'>login</a>
                <input type="text" id='usuario' value={this.state.valor_usuario}name='usuario' placeholder='Usuario' onChange={this.cambioUsuario}/> 
                <input type="text" id='escribir' name='comentario' value={this.state.valor} onChange={this.cambio}/>
                <img src={flecha} id='mandar' onClick={this.insertar}></img>
                </div>
            </div>
        </body>
      </div>
    );
  }
  }
  export default Chat;
