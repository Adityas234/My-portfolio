const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
document.getElementById("year").textContent = new Date().getFullYear();

// DARK MODE DEFAULT
document.body.classList.add("dark-theme");

const toggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeIcon.textContent = "light_mode";
  } else {
    themeIcon.textContent = "dark_mode";
  }
});
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
