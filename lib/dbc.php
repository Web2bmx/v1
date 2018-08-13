<?php

$dbh = new mysqli("localhost", "root", "", "nektuzco_web2b");

// �Oh, no! Existe un error 'connect_errno', fallando as� el intento de conexi�n
if ($dbh->connect_errno) {
    // La conexi�n fall�. �Que vamos a hacer? 
    // Se podr�a contactar con uno mismo (�email?), registrar el error, mostrar una bonita p�gina, etc.
    // No se debe revelar informaci�n delicada

    // Probemos esto:
    echo "Lo sentimos, este sitio web est� experimentando problemas.";

    // Algo que no se deber�a de hacer en un sitio p�blico, aunque este ejemplo lo mostrar�
    // de todas formas, es imprimir informaci�n relacionada con errores de MySQL -- se podr�a registrar
    echo "Error: Fallo al conectarse a MySQL debido a: \n";
    echo "Errno: " . $dbh->connect_errno . "\n";
    echo "Error: " . $dbh->connect_error . "\n";
    
    // Podr�a ser conveniente mostrar algo interesante, aunque nosotros simplemente saldremos
    exit;
}