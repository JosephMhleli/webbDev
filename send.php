<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "lihle@mayilaindustries.com"; // replace with your email address
  $subject = "Contact Form Submission";
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
  } else {
    http_response_code(500);
  }
}
?>
