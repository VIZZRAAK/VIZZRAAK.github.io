

let allImages = document.querySelectorAll(".display-image-container");

for (let image of allImages) {
    image.addEventListener("click", () => {

        let imageUrl = image.getAttribute("data-imgName");
        let imageSection = image.getAttribute("data-imgSection");

        document.documentElement.style.setProperty("--modal-elements-display", "block");
        document.documentElement.style.setProperty("--modal-background-image", `url("/assets/${imageSection}/${imageUrl}")`);
        document.documentElement.style.setProperty("--document-overflow-mode", "hidden");
    })
}

let modalCloser = document.querySelector(".modal-remove");

modalCloser.addEventListener("click", () => {
    document.documentElement.style.setProperty("--modal-elements-display", "none");
    document.documentElement.style.setProperty("--modal-background-image", "url(\"\")");
    document.documentElement.style.setProperty("--document-overflow-mode", "scroll");
})