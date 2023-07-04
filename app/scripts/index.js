const gallery1 = new PmGallery(".pm-gallery--1", {
    elForPreviews: ".pm-gallery__preview-picture",
    elForMainPicture: ".pm-gallery__main-picture",
    orientationPreviews: "horizontallyBottom",
    navigation: {
        elBtnPrev: '.main__btn-slide--prev',
        elBtnNext: '.main__btn-slide--next',
    },
    fullScreenMode: true,
    activeSlide: 0,
    autoPlay: 3000,
});

const gallery2 = new PmGallery(".pm-gallery--2", {
    orientationPreviews: "horizontallyBottom",
    fullScreenMode: true,
    autoPlay: 3000,
});
