class Calculatrice {
    constructor() {}
    
    addition (a, b) {
        return a + b;
    }
    
    soustraction (a, b) {
        return a - b;
    }

    multiplication (a, b) {
        return a * b;
    }

    division (a, b) {
        return a / b;
    }

    setCurrentValue(value){
        this.currentValue = value;
    }

    getCurrentValue(){
        return this.currentValue;
    }

    carre(a) {
        return a * a;
    }

    racine(a) {
        return Math.sqrt(a);
    }

}

function division (a, b) {
    return a / b;
}


function addition (a, b) {
    return a + b;
}

function soustraction (a, b) {
    return a - b;
}

function multiplication (a, b) {
    return a * b;
}
function division (a, b) {
    return a / b;
}
function carre(a) {
    return a * a;
}

function racine(a) {
    return Math.sqrt(a);
}


let resultat = document.getElementsByClassName('resultat');

let isAddition = false;
let isSoustraction = false;
let isMultiplication = false;
let isDivision = false;
let isPuissance = false;
let isRacine = false;

let a = "";
let b = "";

function ajouteChiffre(value){
    if(isAddition === true || isSoustraction === true || isMultiplication === true || isDivision === true){
        b += value;
        resultat.texte.value = b;
        return;
    }
    a += value;
    resultat.texte.value = a;
    
}

function clean(){
    resultat.texte.value = "";
    a = "";
    b = "";
}

function calc(){
    if(isAddition === true){
        a = addition(Number(a), Number(b));
        resultat.texte.value = a;
        b = "";
        isAddition = false;
    }
    if(isSoustraction === true){
        a = soustraction(Number(a), Number(b));
        resultat.texte.value = a;
        b = "";
        isSoustraction = false;
    }
    if(isMultiplication === true){
        a = multiplication(Number(a), Number(b));
        resultat.texte.value = a;
        b = "";
        isMultiplication = false;
    }
    if(isDivision === true){
        a = division(Number(a), Number(b));
        resultat.texte.value = a;
        b = "";
        isDivision = false;
    }
    if(isPuissance === true){
        a = String(carre(Number(a)));
        resultat.texte.value = a;
        isPuissance = false;
    }
    if(isRacine === true){
        a = String(racine(Number(a)));
        resultat.texte.value = a;
        isRacine = false;
    }
}

function setAddition(){
    isAddition = true;
}

function setSoustraction(){
    isSoustraction = true;
}

function setMultiplication(){
    isMultiplication = true;
}

function setDivision(){
    isDivision = true;
}

function setPuissance(){
    isPuissance = true;
    calc();
}

function setRacine(){
    isRacine = true;
    calc();
}



// module.exports = {
//     Calculatrice:Calculatrice,   
// }