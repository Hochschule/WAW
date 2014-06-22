/**
 * Created by psche_000 on 22.06.14.
 */


    function sendRequest() {
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange=function() {
        //Wenn der Request ankam und ok (200) war dann tue folgendes:
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        //der gesendete ResponseText vom Server wird in ein JSON File geparst
        var jsonObject = $.parseJSON(xmlhttp.responseText);
        //Hier kann nun normal wie bisher bekannt mit dem JSON-Objekt umgegangen werden.

       onLoad(jsonObject);


        }
    }
    //Hier wird angegeben welche HTTP-Methode und an welche PHP-Datei der Request gesendet wird xmlhttp.open("GET","hsmannheim.php");
    xmlhttp.open("GET","getDetails.php");
    xmlhttp.send();
return jsonObject;
        }

