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

function init(monstre) {
    name = monstre.name;
    live = monstre.life;
    money = monstre.money;
    awake = monstre.awake;
}


export default {
    init: init,
    get: get
}

