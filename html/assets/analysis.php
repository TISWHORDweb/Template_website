<?php

if(!$_POST) exit;

// Email verification, do not edit.
function isEmail($email_analysis) {
	return(preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/",$email_analysis ));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$name_analysis    = $_POST['name_analysis'];
$email_analysis    = $_POST['$email_analysis'];

if(trim($name_analysis ) == '') {
	echo '<div class="error_message">Enter your Site URL with http://.</div>';
	exit();
} else if(trim($email_analysis) == '') {
	echo '<div class="error_message">Please enter a valid email address.</div>';
	exit();
}
else if(!isEmail($email_analysis)) {
	echo '<div class="error_message">You have enter an invalid e-mail address, try again.</div>';
	exit();
}
//$address = "your email address";
$address = "info@domain.com";

// Below the subject of the email
$e_subject = 'New Site URL Analysis';

// You can change this if you feel that you need to.
$e_body = " $email_analysis request a free analysis for the following website: $name_analysis" . PHP_EOL . PHP_EOL;
$e_content = "\"$email_analysis\"" . PHP_EOL . PHP_EOL;

$msg = wordwrap( $e_body . $e_content, 70 );

$headers = "From: $email_analysis" . PHP_EOL;
$headers .= "Reply-To: $email_analysis" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

$user = "$email_analysis";
$usersubject = "Thank You";
$userheaders = "From: info@domain.com\n";
$userheaders .= "MIME-Version: 1.0" . PHP_EOL;
$userheaders .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$userheaders .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;
$usermessage = "Thank you for request a free analysis for the following website: $name_analysis";
mail($user,$usersubject,$usermessage,$userheaders);

if(mail($address, $e_subject, $msg, $headers)) {

	// Success message
	echo "<div id='success_page' style='padding-top:11px'>";
	echo "Thank you <strong>$email_analysis</strong>, your request is submitted!!";
	echo "</div>";

} else {

	echo 'ERROR!';

}