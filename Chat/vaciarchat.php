<?php
include("conexion.php");
include("cabecera.php");

$query ="DELETE FROM personas";
$resultado = mysqli_query($conex, $query);
echo json_encode("funciona");

?>