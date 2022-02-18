<?php
    include("conexion.php");
    include("cabecera.php");

    $mensaje= $_POST['mensaje'];
    $usuario=$_POST['usuario'];

    if(  $mensaje != "" && $usuario != "" ) {
        
        $query =$conex->prepare("INSERT INTO personas(usuario,mensaje) VALUES(?,?)");
        $query->bind_param("ss",$usuario,$mensaje);
        $query->execute();
        
        echo json_encode("Funciona");


    }
    else{
        echo "Error";
    }
    ?>