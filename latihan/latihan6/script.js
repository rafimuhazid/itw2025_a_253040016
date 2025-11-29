const nav = document.querySelector('.nav');
const search = document.querySelector('nav .search');

search.addEventListener('click', function(){
    nav.classList.toggle('openSearch');
});

const menuToggle = document.querySelector('.menu-toggle input');
const navbar = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    navbar.classList.toggle('slide');
});