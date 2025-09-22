// Carousel functionality
const carousel = {
    currentItem: 0,
    items: [],
    indicators: [],
    interval: null,
    duration: 5000, // 5 seconds

    init() {
        this.items = document.querySelectorAll('.carousel-item');
        this.prevBtn = document.getElementById('carousel-prev');
        this.nextBtn = document.getElementById('carousel-next');
        this.indicatorsContainer = document.getElementById('carousel-indicators');

        // Create indicators
        this.items.forEach((_, index) => {
            const button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.classList.add('w-3', 'h-3', 'rounded-full', 'bg-white/50');
            button.addEventListener('click', () => this.goToItem(index));
            this.indicatorsContainer.appendChild(button);
            this.indicators.push(button);
        });

        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Show initial item
        this.showItem(0);
        this.startInterval();
    },

    showItem(index) {
        this.items.forEach((item, i) => {
            if (i === index) {
                item.classList.remove('hidden');
                this.indicators[i].classList.add('bg-white');
                this.indicators[i].classList.remove('bg-white/50');
            } else {
                item.classList.add('hidden');
                this.indicators[i].classList.remove('bg-white');
                this.indicators[i].classList.add('bg-white/50');
            }
        });
        this.currentItem = index;
    },

    next() {
        const nextIndex = (this.currentItem + 1) % this.items.length;
        this.showItem(nextIndex);
    },

    prev() {
        const prevIndex = (this.currentItem - 1 + this.items.length) % this.items.length;
        this.showItem(prevIndex);
    },

    goToItem(index) {
        this.showItem(index);
        this.resetInterval();
    },

    startInterval() {
        this.interval = setInterval(() => this.next(), this.duration);
    },

    resetInterval() {
        clearInterval(this.interval);
        this.startInterval();
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    carousel.init();
});