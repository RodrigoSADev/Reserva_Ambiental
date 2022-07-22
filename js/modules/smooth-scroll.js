export default function smoothScroll() {
  const internalLink = document.querySelectorAll(".js-menu a[href^='#']");
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  if (internalLink.length) {
    internalLink.forEach((item) => {
      item.addEventListener("click", scrollToSection);
    });
  }
}
