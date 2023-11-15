import checkLoadMainPicture from "./check-load-main-picture";
import checkLoadPreviews from "./check-load-previews";

function initPreloaderGallery(pmGallery: any) {
    checkLoadPreviews(pmGallery);
    checkLoadMainPicture(pmGallery, pmGallery.initOptions.activeIndex);
}

export default initPreloaderGallery;