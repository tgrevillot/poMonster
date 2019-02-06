let name = "Sans Nom";
let live = 200;
let money = 1000;
let awake = true;

function setName(nom) {
    name = nom;
}

function get() {
    return {
        nom: name,
        vie: live,
        argent: money,
        enVie: awake
    };
}

function init(nom, vie = 200, monnaie = 1000, enVie = true) {
    name = nom;
    live = vie;
    money = monnaie;
    awake = enVie;
}


export default {
    init: init,
    get: get
}

