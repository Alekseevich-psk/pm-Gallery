import getOptionsBreakpoints from "../helpers/get-options-breakpoints";
import initAutoPlay from "../modules/autoplay/init-auto-play";
import initPagination from "../modules/pagination/init-pagination";
import initPosPreviews from "../previews/position-previews/init-position-previews";

function changeFullScreen(pmGallery: any) {
    pmGallery.wrapper.addEventListener('fullScreen', () => {
        getOptionsBreakpoints(pmGallery);
        initPosPreviews(pmGallery);
        initAutoPlay(pmGallery);
        initPagination(pmGallery);
    })
}

export default changeFullScreen;