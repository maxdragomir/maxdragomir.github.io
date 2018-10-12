<?php
if($_POST) {

    $to_Email = "nasus88@mail.ru"; // Write your email here

    // Use PHP To Detect An Ajax Request
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

        // Exit script for the JSON data
        $output = json_encode(
        array(
            'type'=> 'error',
            'text' => 'Request must come from Ajax'
        ));

        die($output);
    }

    // Checking if the $_POST vars well provided, Exit if there is one missing
    if(!isset($_POST["userName"]) || !isset($_POST["userEmail"]) || !isset($_POST["userSubject"]) || !isset($_POST["userMessage"])) {

        $output = json_encode(array('type'=>'error', 'text' => '<i class="icon ion-close-round"></i> Заполните все поля!'));
        die($output);
    }

    // PHP validation for the fields required
    if(empty($_POST["userName"])) {
        $output = json_encode(array('type'=>'error', 'text' => '<i class="icon ion-close-round"></i> Извините, но ваше имя слишком короткое или не указано.'));
        die($output);
    }

    if(!filter_var($_POST["userEmail"], FILTER_VALIDATE_EMAIL)) {
        $output = json_encode(array('type'=>'error', 'text' => '<i class="icon ion-close-round"></i> Введите корректный Email.'));
        die($output);
    }

    if(empty($_POST["userSubject"])) {
        $output = json_encode(array('type'=>'error', 'text' => '<i class="icon ion-close-round"></i> Извините, но тема не указана.'));
        die($output);
    }

    // To avoid the spammy bots, you can change the value of the minimum characters required. Here it's <20
    if(strlen($_POST["userMessage"])<10) {
        $output = json_encode(array('type'=>'error', 'text' => '<i class="icon ion-close-round"></i> Слишком короткое сообщение!
Минимум 10 символов.'));
        die($output);
    }

    // Proceed with PHP email
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type:text/html;charset=UTF-8' . "\r\n";
    $headers .= 'From: My website' . "\r\n";
    $headers .= 'Reply-To: '.$_POST["userEmail"]."\r\n";

    'X-Mailer: PHP/' . phpversion();

    // Body of the Email received in your Mailbox
    $emailcontent = 'Эй!У тебя новое сообщение от <strong>'.$_POST["userName"].'</strong><br/><br/>'. "\r\n" .
                'Его сообщение: <br/> <em>'.$_POST["userMessage"].'</em><br/><br/>'. "\r\n" .
                '<strong> Отправитель : '.$_POST["userEmail"].'</strong>' . "\r\n" ;

    $Mailsending = @mail($to_Email, $_POST["userSubject"], $emailcontent, $headers);

    if(!$Mailsending) {

        //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
        $output = json_encode(array('type'=>'error', 'text' => '<i class="icon ion-close-round"></i> Упс! Что-то пошло не так, попробуйте еще раз.'));
        die($output);

    } else {
        $output = json_encode(array('type'=>'message', 'text' => '<i class="icon ion-checkmark-round"></i> Здравствуйте '.$_POST["userName"] .', Ваше сообщение было отправлено !'));
        die($output);
    }
}
?>