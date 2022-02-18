<?php
include("conexion.php");
include("cabecera.php");

$query ="SELECT * FROM personas";
$resultado = mysqli_query($conex, $query);
$resultado=mysqli_fetch_all($resultado,MYSQLI_ASSOC);
echo json_encode($resultado);

?>