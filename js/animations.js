// Animations using GSAP
const animations = {
    init() {
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        // Initialize animations
        this.setupHeroAnimations();
        this.setupFadeInSections();
        this.setupCounterAnimations();
    },

    setupHeroAnimations() {
        // Hero section text animations
        gsap.to(".hero-text", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        });
    },

    setupFadeInSections() {
        // Fade in animations for sections
        const sections = document.querySelectorAll('.fade-in-section');
        sections.forEach(section => {
            gsap.fromTo(section, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    },

    setupCounterAnimations() {
        const counters = document.querySelectorAll('.counter');
        let started = false;

        const startCounters = () => {
            if (started) return;
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2; // Duration in seconds
                const startTime = performance.now();
                const updateCount = (currentTime) => {
                    const elapsed = (currentTime - startTime) / 1000;
                    const progress = Math.min(elapsed / duration, 1);
                    const current = Math.floor(target * progress);
                    counter.textContent = current;
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.textContent = target;
                    }
                };
                requestAnimationFrame(updateCount);
            });
            started = true;
        };

        // Create intersection observer for metrics section
        const metricsSection = document.getElementById('metrics');
        if (metricsSection) {
            const metricsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startCounters();
                        metricsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            metricsObserver.observe(metricsSection);
        }
    }
};

// Initialize when DOM is loaded and GSAP is available
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        animations.init();
    }
});