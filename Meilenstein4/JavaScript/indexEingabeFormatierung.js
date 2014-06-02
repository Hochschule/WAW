function eingabeUeberpruefung() {
    var vorname = $("input[name=vorname]").val();
    var name = $("input[name=name]").val();
    var email = $("input[name=email]").val();
    var matnr = $("input[name=matrikelnr]").val();
    var handy = $("input[name=handy]").val();

    var eingabe = false;

    if (vorname.match("([a-z]|[A-Z])+")) {
        eingabe = true;
        $(vorname).css("border-style: none");
    } else {
        eingabe = false;
        var vorName = document.getElementById("vornameID");
        vorName.className = "fehlerEingabe";
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }

    if (name.match("([a-z]|[A-Z])+")) {
        eingabe = true;
    } else {
        eingabe = false;
        var _Name = document.getElementById("nameID");
        _Name.className = "fehlerEingabe";
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }

    if (matnr.match("([0-9]{7})")) {
        eingabe = true;
    } else {
        eingabe = false;
        var _matnr = document.getElementById("matnrID");
        _matnr.className = "fehlerEingabe";
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }

    if (handy.match("01[1-9][0-9]([0-9]{7,8})")) {
        eingabe = true;
    } else {
        eingabe = false;
        var _handy = document.getElementById("handyID");
        _handy.className = "fehlerEingabe";
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }

    if (email.match("[^@]+@[^@]+.(de|org|net|com)")) {
        eingabe = true;
    } else {
        eingabe = false;
        var _email = document.getElementById("emailID");
        _email.className = "fehlerEingabe";
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }

    return eingabe;
}
