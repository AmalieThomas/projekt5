
//Amalie Kragh Thomas

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


//lavet med hjælp fra chatGPT med disse prompts 
//"On my page i have a gallery of pictures in rows of 3. I want to make a "load more button" to show another row of pictures when i press it in html, css ans javascript"
//" should be able to add 2 rows so a total of 3 rows will be shown on the page"
//"will it be responsive on mobile?"
