const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

function toggleMobileMenu() {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
}

btn.addEventListener('click', () => {
    toggleMobileMenu();
})

function scrollToSection(section) {
    var menuElement = document.querySelector('#menu');
    if (menuElement && !menuElement.classList.contains('hidden')) {
        toggleMobileMenu();
    }

    window.location.href = section;
};

document.getElementById('services-btn').addEventListener('click', () => {
    scrollToSection("#services");
})

document.getElementById('about-btn').addEventListener('click', () => {
    scrollToSection("#about");
})

document.getElementById('projects-btn').addEventListener('click', () => {
    scrollToSection("#projects");
})

document.getElementById('contact-btn').addEventListener('click', () => {
    scrollToSection("#contact");
})