import PmGallery from './gallery/pm-gallery';

const gallery = new PmGallery('.pm-gallery', {
    elForPreviews: '.pm-gallery__preview-picture',
    elForMainPicture: '.pm-gallery__main-picture',
    navigation: {
        elBtnPrev: '.main__btn-slide--prev',
        elBtnNext: '.main__btn-slide--next',
    },
    fullScreenMode: true,
    activeSlide: 0,
    autoPlay: 2000,
});

// console.log(gallery);