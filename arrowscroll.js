window.addEventListener('DOMContentLoaded', (event) => {
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Next/previous controls with arrows
function plusSlides(n) {
  showSlides(slideIndex += n);
}

    document.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
            plusSlides(-1) //left <- show Prev image
        } else if (e.keyCode == '39') {
            // right -> show next image
            plusSlides(1)
        }
    }
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}





