export default function initNumberAnimation() {}
function numberAnimation() {
  const numbers = document.querySelectorAll(".js-number");
  numbers.forEach((item) => {
    const total = Number(item.innerText);
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      item.innerText = start;
      if (start > total) {
        item.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  });
}

function handleMutation(mutation) {
  if (mutation[0].target.classList.contains("active")) {
    observer.disconnect();
    numberAnimation();
  }
}
const observeTarget = document.querySelector(".numbers");
const observer = new MutationObserver(handleMutation);
observer.observe(observeTarget, { attributes: true });
