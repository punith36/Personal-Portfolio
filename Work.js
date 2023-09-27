const toggleButton = document.getElementById('toggle-button');
const navLinks = document.querySelector('.nav-links');
const closeIcon = document.createElement('i');
closeIcon.className = 'fa fa-times';

toggleButton.addEventListener('click', function() {
  if (toggleButton.classList.contains('fa-bars')) {
    navLinks.classList.toggle('active');
    toggleButton.classList.remove('fa-bars');
    toggleButton.classList.add('fa-times');
  } else {
    navLinks.classList.remove('active');
    toggleButton.classList.add('fa-bars');
    toggleButton.classList.remove('fa-times');
  }
});

navLinks.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('show');
    toggleButton.classList.add('fa-bars');
    toggleButton.classList.remove('fa-times');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var overlay = document.getElementById("loading-overlay");
  var spinner = document.getElementById("loading-spinner");

  overlay.style.display = "flex";
  setTimeout(function() {
    overlay.style.display = "none";
  }, 800);
});
