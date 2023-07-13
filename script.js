window.addEventListener('load', function() {
    var element = document.querySelector('.animation-element');
    element.style.opacity = '1';
  });
  const slider = document.querySelector('.slider');
  let slidePosition = 0;
  const slides = document.querySelectorAll('.slider img');
  const totalSlides = slides.length;
  

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }    

