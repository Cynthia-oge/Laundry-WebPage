var toggleButton = document.getElementsByClassName('toggle-button')[0];
var navLinks = document.getElementsByClassName('nav_links')[0];

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})