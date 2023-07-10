const gallery1 = new PmGallery(".pm-gallery--1", {
    elementForPreviews: ".pm-gallery__preview-picture",
    orientationPreviews: "horizontallyBottom",
    navigation: {
        elBtnPrev: ".main__btn-slide--prev",
        elBtnNext: ".main__btn-slide--next",
    },
    pagination: true,
    fullScreenMode: true,
    activeSlide: 0,
    // autoPlay: 3000,
    objectFit: 'contain',
    // animationSlide: 'fade',
});

const gallery2 = new PmGallery(".pm-gallery--2", {
    fullScreenMode: true,
    autoPlay: 3000,
    pagination: true,
});

const gallery3 = new PmGallery(".pm-gallery--3", {
    orientationPreviews: "horizontallyTop",
    activeSlide: 2,
    pagination: true,
});

const gallery4 = new PmGallery(".pm-gallery--4", {
    orientationPreviews: "verticalRight",
    autoPlay: 5000,
    pagination: true,
});
