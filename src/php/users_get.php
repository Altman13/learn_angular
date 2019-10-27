<?php
include "header.inc.php";
$output = [];

if(isset($_GET['id']))
  {
    $all_users=$db->prepare("select * from users where id=:id");
    $all_users->bind_param(':id', $_GET["id"], PDO::PARAM_STR);
    $all_users->execute();
    $users=$all_users->fetchAll();
    $output=$users;
    //echo json_encode($users, JSON_UNESCAPED_UNICODE);
  }
  else{
    $all_user=$db->prepare("select * from users order by name");
    $all_user->execute();
    $user=$all_user->fetchAll();

     $output=$user;
    //echo json_encode($user, JSON_UNESCAPED_UNICODE);
  }
  echo json_encode($output, JSON_UNESCAPED_UNICODE);
// $conn= new mysqli("localhost", "plants", "root", "");
// if(!$conn->connect_errno)
// {
//   if(isset($_GET["id"]))
//   {
//     $id=$conn->real_escape_string($_GET["id"]);
//     $q= $conn->query("select * from users where id=".$id);
//     if($row=$q->fetch_assoc())
//     {
//         $output=["id"=> $row["id"], "name"=>$row["name"],
//         "password"=>$row["password"], "role"=>$row["role"]];
//     }
//   }
//   else
//   {
//     $q=$conn->query("select * from users order by name");
//     while ($row=$q->fetch_assoc())
//     {
//       $output []= ["id"=>$row["id"], "name"=>$row["name"],
//       "password"=>$row["password"], "role"=>$row["role"]];
//     }
//   }
//   $q->close();
//   $conn->close();

// }


// echo json_encode($output, JSON_UNESCAPED_UNICODE);
