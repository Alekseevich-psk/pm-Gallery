import getCountPreviews from "../get-count-previews";
import getPosPreviews from "../get-pos-previews";
import setPosPreviews from "./set-position-previews";

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