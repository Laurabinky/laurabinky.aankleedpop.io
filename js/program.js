console.log ("Hallo");
console.log("Ben je klaar? Klik dan nogmaals op de schoenen!");

// Aanmaken van de variable

// Var voor de pop
var model = document.querySelector ("img");

// Var de button
var buttonEl = document.querySelector ("#button");
var zichtbaar = false;

// Var achtergrond kleur en huidige achtergrond
var colors = ['lightcyan', 'lavenderblush', 'ivory', 'honeydew', 'mistyrose'];


// Var voor het haar
var zwarthaar = document.querySelector ("#zwart");
var bruinhaar = document.querySelector ("#bruin");

// Var voor de top
var rozetop = document.querySelector ("#roze");
var blauwetop = document.querySelector ("#blauw");

// Var voor de rok
var zwarterok = document.querySelector ("#zwartrokje");
var paarserok = document.querySelector ("#paars");

// Var voor de schoenen
var slippers = document.querySelector ("#slipper");
var boots = document.querySelector ("#booties");

// Var voor de outfits zelf
var outfit;
var haar = "";
var topje = "";
var rok = "";
var schoenen = "";
var bestelling = [haar, topje, rok, schoenen];

// Ik ga hierbij in de functies aangeven wat er true of false is. Dus dit is in de functies weer terug te vinden.
var outfitstatus = [false, false, false, false];



// Hier maak ik de functies van de buttons aan
function bruinhaarop(){
    haar = "popbruinhaar";
    outfit = haar + topje + rok + schoenen + ".png";
    model.src = "./img/"+ outfit;
    outfitstatus[0] = true;
}
function zwarthaarop(){
    haar = "popzwarthaar";
    outfit = haar + topje + rok + schoenen + ".png";
    model.src = "./img/"+ outfit;
    outfitstatus[0] = true;
}
function blauwetopaan(){
    topje = "popshirtblauw";
    outfit = haar + topje + rok + schoenen + ".png";
    model.src = "./img/"+ outfit;
    outfitstatus[1] = true;
}
function rozetopaan(){
    topje = "popshirtroze";
    outfit = haar + topje + rok + schoenen + ".png";
    model.src = "./img/"+ outfit;
    outfitstatus[1] = true;
}
function zwarterokaan(){
    rok = "poprokzwart";
    outfit = haar + topje + rok + schoenen + ".png";
    model.src = "./img/"+ outfit;
    outfitstatus[2] = true;
}
function paarserokaan(){
    rok = "poprokpaars";
    outfit = haar + topje + rok + schoenen + ".png";
    model.src = "./img/"+ outfit;
    outfitstatus[2] = true;
}
function slippersaan(){
    schoenen = "popslippers"
    outfit = haar + topje + rok + schoenen + ".png";
    model.src = "./img/"+ outfit;
    outfitstatus[3] = true;
    buttonVerschijnt();
}
function bootsaan(){
    schoenen = "popboots"
    outfit = haar + topje + rok + schoenen + ".png";
    model.src = "./img/"+ outfit;
    outfitstatus[3] = true;
    buttonVerschijnt();
}


// Met deze function verschijnt de button. Deze is geprogammeerd om te verschijnen wanneer er 2 keer op de button
// wordt geklikt. 
function buttonVerschijnt(){
    if(bestelling == 1){
        document.getElementById("button").style.visibility="visible";
        zichtbaar= true;
        return bestelling=0
    } else {
        document.getElementById("button").style.visibility="hidden";
        zichtbaar= false;
        return bestelling=1
    }
}
function changeBackground(){
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}




//Hier roep ik de functies aan
bruinhaar.addEventListener("click", bruinhaarop);
zwarthaar.addEventListener("click", zwarthaarop);

rozetop.addEventListener("click", rozetopaan);
blauwetop.addEventListener("click", blauwetopaan);

zwarterok.addEventListener("click", zwarterokaan);
paarserok.addEventListener("click", paarserokaan);

slippers.addEventListener("click", slippersaan);
boots.addEventListener("click", bootsaan);

buttonEl.addEventListener("click", changeBackground);