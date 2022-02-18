 <?php
    include("conexion.php");
    include("cabecera.php");
    try{
    $usuario= $_POST['usuario'];
    $contra=$_POST['contra'];
    $encontrado=false;
    
    if(  $contra != "" && $usuario != "" ) {
        
        $query=("SELECT * FROM registros");
        foreach ($conex->query($query) as $dato) {
            if($dato["usuario"]==$usuario){  
                echo json_encode("No disponible");
                $encontrado=true;//Si lo encuentra lo cambiamos a false
            }
        }
        if($encontrado==false){
        $query =$conex->prepare("INSERT INTO registros(usuario,contraseña) VALUES(?,?)");
        $query->bind_param("ss",$usuario,$contra);
        $query->execute();
        
        echo json_encode("Funciona");
        }
       
    }
    }
    catch(PDOException $e){
        echo "ERROR: " . $e->getMessage();
    }

    ?>