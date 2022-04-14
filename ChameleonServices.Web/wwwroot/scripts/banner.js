let currentSlide;
let bannerBackground;
let bannerPreload;
let timer;

function initBanner() {
    clearInterval(timer);

    var banner = document.querySelector("header");
    bannerBackground = banner.querySelector("div#banner-background");
    bannerPreload = banner.querySelector("div#banner-preload");

    var first = bannerPreload.querySelectorAll("div.slide")[0];
    if (first) {
        first.classList.add("current");
        currentSlide = first;

        timer = setInterval(changeImage, 3000);
    }
}

function nextSlide() {
    let curr = currentSlide;
    let end = curr.nextElementSibling == null;

    if (end)
        return document.querySelectorAll("header div#banner-preload div.slide")[0];

    return curr.nextElementSibling;
}

function changeImage() {
    console.debug("changing image");

    let curr = currentSlide;
    let next = nextSlide();

    curr.classList.remove("current");
    next.classList.add("current");

    bannerPreload.appendChild(curr);
    banner.r
    currentSlide = next;
}