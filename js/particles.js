// Particle effect using Vanta.js
const particles = {
    instance: null,

    init() {
        if (typeof VANTA !== 'undefined' && typeof THREE !== 'undefined') {
            this.instance = VANTA.NET({
                el: "#vanta-canvas",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xC41230,
                backgroundColor: 0x000000,
                points: 15.00,
                maxDistance: 25.00,
                spacing: 17.00
            });
        }
    },

    destroy() {
        if (this.instance) {
            this.instance.destroy();
        }
    }
};

// Initialize when DOM is loaded and dependencies are available
document.addEventListener('DOMContentLoaded', () => {
    particles.init();
});