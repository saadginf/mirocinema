//start of slide animations

let slideIndex = 1;
showSlides(slideIndex);

//controls between prev and next

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function CurrentSlides(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("SlidesFade");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n == 0) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
