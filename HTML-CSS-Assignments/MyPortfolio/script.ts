const hamburger = document.querySelector(".hamburger") as HTMLElement;
const navMenu = document.querySelector("nav ul") as HTMLUListElement;

hamburger.addEventListener("click", toggleMenu);
function toggleMenu(): void {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
document.querySelectorAll("nav a").forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const text = document.querySelector('.horizontal-text') as HTMLElement;
window.addEventListener('scroll', () => {
    const scrollPos: number = window.scrollY;
    text.style.transform = `translateX(${-scrollPos}px)`;
});