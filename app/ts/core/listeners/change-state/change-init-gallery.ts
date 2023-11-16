import preloaderGallery from "../../modules/preloader-gallery/init-preloader-gallery";

function changeInitGallery(pmGallery: any) {
    pmGallery.wrapper.addEventListener('initGallery', () => {
        preloaderGallery(pmGallery);
    });
}

export default changeInitGallery;