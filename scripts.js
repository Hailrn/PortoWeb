const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'font-bold');
        if (link.getAttribute('href').includes(current)) {
        link.classList.add('text-blue-600', 'font-bold');
        }
    });

    
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  });

const sectionsToAnimate = document.querySelectorAll('.fade-in-section');
sectionsToAnimate.forEach(section => {
//   section.classList.add('fade-in-section');
  observer.observe(section);
});

const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  hamburgerButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Mencegah klik menyebar ke elemen lain
    mobileMenu.classList.toggle('menu-terbuka');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });