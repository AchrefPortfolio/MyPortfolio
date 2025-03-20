// Lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');

// Open lightbox when an image is clicked
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt;
    });
});

// Close lightbox when the close button is clicked
closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});