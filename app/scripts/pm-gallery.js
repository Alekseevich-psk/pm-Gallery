(function () {
    const parent = document.querySelector(".main");

    if (!parent) return;

    new PmGallery('.main__pm-gallery', {
        countPreSlides: 4,
        positionPreviews: "bottom",
        controls: {
            btnPrev: ".main__btn-slide--prev",
            btnNext: ".main__btn-slide--next",
            btnFullScreen: ".main__btn-slide--fullscreen",
        },
    });
})();
