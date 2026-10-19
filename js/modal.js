
var currentModalImageIndex = 0;
let allImages = document.querySelectorAll(".display-image-container");
var maxModalImageIndex = allImages.length;

for (let imageIndex = 0; imageIndex < allImages.length; imageIndex++) {

    let image = allImages[imageIndex];

    image.addEventListener("click", () => {

        let imageUrl = image.getAttribute("src");

        document.documentElement.style.setProperty("--modal-elements-display", "block");
        document.querySelector(".modal-image").setAttribute("src", imageUrl);
        document.documentElement.style.setProperty("--document-overflow-mode", "hidden");
        currentModalImageIndex = imageIndex;
    })
}

let modalCloser = document.querySelector(".modal-remove");
let modalPrev = document.querySelector(".modal-previous");
let modalNext = document.querySelector(".modal-next");

modalCloser.addEventListener("click", () => {
    document.documentElement.style.setProperty("--modal-elements-display", "none");
    document.documentElement.style.setProperty("--modal-background-image", "url(\"\")");
    document.documentElement.style.setProperty("--document-overflow-mode", "scroll");
})

modalPrev.addEventListener("click", () => {
    if (currentModalImageIndex <= 0) {
        currentModalImageIndex = maxModalImageIndex - 1;
    } else {
        currentModalImageIndex -= 1;
    }
    document.querySelector(".modal-image").setAttribute("src", allImages[currentModalImageIndex].getAttribute("src"));
})

modalNext.addEventListener("click", () => {
    if (currentModalImageIndex >= (maxModalImageIndex - 1)) {
        currentModalImageIndex = 0;
    } else {
        currentModalImageIndex += 1;
    }
    document.querySelector(".modal-image").setAttribute("src", allImages[currentModalImageIndex].getAttribute("src"));
})