// Lightbox functionality with slideshow and touch support
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.getElementById('close-lightbox');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// Open lightbox when an image is clicked
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
    });
});

// Update lightbox image and caption
function updateLightboxImage() {
    lightboxImg.src = galleryItems[currentIndex].src;
    lightboxCaption.textContent = galleryItems[currentIndex].alt;
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

// Touch support for swipe gestures
lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Minimum swipe distance to trigger navigation
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > swipeThreshold) {
        // Swipe right -> previous image
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightboxImage();
    } else if (swipeDistance < -swipeThreshold) {
        // Swipe left -> next image
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateLightboxImage();
    }
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});
