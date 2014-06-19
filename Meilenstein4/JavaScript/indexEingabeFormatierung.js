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
    var gabFehler=false;

    if (vorname.match("([a-z]|[A-Z])+")&& vorname!="Bitte Vorname eingeben") {
        eingabeVorname = true;
        var vorName = document.getElementById("vornameID");

        vorName.className = "richtigeEingabe";

    } else {
        eingabeVorname = false;
        var vorName = document.getElementById("vornameID");

        vorName.className = "fehlerEingabe";
        if(!gabFehler){
        document.getElementById("vornameID").focus();
            gabFehler=true;
    }
    }

    if (name.match("([a-z]|[A-Z])+") && name !="Bitte Nachname eingeben") {
        eingabeName = true;
        var _Name = document.getElementById("nameID");
        _Name.className = "richtigeEingabe";
    } else {
        eingabeName = false;
        var _Name = document.getElementById("nameID")

        _Name.className = "fehlerEingabe";
        if(!gabFehler){
        var _Name = document.getElementById("nameID").focus();
    }gabFehler=true;
    }
    if (email.match("[^@]+@[^@]+.(de|org|net|com)")) {
        eingabeEmail = true;
        var _email = document.getElementById("emailID");
        _email.className = "richtigeEingabe";
    } else {

        eingabeEmail = false;
        var _email = document.getElementById("emailID");
        _email.className = "fehlerEingabe";
        if(!gabFehler){
        var _email = document.getElementById("emailID").focus();
        }gabFehler=true;

    }
    if (matnr.match("([0-9]{7})")) {
        eingabeMatnr = true;
        var _matnr = document.getElementById("matnrID");
        _matnr.className = "richtigeEingabe";
    } else {
        eingabeMatnr = false;
        var _matnr = document.getElementById("matnrID");
        _matnr.className = "fehlerEingabe";
        if(!gabFehler){
        var _matnr = document.getElementById("matnrID").focus();
        }gabFehler=true;

    }

    if (handy.match("01[1-9][0-9]([0-9]{7,8})+$")) {
        eingabeHandy = true;
        var _handy = document.getElementById("handyID");
        _handy.className = "richtigeEingabe";
    } else {
        eingabeHandy = false;
        var _handy = document.getElementById("handyID");
        _handy.className = "fehlerEingabe";
        if(!gabFehler){
        var _handy = document.getElementById("handyID").focus();
        }gabFehler=true;

    }

    if((eingabeVorname==true)&&(eingabeName==true)&&(eingabeEmail==true)&&(eingabeMatnr==true)&&(eingabeHandy==true)){
        eingabe = true;
    }else{
    alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    eingabe = false;}
    return eingabe;
}
