'use strict'

import monster from './action.js';

let b1, b2, b3, b4, b5, b6, b7;

function start() {

  window.addEventListener("load",() =>{

    monster.init({
       name : "terry le bg",
       life : 10,
       money : 20
    });

    b6=document.querySelector('#b6');

    b6.addEventListener('click',()=> {let m = monster.get();
                                       alert("Je suis "+m.name+" j'ai "+m.life+ "pv et "+m.money+" d'argent")
                                     });

  });
start()
