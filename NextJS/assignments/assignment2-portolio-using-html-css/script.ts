// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
    anchor.addEventListener('click', function (e: Event) {
        e.preventDefault();
        const targetId = (anchor as HTMLAnchorElement).hash; // Use the `hash` property instead of `getAttribute('href')`
        const targetElement = document.querySelector(targetId); // `querySelector` can return null
        if (targetElement instanceof HTMLElement) { // Check if `targetElement` is an instance of `HTMLElement`
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger") as HTMLElement;
const navMenu = document.querySelector("nav ul") as HTMLUListElement;

hamburger.addEventListener("click", toggleMenu);

function toggleMenu(): void {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close menu when a link is clicked
document.querySelectorAll("nav a").forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}