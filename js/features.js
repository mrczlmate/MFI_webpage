
const lightboxElements = document.querySelectorAll('.glightbox');
if (lightboxElements.length > 0) {
  const lightbox = GLightbox({ selector: '.glightbox' });
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
    });
}); 