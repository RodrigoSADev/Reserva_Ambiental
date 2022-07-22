export default function initSlide() {
  let slideIndex = 0;
  function tradeImage() {
    const imagens = document.querySelectorAll(".slide");
    for (let i = 0; i < imagens.length; i++) {
      imagens[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > imagens.length) {
      slideIndex = 1;
    }
    imagens[slideIndex - 1].classList.add("active");
    setTimeout(tradeImage, 2000);
  }
  tradeImage();
}
