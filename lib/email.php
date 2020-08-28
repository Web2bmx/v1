<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/src/Exception.php';
require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/SMTP.php';

// $newEmail = new Email('prueba 1', [], ['nombre' => 'Carlos', 'correo' => 'cmendez007@gmail.com']);
// $newEmail->send();

class Email {

  private $mail;
  private $from = array('nombre' => 'Web2b : Contacto', 'correo' => 'contacto@web2b.mx');

  function __construct($subject,$data,$to) {
    $mail = new PHPMailer(true);

    //$mail->SMTPDebug = 2;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'mail.web2b.mx';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'contacto@web2b.mx';                     // SMTP username
    $mail->Password   = '@MiC0ntraw3b2b';                               // SMTP password
    //$mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 26;                                    // TCP port to connect to
    $mail->CharSet = 'UTF-8';

    //Recipients
    $mail->setFrom($this->from['correo'], $this->from['nombre']);
    $mail->addAddress($to['correo'], $to['nombre']);     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;

    $this->mail = $mail;

    $this->setMessage($data, $to['correo']);
  }

  function setMessage($data, $correo) {
    // $serverName = $_SERVER['SERVER_NAME'];

    // $actualServer = "https://www.web2b.mx/";
    // if(strpos($serverName,"local") !== FALSE){
    //   $actualServer = "http://local.web2b.site.mx/";
    // }

    // $html = file_get_contents($actualServer . '/assets/template/email_template.php');

    // $unsubscribeLink = "api/unsubscribe.php?ref=" . $data['coto'] . "&mail=$correo";

    // $html = str_replace('##logo##', $data['logo'], $html);
    // $html = str_replace('##titulo##', $data['titulo'], $html);
    // $html = str_replace('##mensaje##', $data['mensaje'], $html);
    // $html = str_replace('##actionlink##', $data['actionlink'], $html);
    // $html = str_replace('##baja-link##', $unsubscribeLink, $html);

    $this->mail->Body = 'hola';
  }

  function send(){
    try{
      $this->mail->send();
    } catch (Exception $e) {
      echo "<pre>";
      print_r($e);
      print_r($this);

      error_log("Error al enviar correo: " . $this->mail->ErrorInfo . "{" . print_r($this) . "}", 1,
      "cmendez007@gmail.com");
    }
  }


}

