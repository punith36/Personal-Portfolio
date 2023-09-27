const projectContainer = document.querySelector('.project-container');
function setProjectContainerClass() {
  if (window.innerWidth >= 768) {
    projectContainer.classList.remove('single-column');
  } else {
    projectContainer.classList.add('single-column');
  }
}
setProjectContainerClass();

window.addEventListener('resize', setProjectContainerClass);
//adjustable sidebar
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
//greetings and 
//validation 
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (!validateForm()) {
    return;
  }

  const name = nameInput.value;
  const mail= emailInput.value;
  const mess= messageInput.value; 
  const message = `Message sent successfully. Thank you, ${name}!`;
  alert(message);
  console.log(name+" "+"with e-mail as"+" "+mail+" "+"says"+" "+mess);

  form.reset();
});

function validateForm() {
  let valid = true;
  
  if (nameInput.value.trim() === '') {
    valid = false;
    nameInput.classList.add('error');
  } else {
    nameInput.classList.remove('error');
  }

  if (emailInput.value.trim() === '') {
    valid = false;
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }

  if (messageInput.value.trim() === '') {
    valid = false;
    messageInput.classList.add('error');
  } else {
    messageInput.classList.remove('error');
  }

  return valid;
}
// Show loading effect
document.addEventListener("DOMContentLoaded", function() {
  var overlay = document.getElementById("loading-overlay");
  var spinner = document.getElementById("loading-spinner");

  overlay.style.display = "flex";
  setTimeout(function() {
    overlay.style.display = "none";
  }, 800);
});

