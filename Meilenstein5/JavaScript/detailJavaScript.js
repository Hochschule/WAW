var jsonForFairs;
var jsonForContributors;


function erstelleMesseTabelle() {

    var messeDiv = document.getElementById("messeTabelle");
    var messeSpalten = jsonForFairs.header.length;
    var messeZeilen = jsonForFairs.data.messe.length

    var dummyTable = document.createElement('table');
    dummyTable.id = "messeTableId";
    var dummyThead = document.createElement('thead');
    dummyThead.id = 'theadId';
    dummyThead.className = 'tabellenTd';
    dummyTable.appendChild(dummyThead);

    for (var ueberschrift = 0; ueberschrift < messeSpalten; ueberschrift++) {
        dummyThead.appendChild(document.createElement('th'));
    }

    for (var zeilenStelle = 0; zeilenStelle < messeZeilen; zeilenStelle++) {
        var dummyTr = document.createElement('tr');
        dummyTr.id = 'tr' + zeilenStelle;
        for (var spaltenStelle = 0; spaltenStelle < messeSpalten; spaltenStelle++) {
            var dummyTd = document.createElement('td');
            dummyTd.id = 'td' + spaltenStelle;
            dummyTd.className = 'tabellenTd';
            dummyTr.appendChild(dummyTd);
        }
        dummyTable.appendChild(dummyTr);
    }
    messeDiv.appendChild(dummyTable);

    function fuelleMesseDaten() {

        for (var ueberschrift = 0; ueberschrift < jsonForFairs.header.length; ueberschrift++) {
            dummyThead.children[ueberschrift].innerHTML = jsonForFairs.header[ueberschrift];
        }
        var temp=0;
        for (var datenZeile = 0; datenZeile < jsonForFairs.data.messe.length; datenZeile++) {
            var dummyTr = document.getElementById('tr' + datenZeile);
            for (var datenSpalte = 0; datenSpalte < dummyTr.children.length; datenSpalte++) {
                dummyTr.children[datenSpalte].innerHTML = jsonForFairs.data[Object.keys(jsonForFairs.data)[datenSpalte]][temp];

            }
            temp++;
            if (temp == dummyTr.children.length+1) {
                temp = 0;
            }
        }

    }

    fuelleMesseDaten();

}


function onLoad(jsnObj) {
    jsonForFairs = JSON.parse(loadPage("/../WAW/Meilenstein3/Json_Objekte/messe.json"));
    jsonForContributors = JSON.parse(jsnObj);

    function loadPage(url) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, false);
        xmlhttp.send();
        return xmlhttp.response;
    }

    erstelleMesseTabelle();
}

function erstelleTabellenRahmen(tabelle, spalten, zeilen) {
    if (document.getElementById('nt')) {
        document.getElementById('nt').remove();
    }
    var dummyThead = document.createElement('thead');
    dummyThead.id = 'theadId';
    dummyThead.className = 'tabellenTd';
    tabelle.appendChild(dummyThead);

    //Setze PlaceHolder für Überschriftrn
    for (var ueberschrift = 0; ueberschrift < spalten; ueberschrift++) {
        dummyThead.appendChild(document.createElement('th'));
    }

    for (var zeilenStelle = 0; zeilenStelle < zeilen; zeilenStelle++) {
        var dummyTr = document.createElement('tr');
        dummyTr.id = 'tr' + zeilenStelle;
        for (var spaltenStelle = 0; spaltenStelle < spalten; spaltenStelle++) {
            var dummyTd = document.createElement('td');
            dummyTd.id = 'td' + spaltenStelle;
            dummyTd.className = 'tabellenTd';
            dummyTr.appendChild(dummyTd);
        }
        tabelle.appendChild(dummyTr);
    }

}

function fülleDaten(newTable, data) {
    var daten = jsonForContributors[data];
    var tabellenHead = document.getElementById('theadId');
    //Fülle Kopf der Tabelle.
    for (var headerZeile = 0; headerZeile < tabellenHead.children.length; headerZeile++) {
        //alert(daten.header[headerZeile]); //DEBUG-OUTPUT
        tabellenHead.children[headerZeile].innerHTML = daten.header[headerZeile];
    }
    //Fülle Daten der Tabelle
    var temp = 0;
    for (var datenZeile = 0; datenZeile < daten.data.name.length; datenZeile++) {
        var dummyTr = document.getElementById('tr' + datenZeile);
        for (var datenSpalte = 0; datenSpalte < dummyTr.children.length; datenSpalte++) {
            dummyTr.children[datenSpalte].innerHTML = daten.data[Object.keys(daten.data)[datenSpalte]][temp];

        }
        temp++;
        if (temp == dummyTr.children.length) {
            temp = 0;
        }
    }

}


