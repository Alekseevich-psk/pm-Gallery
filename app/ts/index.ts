import PmGallery from './gallery/pm-gallery';

const gallery = new PmGallery('.pm-gallery', {
    classForPreviews: '.pm-gallery__preview-picture',
    classForMainPicture: '.pm-gallery__main-picture',
    activeSlide: 0,
    autoPlay: 2000,
});

// console.log(gallery);



