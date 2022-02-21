import React from 'react';

 
class Login extends React.Component{
        
    constructor(props){
        super(props);
        this.state={value:"",contra:"",usuario:"",malinicio:""} 
        this.cambiousuario=this.cambiousuario.bind(this);
        this.cambiocontra=this.cambiocontra.bind(this);
        this.subir=this.subir.bind(this);
        this.iniciar=this.iniciar.bind(this);
    }
    cambiousuario(event){
        this.setState({usuario:event.target.value})
        
    }
    cambiocontra(event){
        this.setState({contra:event.target.value})
        
    }
    iniciar(){
        var datos = new FormData();
        datos.append('usuario',this.state.usuario);
        datos.append('contra',this.state.contra);
        
        fetch('http://localhost/Chat/iniciar_sesion.php', {
            method: 'POST',
            body: datos
        })
        .then(res=>res.json())
        .then( (result)=>{
            if(result=="Funciona"){
                localStorage.setItem("usuario",this.state.usuario);
                window.location.href="/chat";
            }
            
        },
        (error)=>{
            console.log('NO es correcto');  
            this.setState({malinicio:"Inicio de sesion incorrecto"})
            this.setState({contra : ""}); 
            
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
                if(result=="Funciona"){
                    this.setState({contra : ""}); 
              this.setState({usuario : ""});
              this.setState({malinicio:""})
                }
                if(result=="No disponible"){
                this.setState({usuario : ""});
                this.setState({contra : ""}); 
                this.setState({malinicio:"Ese usuario ya esta registrado"})
                }
            }
            
          )
        } 
render(){
    return(
        <div id='login'>      
            <div className="container p-4" >
                <div className="row" >
                    <div className="col-md-4">
                        <div className="card card-body">
                            
                                <div className="form-group">

                                    <input type="text"  value={this.state.usuario}  name='usuario' className="form-control" onChange={this.cambiousuario} placeholder="Usuario" autofocus required></input>
                                </div>
                                ㅤ
                                <div className="form-group">
                                    <input type="password" name="contra" value={this.state.contra} className="form-control" onChange={this.cambiocontra} placeholder="Contraseña" autofocus required></input>
                                    <span class="badge bg-danger">{this.state.malinicio}</span>
                                </div>
                                <br/>
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                <button onClick={this.iniciar} className="btn btn-success btn-block" name="guardar">Iniciar sesión</button>
                                ㅤ
                                <button onClick={this.subir} className="btn btn-success btn-block">Registrarme</button>
                                
                                
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
}

}

export default Login;



    