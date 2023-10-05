import countPreSlides from "./count-pre-slides";
import positionPreviews from "./position-previews/position-previews";
import getOptionsBreakpoints from "../helpers/get-options-breakpoints";
import getPosPreviews from "../helpers/get-pos-previews";

function resizeWindow(pmGallery: any) {

    const updateModules = [
        getOptionsBreakpoints,
        getPosPreviews,
        countPreSlides,
        positionPreviews,
    ];

    updateModules.forEach(module => {
        pmGallery = Object.assign(pmGallery, module(pmGallery));
    });
}

export default resizeWindow;