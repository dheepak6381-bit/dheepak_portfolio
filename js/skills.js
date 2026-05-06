/**
 * Skills Animation
 * Animates the skill progress bars when they scroll into view
 */

document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar__fill');
    
    const skillObserverOptions = {
        root: null,
        rootMargin: '0px 0px -20% 0px',
        threshold: 0.1
    };

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width');
                
                // Animate width
                bar.style.width = targetWidth;
                
                // Add class for the glowing dot after animation completes
                setTimeout(() => {
                    bar.parentElement.parentElement.classList.add('is-animated');
                }, 1000);
                
                observer.unobserve(bar);
            }
        });
    }, skillObserverOptions);

    skillBars.forEach(bar => {
        // Reset width to 0 for initial state
        bar.style.width = '0%';
        skillObserver.observe(bar);
    });
});
