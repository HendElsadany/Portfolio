document.getElementById('y').textContent = new Date().getFullYear();

var nav = document.getElementById('menu');
var burger = document.getElementById('burger');

burger.addEventListener('click', function () {
  var open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

var links = Array.prototype.slice.call(nav.querySelectorAll('a'));
links.forEach(function (a) {
  a.addEventListener('click', function () {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// highlight the link of the section currently on screen
var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
function setActive() {
  var y = window.scrollY + 140, current = 0;
  sections.forEach(function (s, i) { if (s && s.offsetTop <= y) current = i; });
  links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
}
window.addEventListener('scroll', setActive, { passive: true });
setActive();
