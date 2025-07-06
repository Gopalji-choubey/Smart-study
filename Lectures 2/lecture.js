// Select hamburger and menu
const toggle = document.getElementById('toggle');
const menu   = document.getElementById('menu');
const links  = menu.querySelectorAll('a');

// Open / close on hamburger click
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  menu.classList.toggle('open');
});

// Auto-close menu after clicking a nav link (mobile UX)
links.forEach(link =>
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    menu.classList.remove('open');
  })
);
