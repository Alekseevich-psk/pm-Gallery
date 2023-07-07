const gallery1 = new PmGallery(".pm-gallery--1", {
    elementForPreviews: ".pm-gallery__preview-picture",
    orientationPreviews: "horizontallyBottom",
    navigation: {
        elBtnPrev: ".main__btn-slide--prev",
        elBtnNext: ".main__btn-slide--next",
    },
    fullScreenMode: true,
    activeSlide: 0,
    autoPlay: 3000,
});

const gallery2 = new PmGallery(".pm-gallery--2", {
    fullScreenMode: true,
    autoPlay: 3000,
});

const gallery3 = new PmGallery(".pm-gallery--3", {
    orientationPreviews: "horizontallyTop",
    activeSlide: 2,
});

const gallery4 = new PmGallery(".pm-gallery--4", {
    orientationPreviews: "verticalRight",
    autoPlay: 5000,
});
