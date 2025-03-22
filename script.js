// Lightbox functionality with slideshow
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentIndex = 0;

// Open lightbox when an image is clicked
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
    });
});

// Update lightbox image
function updateLightboxImage() {
    lightboxImg.src = galleryItems[currentIndex].src;
    lightboxImg.alt = galleryItems[currentIndex].alt;
}

// Navigate to the previous image
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxImage();
});

// Navigate to the next image
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightboxImage();
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

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});
