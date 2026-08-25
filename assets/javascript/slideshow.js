// Crossfade slideshow for .kmap-slideshow (home page event photos)
document.addEventListener('DOMContentLoaded', function () {
  var show = document.querySelector('.kmap-slideshow');
  if (!show) return;
  var slides = show.querySelectorAll('img');
  if (slides.length < 2) return;
  var i = 0;
  slides[0].classList.add('active');
  setInterval(function () {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 4000);
});
