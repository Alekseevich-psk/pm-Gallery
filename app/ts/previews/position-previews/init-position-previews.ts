import getCountPreviews from "../helpers/get-count-previews";
import getPosPreviews from "../helpers/get-pos-previews";
import setPosPreviews from "../helpers/set-position-previews";

function initPosPreviews(pmGallery: any) {

    const updateModules = [
        getPosPreviews,
        getCountPreviews,
        setPosPreviews,
    ];

    updateModules.forEach(module => {
        pmGallery = Object.assign(pmGallery, module(pmGallery));
    });
}

export default initPosPreviews;