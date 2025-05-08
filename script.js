document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // Carbon Calculator Functionality
    const calculatorForm = document.getElementById('carbon-calculator-form');
    const calculatorResult = document.querySelector('.calculator-result');

    if (calculatorForm) {
        calculatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const transportation = parseFloat(document.getElementById('transportation').value);
            const electricity = parseFloat(document.getElementById('electricity').value);
            const diet = parseFloat(document.getElementById('diet').value);
            const consumption = parseFloat(document.getElementById('consumption').value);
            
            // Simple calculation (this is a simplified example)
            const carbonFootprint = (transportation * 0.5) + (electricity * 0.4) + (diet * 0.3) + (consumption * 0.2);
            
            // Display result
            document.getElementById('result-value').textContent = carbonFootprint.toFixed(2);
            
            // Show result section with animation
            calculatorResult.style.display = 'block';
            calculatorResult.classList.add('fade-in');
            
            // Scroll to result
            calculatorResult.scrollIntoView({ behavior: 'smooth' });
            
            // Provide feedback based on result
            const resultFeedback = document.getElementById('result-feedback');
            if (carbonFootprint < 5) {
                resultFeedback.textContent = "Great job! Your carbon footprint is below average. Keep up the good work!";
            } else if (carbonFootprint < 10) {
                resultFeedback.textContent = "Your carbon footprint is about average. Check out our tips to reduce it further.";
            } else {
                resultFeedback.textContent = "Your carbon footprint is above average. Consider implementing some of our suggested changes to reduce your impact.";
            }
        });
    }

    // Reset calculator
    const resetButton = document.getElementById('reset-calculator');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            calculatorForm.reset();
            calculatorResult.style.display = 'none';
        });
    }

    // Animate elements when they come into view and fade out when leaving
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .info-card, .action-card');
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const screenPosition = window.innerHeight / 1.3;
            const isVisible = rect.top < screenPosition && rect.bottom > 0;

            if (isVisible) {
                element.classList.add('fade-in');
                element.classList.remove('fade-out');
            } else {
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            }
        });
    };

    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on page load
    animateOnScroll();

    // Hero Section Carousel
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Set first slide as active
    slides[0].classList.add('active');

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}); 