function tabellenOperation(hauptDiv, clickedElement) {

    var newTable = löscheUndErzeugeTabelle();
    var defaultString = 'cebit';
    if (clickedElement) {
        defaultString = clickedElement;
    }
    erstelleTabellenRahmen(newTable, Object.keys(jsonForContributors[defaultString].data).length,
        jsonForContributors[defaultString].data.name.length);
    hauptDiv.appendChild(newTable);
    fülleDaten(newTable, defaultString);

    function löscheUndErzeugeTabelle() {
        if(document.getElementById('messeTableId')){
            document.getElementById('messeTableId').remove();
        }
        if (document.getElementById('nt')) {
            document.getElementById('nt').remove();
        }
        var newTable = document.createElement('table');
        newTable.className = 'messeTableId';

        newTable.id = 'nt';
        return newTable;
    }
}
function onClickTeilnehmer() {
    var teilnehmerTH = document.getElementById("teilnehmer");
    var messeTH = document.getElementById("messe");
    if (teilnehmerTH.className == "hintergrundDunkelBlau") {
        // mache nichts
    } else {
        teilnehmerTH.setAttribute("class", "hintergrundDunkelBlau");
        messeTH.setAttribute("class", "");

        //Messe Tabelle auf unsichtbar stellen
        var messeTabelle = document.getElementById("messeTabelle");
        messeTabelle.setAttribute("class", "messeTabelleInvisible");

        // kleine Navi einbleden
        var kleineNaviId = document.getElementById("kleineNavigation");
        kleineNaviId.setAttribute("class", "kleineNavigationVisible");

        var hauptDiv = document.getElementById('kleineNavigation');
        tabellenOperation(hauptDiv, null);
    }
}


function onClickMesse() {
    var messeTH = document.getElementById("messe");
    var teilnehmerTH = document.getElementById("teilnehmer");

    if (messeTH.className == "hintergrundDunkelBlau") {
        // mache nichts
    } else {
        messeTH.setAttribute("class", "hintergrundDunkelBlau");
        teilnehmerTH.setAttribute("class", "");

        //kleinen Navi ausblenden
        var kleineNaviId = document.getElementById("kleineNavigation");
        kleineNaviId.setAttribute("class", "kleineNavigationInvisible");

        // Messe Tabelle einblenden
        var messeTabelle = document.getElementById("messeTabelle");
        messeTabelle.setAttribute("class", "messeTabelleVisible");
        erstelleMesseTabelle();
    }
}

function onClickCebit() {
    var naviCebit = document.getElementById("cebit");

    if (naviCebit.className != "kleineNaviSelected") {
        //setzte die selected Farbe
        naviCebit.setAttribute("class", "kleineNaviSelected");

        var naviConit = document.getElementById("conhit");
        var naviWebTechCon = document.getElementById("webtechcon");

        // Macht die Selected farbe wieder weg
        naviConit.setAttribute("class", "kleineNaviNotSelected");
        naviWebTechCon.setAttribute("class", "kleineNaviNotSelected");

        var hauptDiv = document.getElementById('kleineNavigation');

        tabellenOperation(document.getElementById('kleineNavigation'), 'cebit');
    }


}

function onClickConit(element) {

    var naviConit = document.getElementById("conhit");
    if (naviConit.className == "kleineNaviSelected") {
        // mache nichts
    } else {
        //setzte die selected Farbe
        naviConit.setAttribute("class", "kleineNaviSelected");

        var naviCebit = document.getElementById("cebit");
        var naviWebTechCon = document.getElementById("webtechcon");

        // Macht die Selected farbe wieder weg
        naviCebit.setAttribute("class", "kleineNaviNotSelected");
        naviWebTechCon.setAttribute("class", "kleineNaviNotSelected");
    }
    tabellenOperation(document.getElementById('kleineNavigation'), 'conhit');
}

function onClickWebtechcon(element) {
    var naviWebTechCon = document.getElementById("webtechcon");
    if (naviWebTechCon.className == "kleineNaviSelected") {
        // mache nichts
    } else {
        //setzte die selected Farbe
        naviWebTechCon.setAttribute("class", "kleineNaviSelected");

        var naviCebit = document.getElementById("cebit");
        var naviConit = document.getElementById("conhit");

        // Macht die Selected farbe wieder weg
        naviCebit.setAttribute("class", "kleineNaviNotSelected");
        naviConit.setAttribute("class", "kleineNaviNotSelected");
    }
    tabellenOperation(document.getElementById('kleineNavigation'), 'webtechcon');
}
