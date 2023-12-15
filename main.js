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
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = slideIndex - 1; i < slideIndex + 4; i++) {
    if (slides[i]) {
        slides[i].style.display = "block";  
    }
  }
  dots[slideIndex - 1].className += " active";
}


let hamburger = document.getElementById('ham');
console.log(hamburger);
let ham_nav =document.querySelector('.ham_nav');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  if (ham_nav.style.display == "none") {
    ham_nav.style.display = "block";
    ham_nav.classList.add('fade-in');
  } else {
    ham_nav.style.display = "none";
    ham_nav.classList.remove('fade-in');
  }
});
