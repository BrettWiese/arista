<?php

// PLATFORM INDEPENDENT END OF LINE FOR CLARITY
$eol = PHP_EOL;

// EMAIL REQUIREMENTS
$to = "info@knctrnl.com";

$subject = "Booking Request";

$body =  "From: " . $_POST ["name"] . "<br>" . "<br>" . "Email: " . $_POST ["email"] . "<br>" . "<br>" . "Number: " . $_POST ["number"] . "<br>" . "<br>" . "Artist: " . $_POST ["selectartist"] . "<br>" . "<br>" . "Message: " . $_POST ["message"] . "<br>" .  "<br>" . " $eol";

$headers = "MIME-Version: 1.0 $eol";
$headers .= "Content-type: text/html; charset=iso-8859-1 $eol";

mail($to, $subject, $body, $headers);

// REDIRECT TO INDEX
header ("Location: index.php?emailsent=true");



?>