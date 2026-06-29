/* ========================================
   SLIDESHOW FUNCTIONALITY
   ======================================== */

let slideIndex = 1;
let slideTimer;

// Initialize slideshow on page load
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    autoSlides();
});

// Next/previous controls
function changeSlide(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex += n);
    autoSlides();
}

// Thumbnail image controls
function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex = n);
    autoSlides();
}

// Display slides
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto advance slides every 5 seconds
function autoSlides() {
    slideTimer = setTimeout(function() {
        slideIndex++;
        showSlides(slideIndex);
        autoSlides();
    }, 5000);
}

/* ========================================
   CONTACT FORM HANDLING
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm(this);
        });
    }
});

function handleContactForm(form) {
    const formData = new FormData(form);
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const message = form.querySelector('textarea').value;
    
    // Validate form
    if (!name || !email) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // In a real application, you would send this to a server
    // For GitHub Pages, you can use a service like Formspree or EmailJS
    console.log({
        name: name,
        email: email,
        phone: phone,
        message: message,
        timestamp: new Date().toISOString()
    });
    
    // Show success message
    alert('Thank you for your interest! We will contact you soon.');
    form.reset();
}

/* ========================================
   SMOOTH SCROLL FOR NAVIGATION
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply observer to elements
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll(
        '.detail-card, .feature-item, .pricing-card, .financial-item'
    );
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

/* ========================================
   KEYBOARD NAVIGATION FOR SLIDESHOW
   ======================================== */

document.addEventListener('keydown', function(e) {
    const gallerySection = document.getElementById('gallery');
    const isGalleryVisible = gallerySection.getBoundingClientRect().top < window.innerHeight &&
                             gallerySection.getBoundingClientRect().bottom > 0;
    
    if (isGalleryVisible) {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        }
    }
});

/* ========================================
   ANALYTICS PLACEHOLDER
   ========================================

// You can add Google Analytics or other tracking here
// Example: 
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'YOUR_GA_ID');

*/

/* ========================================
   MOBILE MENU TOGGLE (Optional - for future enhancement)
   ======================================== */

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

/* ========================================
   PRINT STYLESHEET SUPPORT
   ======================================== */

window.addEventListener('beforeprint', function() {
    // Hide navigation during print
    document.querySelector('.header').style.display = 'none';
});

window.addEventListener('afterprint', function() {
    // Show navigation after print
    document.querySelector('.header').style.display = 'block';
});

/* ========================================
   PERFORMANCE: Lazy loading placeholder
   ======================================== */

if ('IntersectionObserver' in window) {
    // Placeholder images could be loaded lazily here
    // This is a performance optimization for future use
}
