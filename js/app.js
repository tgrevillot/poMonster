'use strict'
import monster from './actions.js';
import ui from './ui.js';

let b1, b2, b3, b4, b5, b6, b7;
let k;

function start() {
    monster.init({
      name : "Terry",
      life :  10,
      money : 20,
      awake : true
    });

    //Lancement de la fonction appelée toutes les 12 secondes
    let interval = setInterval(actionRandom, 12000);
    ui.log(generateMessage())
    ui.displayStatus(monster);

    //Sélection des différents boutons
    b2 = document.querySelector('#b2');
    b3 = document.querySelector('#b3');
    b7 = document.querySelector('#b7');
    b4 = document.querySelector('#b4');
    b5 = document.querySelector('#b5');
    b6 = document.querySelector('#b6');
    b1 = document.querySelector("#b1");
    k = document.querySelector('#k');


    b6.addEventListener('click',()=> {
      let m = monster.get();
      alert(generateMessage())
    });

    b1.addEventListener('click', () => {
      monster.regen();
      majInterfaceGraphique();
    })

    b2.addEventListener('click', () => {
        monster.run();
        majInterfaceGraphique();
    });

    b3.addEventListener('click', () => {
      monster.fight();
      majInterfaceGraphique();
    });

    b4.addEventListener('click', () => {
      monster.sleep(majInterfaceGraphique);
      majInterfaceGraphique();
    });

    b7.addEventListener('click', () => {
      monster.work();
      majInterfaceGraphique();
    });

    b5.addEventListener('click', () => {
      monster.eat();
      majInterfaceGraphique();
    });

    k.addEventListener('click', () => {
      monster.kill();
      majInterfaceGraphique();
    });
}

function actionRandom() {
  monster.reduitPV();
  let tabMethode = Object.keys(monster);
  //On enlève les méthode inutiles
  tabMethode.shift();
  tabMethode.shift();
  tabMethode.pop();
  tabMethode.pop();
  tabMethode.pop();

  //On applique le math.random
  let indice = Math.floor(Math.random() * tabMethode.length);

  //On exécute la méthode en aléatoire
  eval("monster." + tabMethode[indice] + "()");
  majInterfaceGraphique();
}

function majInterfaceGraphique() {
  ui.displayStatus(monster);
  ui.log(generateMessage());
}

function generateMessage() {
  let mon = monster.get();
  return "Je suis "+mon.nom+" j'ai "+mon.vie+ "pv et "+mon.argent+" d'argent"
}

export default start;
