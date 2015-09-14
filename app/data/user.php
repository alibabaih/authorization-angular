<?php
    $user = json_decode(file_get_contents('php://input')); // get user from json headers
    if($user->mail == 'alibabaih@gmail.com' && $user->pass=='1234')
?>