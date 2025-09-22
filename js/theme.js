// Theme toggle functionality
const themeToggle = {
    init() {
        this.themeToggleBtn = document.getElementById('theme-toggle');
        this.darkIcon = document.getElementById('theme-toggle-dark-icon');
        this.lightIcon = document.getElementById('theme-toggle-light-icon');
        
        // Set initial theme
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            this.darkIcon.classList.add('hidden');
            this.lightIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            this.darkIcon.classList.remove('hidden');
            this.lightIcon.classList.add('hidden');
        }

        // Add event listener
        this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    },

    toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            this.darkIcon.classList.remove('hidden');
            this.lightIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            this.darkIcon.classList.add('hidden');
            this.lightIcon.classList.remove('hidden');
        }
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    themeToggle.init();
});