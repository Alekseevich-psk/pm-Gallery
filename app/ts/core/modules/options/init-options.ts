import defOptions from "../../setting/def-options";
import breakpoints from "./breakpoints";

function initOptions(pmGallery: any) {
    if (pmGallery.fullScreen) {
        pmGallery.initOptions = Object.assign({},
            pmGallery.initOptions,
            defOptions.fullScreen,
            pmGallery.options?.fullScreen);
    } else {
        pmGallery.initOptions = Object.assign({},
            defOptions,
            pmGallery.options);
    }

    breakpoints(pmGallery);
}

export default initOptions;