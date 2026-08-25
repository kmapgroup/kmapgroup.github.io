// Crossfade slideshow for .kmap-slideshow (home page event photos). Each slide = .slide (img + optional caption).
document.addEventListener('DOMContentLoaded', function () {
  var show = document.querySelector('.kmap-slideshow');
  if (!show) return;
  var slides = show.querySelectorAll('.slide');
  if (!slides.length) return;
  var i = 0;
  slides[0].classList.add('active');
  if (slides.length < 2) return;
  setInterval(function () {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 4000);
});
