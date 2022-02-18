<?php
    include("conexion.php");
    include("cabecera.php");

    $contra= $_POST['contra'];
    $usuario=$_POST['usuario'];
    $query =("SELECT * FROM registros");
    $resultado = mysqli_query($conex, $query);
    $resultado=mysqli_fetch_all($resultado,MYSQLI_ASSOC);
  
        foreach($resultado as $opcion){
        $nombre=$opcion["usuario"];
        $pass=$opcion["contraseña"];
        $id=$opcion["id_usuario"];
        if($usuario==$nombre && $contra== $pass){
            echo json_encode("Funciona");
            
        }
        }   
    
    ?>