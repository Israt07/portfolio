// Intersection Observer for scroll animations (fade in effect)
document.addEventListener("DOMContentLoaded", () => {

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once faded in
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Navbar highlighting based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Adjust threshold depending on nav height (approx 80px)
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Add subtle shadow to navbar on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Theme toggle logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');

        // Check for saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });

        function updateThemeIcon(theme) {
            if (theme === 'light') {
                 // In light mode, show the sun (day mode)
                themeIcon.className = 'ph ph-sun';
            } else {
                // In dark mode, show the moon (night mode)
                themeIcon.className = 'ph ph-moon';
            }
        }
    }

    // Contact Form - opens email client with pre-filled message
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name    = document.getElementById('name').value.trim();
            const email   = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const subject = `New Portfolio Message from ${name}`;
            const body    = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

            // Open the user's default email client with fields pre-filled
            window.open(
                `mailto:isratjahanbhuiyan79@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
                '_blank'
            );
        });
    }
});

// Modal UI Functions
window.openModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
};

window.closeModal = function(id, event) {
    if (event) event.stopPropagation(); // prevent clicking close from immediately bubbling
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// Close modal when clicking outside content
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});
