(function () {
    const gallery = document.querySelector(".pm-gallery");

    new PmGallery(".pm-gallery", {
        countPreSlides: 4,
        positionPreviews: 'bottom',
        controls: {
            btnPrev: ".main__btn-slide--prev",
            btnNext: ".main__btn-slide--next",
            btnFullScreen: ".main__btn-slide--fullscreen",
        },
    });
})();