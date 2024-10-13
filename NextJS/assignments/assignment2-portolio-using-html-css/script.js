const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
hamburger.addEventListener("click", toggleMenu);
function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
document.querySelectorAll("nav a").forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
const text = document.querySelector('.horizontal-text');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    text.style.transform = `translateX(${-scrollPos}px)`;
});
export {};
