var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i,
      slides = document.getElementsByClassName("mySlides"),
      dots = document.getElementsByClassName("line");
  if (n > slides.length) {
        slideIndex = 1
		};    
  if (n < 1) {
        slideIndex = slides.length
		};
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("now");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("now");
}

