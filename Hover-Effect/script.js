const boxes = [...document.querySelectorAll(".box")];
console.log(boxes);
boxes.forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    console.log(e);
    const cursorPositionX = e.clientX - box.getBoundingClientRect().left;
    const cursorPositionY = e.clientY - box.getBoundingClientRect().top;
    const width = box.getBoundingClientRect().width;
    console.log(cursorPositionX, width);
    console.log("top", cursorPositionY);
    console.log("top box");
    console.log(e);
    if (cursorPositionY > width / 2) {
      !box.classList.contains("topEffect") && box.classList.add("topEffect");
    } else {
      !box.classList.contains("bottomEffect") &&
        box.classList.add("bottomEffect");
    }
    if (cursorPositionX > width / 2) {
      !box.classList.contains("rightEffect") &&
        box.classList.add("rightEffect");
    } else {
      !box.classList.contains("leftEffect") && box.classList.add("leftEffect");
    }
    box.addEventListener("mouseleave", () => {
      box.classList.remove("rightEffect");
      box.classList.remove("leftEffect");
    });
  });
});
