let showOptions = {
    root: null,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 0.1,
}

const ioShowCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0px)";

            observer.unobserve(entry.target);
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = "translateY(20px)";
        }
    })
} 

let showIo = new IntersectionObserver(ioShowCallback, showOptions)

let targetElements = document.querySelectorAll(".fade-in");

for (let targetElement of targetElements) {
    showIo.observe(targetElement);
}