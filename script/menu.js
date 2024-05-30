
let menu = document.getElementById('menu')
// åben menuen
document.getElementById('menu-btn').onclick = function() {
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    } else {
        menu.classList.add('visible');
    }
};
//luk menuen
document.getElementById('close-menu-btn').onclick = function() {
        menu.classList.remove('visible');
        choices.style.display = "none";
};

// Array med underkategorierne
let valg =[
    'Se alle',
    'Strategi og forretning',
    'Research, UX og design',
    'Digital udvikling',
    'App-udvikling',
    'Digital freelance',
    'B2B marketing']; 

let options = ""; 

// for loop for at få alle kategorierne ud 
for (let i=0; i<valg.length;++i) { 
    options += '<h3>' + valg[i] + '<h3>'
}
//Væsentligt global, da den bruges i funktionen længere oppe
let choices = document.getElementById("ydelser");

function dropdown() {
    if (choices.style.display == "block") {
        choices.style.display = "none";
    } else {
        document.getElementById('ydelser').innerHTML = options;
        choices.style.display = "block";
    }
  }