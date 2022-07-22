export default function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tab-menu li");
  const tabContent = document.querySelectorAll(".js-tab-content section");
  const activeClass = "active";
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);
    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove(activeClass);
      });
      const direction = tabContent[index].dataset.anime;
      tabContent[index].classList.add(activeClass, direction);
    }
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
