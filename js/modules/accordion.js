export default function initAccordion() {
  const activeClass = "active";
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion(event) {
      event.currentTarget.classList.toggle(activeClass);
      event.currentTarget.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
