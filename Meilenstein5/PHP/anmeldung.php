<?php
/**
 * Created by PhpStorm.
 * User: SimmertL
 * Date: 19.06.14
 * Time: 11:38
 */

$name = $_POST;
if($name["messe"]=="cebit")
{
    $my_file = 'C:\xampp\htdocs\Meilenstein5\Textfiles\cebit.txt';
    $handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
}elseif($name["messe"]=="conit")
{
    $my_file = 'C:\xampp\htdocs\Meilenstein5\Textfiles\conit.txt';
    $handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
}elseif($name["messe"]=="webtechcon")
{
    $my_file = 'C:\xampp\htdocs\Meilenstein5\Textfiles\webtech.txt';
    $handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
}


fwrite($handle,$name["vorname"]);
fwrite($handle," ");
fwrite($handle,$name["name"]);
fwrite($handle,", ");
fwrite($handle,$name["matrikelnr"]);
fwrite($handle,", ");
fwrite($handle,$name["email"]);
fwrite($handle,", ");
fwrite($handle,$name["handy"]);
fwrite($handle,", ");
fwrite($handle,$name["studiengang"]);
fclose($handle);

?>