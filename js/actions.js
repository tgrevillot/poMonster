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

function actionRealisable(nbVieSuffisante, nbArgent = 0) {
    return awake && live >= nbVieSuffisante && money >= nbArgent;
}

function run() {
    if(actionRealisable(1))
        live -= 1;
}

function fight() {
    if(actionRealisable(3))
        live -= 3;
}

function work() {
    if(actionRealisable(1)) {
        live--;
        money += 2;
    }
}

function eat() {
    if(actionRealisable(1, 3)) {
        money -= 3;
        live += 2;
    }
}

function sleep(fonction) {
    if(actionRealisable(1)) {
        awake = false;
        setTimeout(() => {
            live++;
            awake = true;
            fonction();
        }, 10000);
    }
}

function reduit1Pv() {
    if(actionRealisable(1)) 
        live--;
}

function kill() {
    if(live != 0)
        live = 0;
}

function regen() {
    if(live === 0)
        live = 200;
}

function init(monstre) {
    name = monstre.name;
    live = monstre.life;
    money = monstre.money;
    awake = monstre.awake;
}


export default {
    init: init,
    get: get,
    run: run,
    fight: fight,
    work: work,
    eat: eat,
    sleep: sleep,
    reduitPV: reduit1Pv,
    kill: kill,
    regen: regen
}

