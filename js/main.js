
// script.js
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navigation link handling (fix for multi-page site)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If it's an in-page anchor, smooth scroll
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // Otherwise, allow normal navigation for .html links
        });
    });
    
    // Schedule tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log("Form submitted:", Object.fromEntries(new FormData(this)));
            alert("Demo only: form data logged to console.");
            this.reset();
        });
    }
    
    // Registration button handling
    const registerButtons = document.querySelectorAll('.tier .btn-primary');
    registerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const tierName = this.closest('.tier').querySelector('h3').textContent;
            const price = this.closest('.tier').querySelector('.price').textContent;
            console.log(`Register button clicked: ${tierName} - ${price}`);
            alert(`Demo only: ${tierName} (${price}) logged to console.`);
        });
    });
    
    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const opacity = Math.min(scrollTop / 100, 0.95);
        if (scrollTop > 50) {
            navbar.style.backgroundColor = `rgba(13, 17, 23, ${opacity})`;
        } else {
            navbar.style.backgroundColor = 'rgba(13, 17, 23, 0.95)';
        }
    });
    
});


// Demo alerts for placeholder pages
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.endsWith('.html') && this.classList.contains('placeholder')) {
                e.preventDefault();
                alert('This page will be added in the full site. Demo only.');
            }
        });
    });