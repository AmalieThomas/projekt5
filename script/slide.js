//Nadialiva C. Bosse Nørgård (primære javascript)
/*SLIDER JS*/

window.onload = function() {
    let slides = document.getElementsByClassName("slider");
    for (let i = 1; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  }
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";
    }
}