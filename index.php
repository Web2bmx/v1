<?php
	$host = $_SERVER['HTTP_HOST'];
	$host_arr = explode(".",$host);
	//$remoteFile = $_SERVER['HTTPS'] ? "https://" : "http://" . str_replace($host_arr[0] . '.','',$host) . "/client_sites/" . $host_arr[0] . "/index.html";
	if($host_arr[0] !== "web2b" 
		&& $host_arr[0] !== "local" 
		&& $host_arr[0] !== "www"
		&& file_exists("./client_sites/" . strtolower($host_arr[0]) . "/index.html")){
		$file = file_get_contents("./client_sites/" . strtolower($host_arr[0]) . "/index.html");
		echo eval("?>$file");
	} else {
		include_once("home.php");
		// $handle = @fopen($remoteFile, 'r');
		// if ($handle) {
		// 	echo "El fichero $nombre_fichero existe";
		// } else {
		// 	echo "El fichero $nombre_fichero no existe";
		// }		
		// echo $remoteFile;
	}	
?>
