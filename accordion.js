let acc = document.querySelectorAll('.accordion');

for (let i = 0; i < acc.length; i++) {
    let accordion = acc[i];
    
    accordion.addEventListener('click', function(e) {
        // If-else struktur for at tjekke om accordion allerede er aktiv
        if (accordion.classList.contains('active')) {
            // Hvis accordion allerede er aktiv, fjern den aktive klasse
            accordion.classList.remove('active');
            console.log('Accordion is now inactive');
        } else {
            // Hvis accordion ikke er aktiv, tilføj den aktive klasse
            accordion.classList.add('active');
            console.log('Accordion is now active');
        }
    });
}
