<?php

if(!$_POST) exit;

// Email verification, do not edit.
function isEmail($email_quote ) {
	return(preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/",$email_quote ));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$name_quote   = $_POST['name_quote'];
$lastname_quote   = $_POST['lastname_quote'];
$email_quote   = $_POST['email_quote'];
$phone_quote   = $_POST['phone_quote'];
$url_quote   = $_POST['url_quote'];
$message_quote   = $_POST['message_quote'];
$verify_quote   = $_POST['verify_quote'];

if(trim($name_quote) == '') {
	echo '<div class="error_message">You must enter your Name.</div>';
	exit();
} else if(trim($lastname_quote ) == '') {
	echo '<div class="error_message">You must enter your Last name.</div>';
	exit();
} else if(trim($email_quote) == '') {
	echo '<div class="error_message">Please enter a valid email address.</div>';
	exit();
} else if(!isEmail($email_quote)) {
	echo '<div class="error_message">You have enter an invalid e-mail address, try again.</div>';
	exit();
	} else if(trim($phone_quote) == '') {
	echo '<div class="error_message">Please enter a valid phone number.</div>';
	exit();
} else if(!is_numeric($phone_quote)) {
	echo '<div class="error_message">Phone number can only contain numbers.</div>';
	exit();
} else if(trim($url_quote) == '') {
	echo '<div class="error_message">Please enter your URL with http://.</div>';
	exit();
} else if(trim($message_quote) == '') {
	echo '<div class="error_message">Please enter your message.</div>';
	exit();
} else if(!isset($verify_quote) || trim($verify_quote) == '') {
	echo '<div class="error_message"> Please enter the verification number.</div>';
	exit();
} else if(trim($verify_quote) != '4') {
	echo '<div class="error_message">The verification number you entered is incorrect.</div>';
	exit();
}

//$address = "HERE your email address";
$address = "test@domain.com";


// Below the subject of the email
$e_subject = 'You\'ve been contacted by ' . $name_booking . '.';

// You can change this if you feel that you need to.
$e_body = "You have been contacted by $name_quote $lastname_quote with additional request of quotation for this site $url_quote" . PHP_EOL . PHP_EOL;
$e_content = "$message_quote" . PHP_EOL . PHP_EOL;
$e_reply = "You can contact $name_quote via email: $email_quote or telephone: $phone_quote .";

$msg = wordwrap( $e_body . $e_content . $e_reply, 70 );

$headers = "From: $email_quote" . PHP_EOL;
$headers .= "Reply-To: $email_quote" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

$user = "$email_quote";
$usersubject = "Thank You";
$userheaders = "From: info@domain.com\n";
$userheaders .= "MIME-Version: 1.0" . PHP_EOL;
$userheaders .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$userheaders .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;
$usermessage = "Thank you for contact SeoExpert. We will reply shortly with more details. Here a summary of your request: \n\n$e_content.  \n\n Call 0034 434324  for further information.";
mail($user,$usersubject,$usermessage,$userheaders);

if(mail($address, $e_subject, $msg, $headers)) {

	// Success message
	echo "<div id='success_page' style='padding:20px 0 40px 0; text-align:center;color:#555;'>";
	echo "<div style='font-size:90px; font-weight:normal; margin-bottom:20px;'><i class='icon_check'></i></div>";
	echo "<strong >Email Sent.</strong><br>";
	echo "Thank you <strong>$name_quote</strong>,<br> your message has been submitted. We will contact you shortly.";
	echo "</div>";

} else {

	echo 'ERROR!';

}
