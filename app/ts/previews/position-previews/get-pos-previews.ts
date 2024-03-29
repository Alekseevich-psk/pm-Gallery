import pmgClasses from "../../core/setting/pmgClasses";

function getPosPreviews(pmGallery: any) {
    const posPreviews = pmGallery.initOptions.positionPreviews;

    const res = {
        posPreviews: pmgClasses['vertical']
    }

    if (!posPreviews) {
        return res;
    }

    if (posPreviews === pmgClasses['posPreviewsLeft'] || posPreviews === pmgClasses['posPreviewsRight']) {
        res.posPreviews = pmgClasses['vertical'];
    }

    if (posPreviews === pmgClasses['posPreviewsTop'] || posPreviews === pmgClasses['posPreviewsBottom']) {
        res.posPreviews = pmgClasses['horizontal'];
    }

    return res;
}

export default getPosPreviews;