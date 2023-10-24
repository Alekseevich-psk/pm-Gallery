import initPosPreviews from "../previews/position-previews/init-position-previews";
import getOptionsBreakpoints from "../helpers/get-options-breakpoints";

function resizeWindow(pmGallery: any) {
    window.addEventListener('resize', () => {
        getOptionsBreakpoints(pmGallery);
        initPosPreviews(pmGallery);
    });
}

export default resizeWindow;