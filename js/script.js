// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .quick-links a, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Smooth scroll to the target element
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for header
                    behavior: 'smooth'
                });
                
                // Update active class on navigation links
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Highlight active navigation link based on scroll position
    function highlightNavOnScroll() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Initial call to highlight the correct navigation link
    highlightNavOnScroll();
    
    // Add glassmorphism effect to cards on scroll
    const glassCards = document.querySelectorAll('.glass-card');
    
    function checkGlassCards() {
        glassCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100 && cardBottom > 0) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
            }
        });
    }
    
    // Add initial styles to glass cards
    glassCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Add scroll event listener for glass card animations
    window.addEventListener('scroll', checkGlassCards);
    
    // Initial check for visible glass cards
    checkGlassCards();
    
    // Mobile menu toggle functionality (if needed in the future)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.glass-nav ul');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
}); 