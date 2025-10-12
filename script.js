document.addEventListener('DOMContentLoaded', () => {

    const name = 'Sayak';
    let index = 0;
    setInterval(() => {
        const currentTitle = name.substring(0, index);
        document.title = currentTitle || '▋';
        index = (index + 1) % (name.length + 1);
    }, 600); 

    
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const today = new new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-GB', options);
        lastUpdatedElement.textContent = formattedDate;
    }

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        if (currentTheme === 'dark') {
            themeToggle.checked = true;
        }

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
            navBar.classList.toggle('nav-open');
            document.body.classList.toggle('nav-open-body');
        });

        overlay.addEventListener('click', closeMenu);

        navBar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});
