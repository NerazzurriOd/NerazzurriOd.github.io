<?php

/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$tel = htmlspecialchars($_POST["tel"]);
$website = htmlspecialchars($_POST["website"]);
$message = htmlspecialchars($_POST["message"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);

/* Ваш адрес и тема сообщения */
$address = "dyniknikolay@gmail.com";
$sub = "Сообщение с сайта Nikolay Dynik";

/* Формат письма */
$mes = "Сообщение с сайта Nikolay Dynik.\n
Имя отправителя: $name 
Электронный адрес отправителя: $email
Телефон отправителя: $tel
Сайт отправителя: $website
Текст сообщения:
$message";


if (empty($bezspama)) /* Оценка поля bezspama - должно быть пустым*/
{
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$email> \r\n Reply-To: $email \r\n"; 
if (mail($address, $sub, $mes, $from)) {
	header('Refresh: 5; URL=http://biznessystem.ru');
	echo 'The letter was sent after 5 seconds, you will return to Nikolay Dynik site ';}
else {
	header('Refresh: 5; URL=http://biznessystem.ru');
	echo 'The letter was not sent , within 5 seconds you are back on the Nikolay Dynik site';}
}
exit; /* Выход без сообщения, если поле bezspama чем-то заполнено */
?>