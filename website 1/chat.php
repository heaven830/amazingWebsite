<?php
$myfile = fopen("chatList.txt", "a");
$user = htmlspecialchars($_POST['user']);
$message  = htmlspecialchars($_POST['message']);
$newOutput = $user, $message, "\n";

echo  "\n", $user, $message;
fwrite($myFile, $newOutput);

?>