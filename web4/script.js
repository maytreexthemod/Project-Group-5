// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Scroll Header Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function currentSlide(n) {
    showSlide(n);
}

// Auto slide testimonials
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Service Tabs
function openService(serviceName) {
    const tabContents = document.querySelectorAll('.service-content');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(serviceName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Gallery Filter
function filterSelection(category) {
    const items = document.querySelectorAll('.gallery-item');
    
    if (category === 'all') {
        items.forEach(item => item.style.display = 'block');
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // Update active button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => button.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// Gallery Sort
function sortGallery() {
    const sortValue = document.getElementById('sort').value;
    const gallery = document.querySelector('.gallery-grid');
    const items = Array.from(document.querySelectorAll('.gallery-item'));
    
    items.sort((a, b) => {
        const titleA = a.querySelector('h3').textContent.toLowerCase();
        const titleB = b.querySelector('h3').textContent.toLowerCase();
        
        if (sortValue === 'name') {
            return titleA.localeCompare(titleB);
        } else if (sortValue === 'newest') {
            return 1; // In a real app, you would compare dates
        } else if (sortValue === 'oldest') {
            return -1; // In a real app, you would compare dates
        }
        return 0;
    });
    
    // Clear gallery
    gallery.innerHTML = '';
    
    // Append sorted items
    items.forEach(item => gallery.appendChild(item));
}

// Modal Functions
function openModal(imageSrc, title) {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalTitle.textContent = title;
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('galleryModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Contact Form Submission
function submitForm(event) {
    event.preventDefault();
    
    // In a real application, you would send the form data to a server here
    // For demonstration, we'll just show the thank you message
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Show thank you modal
    document.getElementById('thankYouModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeThankYouModal() {
    document.getElementById('thankYouModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll down button in hero section
document.querySelector('.scroll-down').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight - 80,
        behavior: 'smooth'
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const year = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerHTML = `&copy; ${year} Line Ace Studios. All rights reserved. | Group 42`;
    
    // Initialize first testimonial and service tab as active
    if (document.querySelector('.testimonial')) {
        showSlide(0);
    }
    
    if (document.querySelector('.service-content')) {
        document.querySelector('.service-content').classList.add('active');
    }
});