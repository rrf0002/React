
import './chat.css';
import React from 'react';
import flecha from './flecha.png';
import flechasalir from './flechasalir.png';
import vaciarchat from './basura.png';

function Main(props) {
  
  if (localStorage.getItem("usuario")==props.usuario) {
    return(
      <div id='mensajemio'>
      <div id='letras'>{props.frase}</div>
    </div>
    )
  }
  else{
    return(
      <div id='mensaje'>
      <div id='colorpersonas'>{props.usuario}</div>
      {props.frase}
      </div>
      )
  }

}


class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state={value:"", valor : "", comentarios:[]}
 
    this.cambio=this.cambio.bind(this);
    this.insertar=this.insertar.bind(this);
    this.componentDidMount=this.componentDidMount.bind(this);
    
  }
  cambio(event){
    this.setState({valor:event.target.value});
 
  }
  flecha(event){
    window.location.href="/";
    localStorage.setItem("usuario","");
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
        this.setState({comentarios: result});
         
      }
    )
  }
  insertar(){
    var scroll = document.getElementById("cuerpo");
    scroll.scrollTop = scroll.scrollHeight;
    if(localStorage.getItem("usuario")==""){
      alert ("Tienes que estar registrado");
      window.location.href="/";
    }
    var datos = new FormData;
    datos.append('mensaje', this.state.valor)
    datos.append('usuario', localStorage.getItem("usuario"))
    
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
  vaciarchat(){
    fetch("http://localhost/Chat/vaciarchat.php",{
    
  }
  ).then(
    res =>
    res.json()
    
  )
  
  .then(
    (result)=>{
      
       window.location.reload();
    }
  )
}
  render(){
    return(
      <div className='App'>
        
        <body>
            
            <div id='estructura'>
            <div id='arriba'>
            
            <img src={flechasalir} id='flechasalir'onClick={this.flecha}></img>
            <h1 id='titulo'>{localStorage.getItem("usuario")}</h1>
            <img src={vaciarchat} id='basura'onClick={this.vaciarchat}></img>
            </div>
                <div id='cuerpo'>
                <div>
                {this.state.comentarios.map((comentarios)=><Main usuario={comentarios.usuario} frase={comentarios.mensaje}/>)}
                
                  
                  </div>
                </div>
                <div id='abajo'>
                                                
                <input type="text" id='escribir' placeholder='Mensaje' name='comentario' value={this.state.valor} onChange={this.cambio} onKeyPress={event => {if (event.key === 'Enter') {this.insertar()}}} />
                <img src={flecha} id='mandar' onClick={this.insertar}  ></img>
                
                </div>
            </div>
        </body>
      </div>
    );
  } 
  }
  export default Chat;