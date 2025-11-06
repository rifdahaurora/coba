function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const faders = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  faders.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('show');
    }
  });
});

// Form Order
const form = document.getElementById('orderForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your order! We’ll contact you shortly.');
  form.reset();
});

// Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// CURRENT TIME
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

// VISITOR
if (!localStorage.getItem("totalVisitors")) {
  localStorage.setItem("totalVisitors", Math.floor(Math.random() * 5000) + 1000);
}
let totalVisitors = parseInt(localStorage.getItem("totalVisitors")) + 1;
localStorage.setItem("totalVisitors", totalVisitors);

let todayVisitors = Math.floor(Math.random() * 100) + 10;

document.getElementById("visitorCount").textContent = totalVisitors.toLocaleString();
document.getElementById("todayCount").textContent = todayVisitors.toLocaleString();