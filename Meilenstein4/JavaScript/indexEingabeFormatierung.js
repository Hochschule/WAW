function eingabeUeberpruefung() {
    var vorname = $("input[name=vorname]").val();
    var name = $("input[name=name]").val();
    var email = $("input[name=email]").val();
    var matnr = $("input[name=matrikelnr]").val();
    var handy = $("input[name=handy]").val();

    var eingabeVorname = false;
    var eingabeName = false;
    var eingabeEmail = false;
    var eingabeMatnr = false;
    var eingabeHandy = false;
    var eingabe = false;

    if (vorname.match("([a-z]|[A-Z])+")) {
        eingabeVorname = true;
        var vorName = document.getElementById("vornameID");
        vorName.className = "richtigeEingabe";

    } else {
        eingabeVorname = false;
        var vorName = document.getElementById("vornameID");
        vorName.className = "fehlerEingabe";
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }

    if (name.match("([a-z]|[A-Z])+")) {
        eingabeName = true;
        var _Name = document.getElementById("nameID");
        _Name.className = "richtigeEingabe";
    } else {
        eingabeName = false;
        var _Name = document.getElementById("nameID");
        _Name.className = "fehlerEingabe";
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }
    if (email.match("[^@]+@[^@]+.(de|org|net|com)")) {
        eingabeEmail = true;
        var _email = document.getElementById("emailID");
        _email.className = "richtigeEingabe";
    } else {
        eingabeEmail = false;
        var _email = document.getElementById("emailID");
        _email.className = "fehlerEingabe";
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }
    if (matnr.match("([0-9]{7})")) {
        eingabeMatnr = true;
        var _matnr = document.getElementById("matnrID");
        _matnr.className = "richtigeEingabe";
    } else {
        eingabeMatnr = false;
        var _matnr = document.getElementById("matnrID");
        _matnr.className = "fehlerEingabe";
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }

    if (handy.match("01[1-9][0-9]([0-9]{7,8})")) {
        eingabeHandy = true;
        var _handy = document.getElementById("handyID");
        _handy.className = "richtigeEingabe";
    } else {
        eingabeHandy = false;
        var _handy = document.getElementById("handyID");
        _handy.className = "fehlerEingabe";
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }

    if((eingabeVorname==true)&&(eingabeName==true)&&(eingabeEmail==true)&&(eingabeMatnr==true)&&(eingabeHandy==true)){
        eingabe = true;
    }else{
    eingabe = false;}
    return eingabe;
}
