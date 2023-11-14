import preloaderGallery from "../../modules/preloader-gallery/preloader-gallery";

function changeInitGallery(pmGallery: any) {
    pmGallery.wrapper.addEventListener('initGallery', () => {
        preloaderGallery(pmGallery);
    });
}

export default changeInitGallery;