document.addEventListener('DOMContentLoaded', () => {
    // Update footer copyright year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Update footer last modified date
    const lastModSpan = document.getElementById('last-modified');
    if (lastModSpan) {
        lastModSpan.textContent = document.lastModified;
    }

    // Create hamburger button and insert it into header before nav
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    if (header && nav) {
        const hamburger = document.createElement('button');
        hamburger.setAttribute('aria-label', 'Toggle menu');
        hamburger.classList.add('hamburger');
        hamburger.innerHTML = '&#9776;'; // Hamburger symbol ≡
        header.insertBefore(hamburger, nav);

        // Toggle navigation menu visibility
        hamburger.addEventListener('click', () => {
            const isVisible = nav.classList.toggle('nav-open');
            hamburger.innerHTML = isVisible ? '&#10005;' : '&#9776;'; // X or hamburger
            nav.classList.toggle('hidden'); // Toggle hidden class for nav
        });
    }
});
