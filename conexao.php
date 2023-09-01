<?php 
header('Access-Control-Allow-Origin: *'); 
    $con = new PDO('mysql:host=localhost;dbname=dbpoke','root','');
    if(!$con)
        echo "erro";
?>