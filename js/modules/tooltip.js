export default function initTooltip() {
  const tooltips = document.querySelectorAll(".js-tooltip");
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
  function onMouseOver(event) {
    const tooltipBox = createTooltipBox(this);
    tooltipBox.style.top = event.pageY + "px";
    tooltipBox.style.left = event.pageX + "px";
    onMouseMove.tooltipBox = tooltipBox;
    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }
  const onMouseLeave = {
    tooltipBox: "",
    handleEvent() {
      this.tooltipBox.remove();
    },
  };
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };
  function createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
