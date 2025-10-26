// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to product cards
    const productCards = document.querySelectorAll('.bg-white.rounded-lg');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.classList.add('animate-card');
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Track CTA clicks
    document.querySelectorAll('[href*="wa.me"], [href*="shopee.co.id"]').forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('CTA clicked:', this.href);
        });
    });

    // Auto-scroll testimonials
    const testimonialScroll = document.querySelector('.testimonial-scroll');
    if (testimonialScroll) {
        let scrollPosition = 0;
        const scrollWidth = testimonialScroll.scrollWidth - testimonialScroll.clientWidth;
        
        const autoScroll = setInterval(() => {
            if (scrollPosition >= scrollWidth) {
                scrollPosition = 0;
                testimonialScroll.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            } else {
                scrollPosition += 300; // Scroll by 300px each step
                testimonialScroll.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }
        }, 2000); // 2 seconds interval
    }
});