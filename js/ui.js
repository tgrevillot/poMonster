let numMess = 0;

function log(message) {
    let box = document.querySelector("#actionbox");
    let element = document.createElement("p");
    let text = document.createTextNode(message)
    let firstNode = box.firstChild;
    element.setAttribute("id", "mess"+ ++numMess);

    element.appendChild(text);
    box.insertBefore(element, firstNode);
}

function displayStatus(monster) {
    let statusID = document.querySelector("#status");
    let status = statusID.childNodes;
    let infosMonstre = monster.get();
    let tab = [];
    tab[0] = document.createElement("LI").appendChild(document.createTextNode('life:' + infosMonstre.vie + " ")) 
    tab[1] = document.createElement("LI").appendChild(document.createTextNode('money:' + infosMonstre.argent + " "));
    if(infosMonstre.enVie) 
        tab[2] = document.createElement("LI").appendChild(document.createTextNode('awake ')) 
    else
        tab[2] = document.createElement("LI").appendChild(document.createTextNode('sleeping ')) 
    
    for(let i = 0; i < tab.length; i++) 
        status[i].replaceWith(tab[i]);   
        
    //Modification couleur boîte monster
    let boite = document.querySelector("#monster");
    let mon = monster.get();
    if(mon.vie >= 20)
        boite.style.backgroundColor = "green";
    else if(mon.vie >= 15 && mon.vie < 20)
        boite.style.backgroundColor = "orange";
    else if(mon.vie >= 10 && mon.vie < 15)
        boite.style.backgroundColor = "yellow";
    else if(mon.vie < 10)
        boite.style.backgroundColor = "red";

    //Modification épaisseur de la boîte monster
    let argent = mon.argent;
    console.log((argent * 10).toString())
    boite.style.borderWidth = (argent/10).toString() + "px";
}

export default {
    log: log,
    displayStatus: displayStatus
}