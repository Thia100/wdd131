const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active'); // Add/remove 'active' class to show/hide the menu
});

// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Output the current year in the footer's first paragraph
document.getElementById('currentyear').textContent = `© ${currentYear}`;

// Output the last modified date in the footer's second paragraph
document.getElementById('last-modified').textContent = `Last modified: ${lastModifiedDate}`;