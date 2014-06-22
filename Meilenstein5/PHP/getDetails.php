<?php
//$r = new HttpRequest('http://localhost:63342/WAW/Meilenstein5/HTML/detail.html', HttpRequest::METH_GET);

$string = file_get_contents(file_get_contents("http://localhost:63342/WAW/Meilenstein5/Json_Objekte/teilnehmer.json"));


return $string;
?>