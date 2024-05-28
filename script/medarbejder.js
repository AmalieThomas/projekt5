
let seFlereKnap = document.getElementById('seflere');
let billeder = document.querySelectorAll('.medarbejder-info');
let synligeBilleder = 3;

// gemmer billederne ud over de tre billedere som er synlige fra starten
for (let i = synligeBilleder; i < billeder.length; i++) {
        billeder[i].style.display = 'none';
    }


//funktion som får billederne frem 

function visBilleder() {
    let skjulteBilleder = document.querySelectorAll('.medarbejder-info[style*="display: none"]');
    let billederAtVise = 3;
    
    for (let i = 0; i < billederAtVise && i < skjulteBilleder.length; i++) {
        skjulteBilleder[i].style.display = 'flex';
        }

    // Skjul knappen når der ikke er flere billeder at vise
     if (document.querySelectorAll('.medarbejder-info[style*="display: none"]').length === 0) {
            seFlereKnap.style.display = 'none';
        }
}

seFlereKnap.addEventListener('click', visBilleder)
