<?php 
 include("conexao.php");
 header('Access-Control-Allow-Origin:*'); 
 header('Content-Type: application/json');


 


function setpokemon(){
include("conexao.php");
header('Access-Control-Allow-Origin:*'); 
header('Content-Type: application/json');
if(isset($_POST['name']))
{
    $query= $con->prepare("INSERT INTO pokemon (name,type,front_default,back_default)  VALUES (:nome,:tipo,:front,:back)");
    $query->bindValue(':nome',$_POST['name'],PDO::PARAM_STR);
    $query->bindValue(':tipo',$_POST['type'],PDO::PARAM_STR);
    $query->bindValue(':front',$_POST['front_default'],PDO::PARAM_STR);
    $query->bindValue(':back',$_POST['back_default'],PDO::PARAM_STR);
    
    $query->execute();

if($query->rowCount()>=1){
    echo 1;
}else
    echo 0;  

}
}


function getpokemon(){
include("conexao.php");
header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');
   
$dados=$con->query("SELECT * FROM pokemon");
$dados->execute();

if($dados->rowCount()>=1)
echo json_encode($dados->fetchAll(PDO::FETCH_ASSOC));
else
echo 0;
}

 $flag=$_GET['opcao'];

 switch($flag){
    case "savepokemon":
        setpokemon();
        break;
    case "getpokemon":
        getpokemon();
        break;

    
 }

?>