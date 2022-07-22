import outsideClick from "./outsideclick.js";
export default function initMenuMobile() {
  const menuMobile = document.querySelector(".menu-mobile");
  const menuList = document.querySelector(".mobile-list");
  const eventsMobile = ["click", "touchstart"];
  function openMenu(event) {
    menuList.classList.add("active");
    menuMobile.classList.add("active");
    outsideClick(menuList, eventsMobile, () => {
      menuList.classList.remove("active");
      menuMobile.classList.remove("active");
    });
  }
  eventsMobile.forEach((e) => {
    menuMobile.addEventListener(e, openMenu);
  });
  menuMobile.addEventListener("click", openMenu);
}
