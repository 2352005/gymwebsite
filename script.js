// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Change navigation background on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
            nav.style.boxShadow = 'none';
        }
    });
    
    // Statistics counter animation
    const counters = document.querySelectorAll('.counter');
    
    function startCounting(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                const speed = 2000 / target; // Adjust speed based on target value
                
                const updateCounter = () => {
                    if (count < target) {
                        count++;
                        counter.textContent = count;
                        setTimeout(updateCounter, speed);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }
    
    const counterObserver = new IntersectionObserver(startCounting, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // Testimonials Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    // Initialize dots click events
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showTestimonial(index);
        });
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Contact form submission
    const contactForm = document.getElementById('gymContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, you would handle form submission here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // GSAP Animations
    // Hero section animation
    gsap.from('.hero-content', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    // About section animations
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.stat-item', {
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Services animations
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });
    
    // Gallery animations
    gsap.from('.gallery-item', {
        scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    // Pricing animations
    gsap.from('.pricing-card', {
        scrollTrigger: {
            trigger: '.pricing-cards',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Section titles animation
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
});