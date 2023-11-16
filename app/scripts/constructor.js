(function () {
    const constructor = document.querySelector(".constructor");
    if (!constructor) return;

    const constructorGallery = constructor.querySelector(".constructor__gallery");

    new PmGallery(constructorGallery, {
        countPreSlides: 4,
        positionPreviews: "bottom",
        controls: {
            btnPrev: ".main__btn-slide--prev",
            btnNext: ".main__btn-slide--next",
            btnFullScreen: ".main__btn-slide--fullscreen",
        },
    });
})();
