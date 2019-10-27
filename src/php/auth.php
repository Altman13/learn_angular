<?php

$output=["role" => ""];
switch($_GET["action"]){
  case "login":
  $conn= new mysqli("localhost", "plants", "plants","plants");
  if(!($conn->connect_errno)) {
    $_POST=json_decode(file_get_contents("php://input"), true);
    $name=$conn->real_escape_string($_POST["name"]);
    $password=$conn->real_escape_string($_POST["password"]);
    $q=$db->prepare("select role from users where name=:name and password=:password");
    $q->bind_param(':name', $_POST['name'], PDO::PARAM_STR);
    $q->bind_param(':password', $_POST['password'], PDO::PARAM_STR);
    $q->execute();
    $role=$q->fetchAll();
    if($role){
      session_start();
      $_SESSION["role"]=$role["role"];
      $output["role"]=$role["role"];
    }
  }
  break;
  case "logout":
  session_start();
  if((isset($_SESSION["role"])) && ($_SESSION["role"] !="")){
    session_destroy();
    $output["role"]="";
  }
  break;
  case "check":
  session_start();
  if((isset($_SESSION["role"])) && ($_SESSION["role"] !="")){
    $output["role"] = $_SESSION["role"];
  } else {
    session_destroy();
  }
  break;
}
include "header.inc.php";
echo json_encode($output, JSON_UNESCAPED_UNICODE);
?>
