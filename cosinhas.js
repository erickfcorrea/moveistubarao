const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
    const section = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  });
});
