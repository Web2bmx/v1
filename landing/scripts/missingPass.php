<?php
// email de destino
        $email = $correo;

        // asunto del email
        $subject = "Web2bmx - Ingreso";

        // Cuerpo del mensaje
        $mensaje = "---------------------------------- <br />";
        $mensaje.= "NOMBRE: " . $nombre. "<br />";
        $mensaje.= "Link: http://www.web2b.mx/crea/?user=" . $id . "<br />";
        $mensaje.= "---------------------------------- <br />";

        // headers del email
        $headers['MIME-Version'] = '1.0';
        $headers['Content-type'] = 'text/html; charset=iso-8859-1';

        // Cabeceras adicionales
        $headers['To'] = $email;
        $headers['From'] = 'contacto@web2b.mx';
        $headers['Subject'] = $subject;

        // Enviamos el mensaje
//		if(!@mail($email, $subject, $mensaje, $headers)) echo "0m";		
//		else echo "1m";



        $mail = & Mail::factory("smtp", array(
                    'host' => 'mail.web2b.mx',
                    'port' => '26',
                    'auth' => "PLAIN",
                    'socket_options' => array('ssl' => array('verify_peer_name' => false)),
                    'username' => 'contacto@web2b.mx',
                    'password' => '@MiC0ntraw3b2b'));

        echo $mail->send($email, $headers, $mensaje);
        
        echo '{ "mensaje": "Enviado correctamente", "ok": 1, "link": "http://www.web2b.mx/crea/?user=' . $id . '" }';
        http_response_code(400);
        exit;