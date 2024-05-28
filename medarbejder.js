
let seFlereKnap = document.getElementById('seflere');
let billeder = document.querySelectorAll('.medarbejder-info');
let synligeBilleder = 3;

// gemmer billederne ud over de tre billedere som er synlige fra starten
for (let i = synligeBilleder; i < billeder.length; i++) {
        billeder[i].style.display = 'none';
    }

function visBilleder() {
    let skjulteBilleder = document.querySelectorAll('.medarbejder-info[style*="display: none"]');
    let rowsToShow = 3; // Number of billeder to show each time
    
    for (let i = 0; i < rowsToShow && i < skjulteBilleder.length; i++) {
        skjulteBilleder[i].style.display = 'flex';
        }

    // Hide the button if no more billeder to show
     if (document.querySelectorAll('.medarbejder-info[style*="display: none"]').length === 0) {
            seFlereKnap.style.display = 'none';
        }
}

seFlereKnap.addEventListener('click', visBilleder)
