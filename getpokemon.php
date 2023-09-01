<?php 
include("conexao.php");
 header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');
   
$dados=$con->query("SELECT * FROM pokemon");
$dados->execute();

if($dados->rowCount()>=1)
echo json_encode($dados->fetchAll(PDO::FETCH_ASSOC));
else
echo 0;
            

?>