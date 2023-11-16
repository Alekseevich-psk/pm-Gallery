import checkTrackLength from "../helpers/check-track-length";
import getSizePreviews from "./get-size-previews";
import getPosPreviews from "./get-pos-previews";
import setPosPreviews from "./set-position-previews";
import setSizePreviews from "./set-size-previews";
import setCenterPosPreviews from "./set-center-pos-previews";

function initPosPreviews(pmGallery: any) {

    const updateModules = [
        getPosPreviews,
        getSizePreviews,
        checkTrackLength,
        setSizePreviews,
        setPosPreviews,
        setCenterPosPreviews,
    ];

    updateModules.forEach(module => {
        Object.assign(pmGallery, module(pmGallery));
    });
}

export default initPosPreviews;