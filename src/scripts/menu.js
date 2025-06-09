// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuBtn.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active");
        mobileMenu.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenuBtn.classList.remove("active");
        mobileMenu.classList.remove("active");
      }
    });
  }
});
