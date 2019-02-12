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
}

export default {
    log: log,
    displayStatus
}