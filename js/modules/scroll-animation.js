export default function initScrollAnimation() {
  const activeClass = "active";
  const sections = document.querySelectorAll(".js-scroll");
  const calcWindow = window.innerHeight * 0.6;
  function scrollAnimation() {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - calcWindow;
      if (isSectionVisible < 0) {
        item.classList.add(activeClass);
      } else if (item.classList.contains(activeClass)) {
        item.classList.remove(activeClass);
      }
    });
  }
  scrollAnimation();
  window.addEventListener("scroll", scrollAnimation);
}
