<?php
$destinatario = "Alejandromunoz.mec@gmail.com";

$nombre = $_POST["name"];
$email = $_POST["email"];
$mensaje = $_POST["message"];


$header = "Enviado desde la página Áridos quinta región";
$mensajeCompleto = $mensaje . "\nCorreo: " . $email . "\nAtentamente: " . $nombre;

mail($destinatario,$header, $mensajeCompleto);
echo "<script>alert('Correo enviado exitosamente')</script>";
echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";

?>