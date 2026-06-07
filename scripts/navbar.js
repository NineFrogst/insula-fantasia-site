document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('navbar-list');
    const navLinks = navMenu.querySelectorAll('a');

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        }
    });
});