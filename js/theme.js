/**
 * Theme Toggle Functionality
 * Handles switching between light and dark modes and saves preference
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;
    const moonIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    const sunIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Initial theme setup
    if (savedTheme) {
        rootElement.setAttribute('data-theme', savedTheme);
        updateToggleIcon(savedTheme);
    } else if (!systemPrefersDark) {
        rootElement.setAttribute('data-theme', 'light');
        updateToggleIcon('light');
    } else {
        rootElement.setAttribute('data-theme', 'dark');
        updateToggleIcon('dark');
    }

    // Toggle theme
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = rootElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        rootElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon(newTheme);
    });

    function updateToggleIcon(theme) {
        if (theme === 'light') {
            themeToggleBtn.innerHTML = moonIcon; // Show moon to switch to dark
            themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        } else {
            themeToggleBtn.innerHTML = sunIcon; // Show sun to switch to light
            themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
        }
    }
});
