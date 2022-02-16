import React from 'react';

 
class Login extends React.Component{
        
    constructor(props){
        super(props);
        this.state={value:"",contra:"",usuario:"",comentarios:[]} 
        this.cambiousuario=this.cambiousuario.bind(this);
        this.cambiocontra=this.cambiocontra.bind(this);
        this.subir=this.subir.bind(this);
    }
    cambiousuario(event){
        this.setState({usuario:event.target.value})
        
    }
    cambiocontra(event){
        this.setState({contra:event.target.value})
        
    }
    iniciar(event){
        var datos = new FormData();
        datos.append('usuario',this.state.usuario);
        datos.append('contra',this.state.contra);
        
        fetch('http://localhost/Chat/iniciar_sesion.php', {
            method: 'POST',
            body: datos
        })
        .then( 
            res =>
            res.json()
            
        )
        .then(
            (result)=>{
              this.setState({contra : ""}); 
              this.setState({usuario : ""});
              this.setState({comentarios: result});
              
       
            }
          )
    }
    subir (){
        var datos = new FormData();
        datos.append('usuario',this.state.usuario);
        datos.append('contra',this.state.contra);
        
        fetch('http://localhost/Chat/login.php', {
            method: 'POST',
            body: datos
        })
        .then( 
            res =>
            res.json()
            
        )
        .then(
            (result)=>{
              this.setState({contra : ""}); 
              this.setState({usuario : ""});
              this.setState({comentarios: result});
              
       
            }
          )
    } 
render(){
    return(
        <div >      
            <div class="container p-4" >
                <div class="row" >
                    <div class="col-md-4">
                        <div class="card card-body">
                            
                                <div class="form-group">
                                    <input type="text" value={this.state.usuario} name='usuario' class="form-control" onChange={this.cambiousuario} placeholder="Usuario" autofocus required></input>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <input type="password" name="contra" value={this.state.contra} class="form-control" onChange={this.cambiocontra} placeholder="Contraseña" autofocus required></input>
                                </div>
                                <br/>
                                <button onClick={this.iniciar} class="btn btn-success btn-block" name="guardar">Iniciar sesión</button>ㅤ
                                <button onClick={this.subir} class="btn btn-success btn-block">Registrarme</button>
                                
                                <a href='/'>Chat</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
}

}

export default Login;



    