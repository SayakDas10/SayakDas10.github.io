// In script.js

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
        const today = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-GB', options);
        lastUpdatedElement.textContent = formattedDate;
    }

    // --- DARK MODE TOGGLE LOGIC (ADD THIS) ---
    const themeToggle = document.getElementById('theme-toggle');

    // Check for a saved theme in localStorage and apply it
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Add event listener for the toggle switch
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            // If the checkbox is checked, add the dark-mode class
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            // If it's not checked, remove the dark-mode class
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
    // --- END OF DARK MODE LOGIC ---
});
