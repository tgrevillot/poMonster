'use strict'
import monster from './actions.js';

let b1, b2, b3, b4, b5, b6, b7;

function start() {
    monster.init({
      name : "Terry",
      life :  10,
      money : 20,
      awake : true
    });

    b6=document.querySelector('#b6');

    b6.addEventListener('click',()=> {
      let m = monster.get();
      alert("Je suis "+m.nom+" j'ai "+m.vie+ "pv et "+m.argent+" d'argent")
    });

}

export default start;
