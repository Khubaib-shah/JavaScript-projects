const activeImage = document.querySelector(".active-image img");
const images = document.querySelectorAll(".img");

images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    console.log(image.firstElementChild.src);
    console.log(activeImage.src);
    activeImage.src = image.firstElementChild.src;
    images.forEach((image) => {
      image.classList.remove("change-border");
    });
    image.classList.add("change-border");
  });
});
