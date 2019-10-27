<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');

header("Content-type: application/json; charset=UTF-8");
header("Cache-control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

// These variables define the connection information for your MySQL database
$username = "root";
$password = "";
$host = "localhost";
$dbname = "plants";

/*$username = "root";
$password = "1";
$host = "localhost";
$dbname = "antanta_last";*/
$options = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
try { $db = new PDO("mysql:host={$host};dbname={$dbname};charset=utf8", $username, $password, $options); }
catch(PDOException $ex){ die("Failed to connect to the database: " . $ex->getMessage());}
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
header('Content-Type: text/html; charset=utf-8');
session_start();

?>


