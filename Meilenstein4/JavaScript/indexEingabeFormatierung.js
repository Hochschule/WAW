function eingabeUeberpruefung() {
    var vorname = $("input[name=vorname]").val();
    var name = $("input[name=name]").val();
    var email = $("input[name=email]").val();
    var matnr = $("input[name=matrikelnr]").val();
    var handy = $("input[name=handy]").val();

    var gabFehler=false;
    var eingabe = false;

    if (vorname.match("([a-z]|[A-Z])+")&& vorname!="Bitte Vorname eingeben") {

        eingabe = true;
        //vorName.className = "keinFehler";    //eigentlich soll es die roten kasten bei verbesserung wegmachen funktioniert nicht weiß nicht warum
    } else {
        if(gabFehler==false){  document.getElementById( 'vornameID' ).focus()}
        eingabe = false;
        var vorName = document.getElementById("vornameID");
       vorName.className = "fehlerEingabe";
       gabFehler=true;
        //alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }

    if (name.match("([a-z]|[A-Z])+")&& name!="Bitte Nachname eingeben") {
        eingabe = true;
    } else {
        if(gabFehler==false){  document.getElementById( 'nameID' ).focus()}
        eingabe = false;
        var _Name = document.getElementById("nameID");
        _Name.className = "fehlerEingabe";
        gabFehler=true;
        //alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }
    if (email.match("[^@]+@[^@]+.(de|org|net|com)")) {
        eingabe = true;
    } else {
        if(gabFehler==false){  document.getElementById( 'emailID' ).focus()}
        eingabe = false;
        var _email = document.getElementById("emailID");
        _email.className = "fehlerEingabe";
        gabFehler=true;
        //alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }

    if (matnr.match("([0-9]{7})")) {
        eingabe = true;
    } else {
        if(gabFehler==false){  document.getElementById( 'matnrID' ).focus()}
        eingabe = false;
        var _matnr = document.getElementById("matnrID");
        _matnr.className = "fehlerEingabe";
        gabFehler=true;
        //alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }

    if (handy.match("01[1-9][0-9]([0-9]{7,8})")) {
        eingabe = true;
    } else {
        if(gabFehler==false){  document.getElementById( 'handyID' ).focus()}
        eingabe = false;
        var _handy = document.getElementById("handyID");
        _handy.className = "fehlerEingabe";
        gabFehler=true;
        //alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }


    if(gabFehler){
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }
    return eingabe;
}
