import getCountPreviews from "../helpers/get-count-previews";
import getPosPreviews from "../helpers/get-pos-previews";
import checkTrackLength from "../helpers/check-track-length";
import setPosPreviews from "./set-position-previews";
import setSizePreviews from "../helpers/set-size-previews";

function initPosPreviews(pmGallery: any) {

    const updateModules = [
        getPosPreviews,
        getCountPreviews,
        checkTrackLength,
        setSizePreviews,
        setPosPreviews,
    ];

    updateModules.forEach(module => {
        pmGallery = Object.assign(pmGallery, module(pmGallery));
    });
}

export default initPosPreviews;