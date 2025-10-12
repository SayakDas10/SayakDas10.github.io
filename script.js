document.addEventListener('DOMContentLoaded', () => {

    // --- Animated Title Logic ---
    const name = 'Sayak';
    let index = 0;
    setInterval(() => {
        const currentTitle = name.substring(0, index);
        document.title = currentTitle || '▋';
        index = (index + 1) % (name.length + 1);
    }, 600); 

    
    // --- Dynamic "Last Updated" Date Logic ---
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const today = new new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-GB', options);
        lastUpdatedElement.textContent = formattedDate;
    }

    // --- Dark Mode Logic ---
    // This now runs on every page to apply the theme from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // This logic only runs if the toggle switch exists on the page
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Ensure the toggle reflects the current theme state
        if (currentTheme === 'dark') {
            themeToggle.checked = true;
        }

        // Add the event listener to handle theme changes
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- Mobile Navigation Logic ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navBar = document.getElementById('left-bar');
    const overlay = document.getElementById('overlay');

    function closeMenu() {
        navBar.classList.remove('nav-open');
        document.body.classList.remove('nav-open-body');
    }

    if (hamburgerMenu && navBar && overlay) {
        hamburgerMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            // This now toggles the classes, allowing the button to open AND close the menu.
            navBar.classList.toggle('nav-open');
            document.body.classList.toggle('nav-open-body');
        });

        overlay.addEventListener('click', closeMenu);

        navBar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});
