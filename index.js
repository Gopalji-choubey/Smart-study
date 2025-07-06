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



// Show popup at most once per day using localStorage
(function () {
  const popup      = document.getElementById('popup');
  const todayKey   = new Date().toLocaleDateString();   // e.g. "6/29/2025"
  const storedDate = localStorage.getItem('popupSeen');

  // If not seen today, show it
  if (storedDate !== todayKey) {
    popup.classList.remove('hidden');
    // Mark as shown for today
    localStorage.setItem('popupSeen', todayKey);
  }
})();

// Close handler
function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}
  if (!window.location.href.includes("?v=")) {
    const now = new Date().getTime();
    window.location.replace(window.location.href + "?v=" + now);
  }
