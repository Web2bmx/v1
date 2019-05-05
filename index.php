<?php
	$host = $_SERVER['HTTP_HOST'];
	$host_arr = explode(".",$host);
	if($host_arr[0] !== "web2b" 
		&& $host_arr[0] !== "local" 
		&& $host_arr[0] !== "www"
		&& file_exists("./client_sites/" . $host_arr[0] . "/index.php")){
		$file = file_get_contents("./client_sites/" . $host_arr[0] . "/index.php");
		echo eval("?>$file");
	} else {
		include_once("home.php");
	}	
?>
